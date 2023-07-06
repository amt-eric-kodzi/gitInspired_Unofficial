import { combineReducers } from 'redux';
import authReducer from './authSlice';
import studentsReducer from './studentsSlice';
import lecturersSlice from './lecturersSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  students: studentsReducer,
  lecturers: lecturersSlice,
});

export default rootReducer;
