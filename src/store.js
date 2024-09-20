import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './todosSlice';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;
