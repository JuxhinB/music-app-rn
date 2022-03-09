import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import appStateReducer from './slices/appStateSlice';

export const store = configureStore({
  reducer: {
    appState: appStateReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
