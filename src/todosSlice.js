import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    createTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
    togglePriority: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) task.important = !task.important;
    },
    updateTask: (state, action) => {
      const task = state.find(task => task.id === action.payload.id);
      if (task) task.description = action.payload.description;
    },
  },
});

export const { createTask, deleteTask, togglePriority, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
