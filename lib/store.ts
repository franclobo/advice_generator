import { configureStore } from '@reduxjs/toolkit';
import adviceReducer from './features/advices/adviceSlice';

export const adviceStore = () => {
  return configureStore({
    reducer: {
      advice: adviceReducer,
    },
  });
}

export type AppStore = ReturnType<typeof adviceStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];