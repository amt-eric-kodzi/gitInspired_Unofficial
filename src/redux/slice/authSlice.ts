import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { AuthState, Profile, User } from '../../models/User';
import api from '../../config/axios';

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

export const login = createAsyncThunk('auth/login', async (payload: User, { rejectWithValue }) => {
  try {
    const response = await api.post('/api/auth/login', payload, { withCredentials:true});
    if (response.status !== 200) {
      return rejectWithValue(response.status);
    }
    const { profile } = response.data;

    return profile;
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      Cookies.remove('connect.sid');

      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action: PayloadAction<Profile>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    });
    builder.addCase(login.rejected, (state) => {
      state.isAuthenticated = false;
      state.user = null;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
