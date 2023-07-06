import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import api from '../../config/axios';
import { NewLecturer, Lecturer, LecturersState } from '../../models/Lecturer';

const initialState: LecturersState = {
  lecturers: [],
  isLoading: false,
  error: null,
};

export const fetchLecturers = createAsyncThunk(
  'lecturers/fetchLecturers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`/api/admin/get-lecturers`, { withCredentials: true });
      return response.data.lecturers;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const addLecturer = createAsyncThunk(
  'lecturers/addLecturer',
  async (newLecturer: NewLecturer, { rejectWithValue }) => {
    try {
      const response = await toast.promise(
        api.post('/api/admin/upload-lecturer', newLecturer, { withCredentials: true }),
        {
          pending: 'Creating lecturer...',
          success: `Lecturer created successfully.`,
          error: 'Server timedout while uploading.',
        },
      );
      return response.data.data.lecturer;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const updateLecturer = createAsyncThunk(
  'lecturers/updateLecturer',
  async (updatedLecturer: Lecturer, { rejectWithValue }) => {
    try {
      const response = await toast.promise(
        api.put(`/api/lecturers/${updatedLecturer.id}`, updatedLecturer),
        {
          pending: 'Updating lecturer...',
          success: `Lecturer data updated successfully.`,
          error: 'Server timedout while updating.',
        },
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const deleteLecturer = createAsyncThunk(
  'lecturers/deleteLecturer',
  async (lecturerId: string, { rejectWithValue }) => {
    try {
      await toast.promise(api.delete(`/api/admin/${lecturerId}`), {
        pending: 'Deleting lecturer...',
        success: `Lecturer deleted successfully.`,
        error: 'Server timedout while deleting.',
      });
      return lecturerId;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

const lecturersSlice = createSlice({
  name: 'lecturers',
  initialState,
  reducers: {
    clearLecturers(state) {
      state.lecturers = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLecturers.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchLecturers.fulfilled, (state, action: PayloadAction<Lecturer[]>) => {
      state.isLoading = false;
      state.error = null;
      state.lecturers = action.payload;
    });
    builder.addCase(fetchLecturers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
    builder.addCase(addLecturer.fulfilled, (state, action: PayloadAction<Lecturer>) => {
      state.lecturers.push(action.payload);
    });
    builder.addCase(updateLecturer.fulfilled, (state, action: PayloadAction<Lecturer>) => {
      const updatedLecturer = action.payload;
      const index = state.lecturers.findIndex((lecturer) => lecturer.id === updatedLecturer.id);
      if (index !== -1) {
        state.lecturers[index] = updatedLecturer;
      }
    });
    builder.addCase(deleteLecturer.fulfilled, (state, action: PayloadAction<string>) => {
      const deletedLecturerId = action.payload;
      state.lecturers = state.lecturers.filter((lecturer) => lecturer.id !== deletedLecturerId);
    });
  },
});

export const { clearLecturers } = lecturersSlice.actions;
export default lecturersSlice.reducer;
