import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { AuthState, Profile, ResetPassword, User } from '../../models/User';
import api from '../../config/axios';
import { toast } from 'react-toastify';

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

export const login = createAsyncThunk('auth/login', async (payload: User, { rejectWithValue }) => {
  try {
    const response = await toast.promise(
      api.post('/api/auth/login', payload, { withCredentials: true }),
      {
        pending: 'Logging in...',
        success: `Login successfull.`,
        error: 'Login.',
      },
    );

    if (response.status !== 200) {
      return rejectWithValue(response.status);
    }
    const { profile } = response.data;

    return profile;
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (payload: ResetPassword, { rejectWithValue }) => {
    try {
      const response = await toast.promise(
        api.post(`/api/auth/reset-password`, payload, {
          withCredentials: true,
        }),
        {
          pending: 'Reseting passport...',
          success: `Password reset.`,
          error: 'Server timedout while uploading.',
        },
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

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
    builder.addCase(
      resetPassword.fulfilled,
      (state, action: PayloadAction<{ isVerified: boolean }>) => {
        const { isVerified } = action.payload;
        state.user!.isVerified = isVerified;
      },
    );
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
