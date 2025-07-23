import { createSlice } from '@reduxjs/toolkit';

interface ProjectState {
  list: string[];
}

const initialState: ProjectState = {
  list: ['Project Alpha', 'Project Beta'],
};

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addProject } = projectSlice.actions;
export default projectSlice.reducer;