import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '..';

export interface AppStateProps {
  currentRouteName: string;
}

const initialState: AppStateProps = {
  currentRouteName: '',
};

export const appStateSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    reset: state => {
      state.currentRouteName = '';
    },
    setActiveRouteName: (state, action: PayloadAction<string>) => {
      state.currentRouteName = action.payload;
    },
  },
});

export const {reset, setActiveRouteName} = appStateSlice.actions;

export const selectActiveRouteName = (state: RootState) =>
  state.appState.currentRouteName;

export default appStateSlice.reducer;
