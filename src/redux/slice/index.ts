import { combineReducers } from 'redux';
import authReducer from './authSlice';
import studentsReducer from './studentsSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  students: studentsReducer,
});

export default rootReducer;
