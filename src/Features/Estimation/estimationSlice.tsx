import { createSlice } from '@reduxjs/toolkit';

interface EstimationState {
  list: string[];
}

const initialState: EstimationState = {
  list: ['Website Redesign', 'Mobile App UI'],
};

const estimationSlice = createSlice({
  name: 'estimations',
  initialState,
  reducers: {
    addEstimation: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addEstimation } = estimationSlice.actions;
export default estimationSlice.reducer;