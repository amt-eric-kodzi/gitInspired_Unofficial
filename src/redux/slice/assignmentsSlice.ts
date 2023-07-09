import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import api from '../../config/axios';
import { Assignment, AssignmentsState, NewAssignment } from '../../models/Assignment';

const initialState: AssignmentsState = {
  assignments: [],
  isLoading: false,
  error: null,
};

export const fetchAssignments = createAsyncThunk(
  'assignments/fetchAssignments',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`/api/admin/get-assignments`, { withCredentials: true });
      return response.data.assignments;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const fetchLecturerAssignments = createAsyncThunk(
  'assignments/fetchAssignments',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`/api/lecturer/assignments`, { withCredentials: true });
      return response.data.assignments;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const addAssignment = createAsyncThunk(
  'assignments/addAssignment',
  async (newAssignment: NewAssignment, { rejectWithValue }) => {
    try {
      const response = await toast.promise(
        api.post('/api/lecturer/create-assignment', newAssignment, { withCredentials: true }),
        {
          pending: 'Creating assignment...',
          success: `Assignment created successfully.`,
          error: 'Server timedout while uploading.',
        },
      );
      return response.data.data.assignment;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const updateAssignment = createAsyncThunk(
  'assignments/updateAssignment',
  async (updatedAssignment: Assignment, { rejectWithValue }) => {
    try {
      const response = await toast.promise(
        api.put(`/api/assignments/${updatedAssignment.id}`, updatedAssignment),
        {
          pending: 'Updating assignment...',
          success: `Assignment data updated successfully.`,
          error: 'Server timedout while updating.',
        },
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const deleteAssignment = createAsyncThunk(
  'assignments/deleteAssignment',
  async (assignmentId: string, { rejectWithValue }) => {
    try {
      await toast.promise(api.delete(`/api/assignments/${assignmentId}`), {
        pending: 'Deleting assignment...',
        success: `Assignment deleted successfully.`,
        error: 'Server timedout while deleting.',
      });
      return assignmentId;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

const assignmentsSlice = createSlice({
  name: 'assignments',
  initialState,
  reducers: {
    clearAssignments(state) {
      state.assignments = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAssignments.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchAssignments.fulfilled, (state, action: PayloadAction<Assignment[]>) => {
      state.isLoading = false;
      state.error = null;
      state.assignments = action.payload;
    });
    builder.addCase(fetchAssignments.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
    builder.addCase(addAssignment.fulfilled, (state, action: PayloadAction<Assignment>) => {
      state.assignments.push(action.payload);
    });
    builder.addCase(updateAssignment.fulfilled, (state, action: PayloadAction<Assignment>) => {
      const updatedAssignment = action.payload;
      const index = state.assignments.findIndex(
        (assignment) => assignment.id === updatedAssignment.id,
      );
      if (index !== -1) {
        state.assignments[index] = updatedAssignment;
      }
    });
    builder.addCase(deleteAssignment.fulfilled, (state, action: PayloadAction<string>) => {
      const deletedAssignmentId = action.payload;
      state.assignments = state.assignments.filter(
        (assignment) => assignment.id !== deletedAssignmentId,
      );
    });
  },
});

export const { clearAssignments } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
