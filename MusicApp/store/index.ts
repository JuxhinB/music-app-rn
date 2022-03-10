import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import appStateReducer from './slices/appStateSlice';
import videosReducer from './slices/videosSlice';

export const store = configureStore({
  reducer: {
    appState: appStateReducer,
    videos: videosReducer,
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
