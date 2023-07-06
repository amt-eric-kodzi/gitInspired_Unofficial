import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
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
      const response = await api.get('/api/students');
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const addStudent = createAsyncThunk(
  'students/addStudent',
  async (newStudent: NewStudent, { rejectWithValue }) => {
    try {
      const response = await api.post('/api/admin/upload-students', newStudent);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const updateStudent = createAsyncThunk(
  'students/updateStudent',
  async (updatedStudent: Student, { rejectWithValue }) => {
    try {
      const response = await api.put(`/api/students/${updatedStudent.id}`, updatedStudent);
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
      await api.delete(`/api/students/${studentId}`);
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
