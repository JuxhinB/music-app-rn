import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import {RootState} from '..';
import {Genre, Video} from '../../Types';

export interface VideosProps {
  loading: boolean;
  genres: Genre[];
  selectedGenres: Genre[];
  videos: Video[];
  selectedVideos: Video[];
  error: AxiosError | null;
  reload: boolean;
}

const initialState: VideosProps = {
  loading: false,
  genres: [],
  selectedGenres: [],
  videos: [],
  selectedVideos: [],
  error: null,
  reload: false,
};

export const appStateSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    resetSelectedVideos: state => {
      state.selectedVideos = state.videos;
    },
    resetSelectedGenres: state => {
      state.selectedGenres = state.genres;
    },
    resetAll: state => {
      state.selectedVideos = [];
      state.selectedGenres = [];
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setVideos: (state, action: PayloadAction<Video[]>) => {
      state.videos = action.payload;
    },
    setGenres: (state, action: PayloadAction<Genre[]>) => {
      state.genres = action.payload;
    },
    setError: (state, action: PayloadAction<AxiosError | null>) => {
      state.error = action.payload;
    },
    setReload: (state, action: PayloadAction<boolean>) => {
      state.reload = action.payload;
    },
  },
});

export const {
  resetSelectedVideos,
  resetSelectedGenres,
  resetAll,
  setLoading,
  setVideos,
  setGenres,
  setError,
  setReload,
} = appStateSlice.actions;

export const selectGenres = (state: RootState) => state.videos.genres;

export const selectSelectedGenres = (state: RootState) =>
  state.videos.selectedGenres;

export const selectVideos = (state: RootState) => state.videos.videos;

export const selectSelectedVideos = (state: RootState) =>
  state.videos.selectedVideos;

export const selectError = (state: RootState) => state.videos.error;

export const selectReload = (state: RootState) => state.videos.reload;

export default appStateSlice.reducer;
