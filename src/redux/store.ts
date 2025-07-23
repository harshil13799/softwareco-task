 import { configureStore } from '@reduxjs/toolkit';
  import authReducer from '../Features/auth/authSlice';
  import projectReducer from '../Features/Projects/projectSlice';
  import estimationReducer from '../Features/Estimation/estimationSlice';
  
  export const store = configureStore({
    reducer: {
      auth: authReducer,
      projects: projectReducer,
      estimations: estimationReducer,
    },
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;