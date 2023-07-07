import { combineReducers } from 'redux';
import assignmentsSlice from './assignmentsSlice';
import authReducer from './authSlice';
import lecturersSlice from './lecturersSlice';
import studentsReducer from './studentsSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  students: studentsReducer,
  lecturers: lecturersSlice,
  assignments: assignmentsSlice,
});

export default rootReducer;
