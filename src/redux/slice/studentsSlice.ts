import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import api from '../../config/axios';
import { NewStudent, Student, StudentsState } from '../../models/Student';

const initialState: StudentsState = {
  students: [],
  isLoading: false,
  error: null,
};

export const fetchStudents = createAsyncThunk(
  'students/fetchStudents',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`/api/admin/get-students`, { withCredentials: true });
      return response.data.students;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const addStudent = createAsyncThunk(
  'students/addStudent',
  async (newStudent: NewStudent, { rejectWithValue }) => {
    try {
      const response = await toast.promise(
        api.post('/api/admin/upload-student', newStudent, { withCredentials: true }),
        {
          pending: 'Creating student...',
          success: `Student created successfully.`,
          error: 'Server timedout while uploading.',
        },
      );
      return response.data.data.student;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const updateStudent = createAsyncThunk(
  'students/updateStudent',
  async (updatedStudent: Student, { rejectWithValue }) => {
    try {
      const response = await toast.promise(
        api.put(`/api/students/${updatedStudent.id}`, updatedStudent),
        {
          pending: 'Updating student...',
          success: `Student data updated successfully.`,
          error: 'Server timedout while updating.',
        },
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const deleteStudent = createAsyncThunk(
  'students/deleteStudent',
  async (studentId: string, { rejectWithValue }) => {
    try {
      await toast.promise(api.delete(`/api/students/${studentId}`), {
        pending: 'Deleting student...',
        success: `Student deleted successfully.`,
        error: 'Server timedout while deleting.',
      });
      return studentId;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    clearStudents(state) {
      state.students = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStudents.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchStudents.fulfilled, (state, action: PayloadAction<Student[]>) => {
      state.isLoading = false;
      state.error = null;
      state.students = action.payload;
    });
    builder.addCase(fetchStudents.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
    builder.addCase(addStudent.fulfilled, (state, action: PayloadAction<Student>) => {
      state.students.push(action.payload);
    });
    builder.addCase(updateStudent.fulfilled, (state, action: PayloadAction<Student>) => {
      const updatedStudent = action.payload;
      const index = state.students.findIndex((student) => student.id === updatedStudent.id);
      if (index !== -1) {
        state.students[index] = updatedStudent;
      }
    });
    builder.addCase(deleteStudent.fulfilled, (state, action: PayloadAction<string>) => {
      const deletedStudentId = action.payload;
      state.students = state.students.filter((student) => student.id !== deletedStudentId);
    });
  },
});

export const { clearStudents } = studentsSlice.actions;
export default studentsSlice.reducer;
