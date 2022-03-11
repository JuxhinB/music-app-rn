import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import {RootState} from '..';
import {Genre, Video} from '../../Types';

export interface VideosProps {
  loading: boolean;
  genres: Genre[];
  selectedGenres: Genre[];
  videos: Video[];
  videosByGenre: Video[];
  videosBySearch: Video[];
  error: AxiosError | null;
  reload: boolean;
}

const initialState: VideosProps = {
  loading: false,
  genres: [],
  selectedGenres: [],
  videos: [],
  videosByGenre: [],
  videosBySearch: [],
  error: null,
  reload: false,
};

export const appStateSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    resetvideosByGenre: state => {
      state.videosByGenre = state.videos;
    },
    resetSelectedGenres: state => {
      state.selectedGenres = state.genres;
    },
    resetAll: state => {
      state.videosByGenre = [];
      state.selectedGenres = [];
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setVideos: (state, action: PayloadAction<Video[]>) => {
      state.videosBySearch = action.payload;
      state.videos = action.payload;
    },
    setSelectedGenres: (state, action: PayloadAction<Genre[]>) => {
      let tempArr: Video[] = [];
      action.payload.map(genre => {
        state.videos.map(video => {
          if (genre.id === video.genre_id) {
            tempArr.push(video);
          }
        });
      });

      state.videosByGenre = tempArr;
      state.selectedGenres = action.payload;
    },
    setVideosBySearch: (state, action: PayloadAction<string>) => {
      let tempArr: Video[] = [];
      if (action.payload) {
        state.videos.map(video => {
          if (
            `${video.title}`
              .concat(video.artist)
              .toLowerCase()
              .includes(action.payload.toLowerCase())
          ) {
            tempArr.push(video);
          }
        });
      } else {
        tempArr = state.videos;
      }

      state.videosBySearch = tempArr;
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
  resetvideosByGenre,
  resetSelectedGenres,
  resetAll,
  setLoading,
  setVideos,
  setSelectedGenres,
  setVideosBySearch,
  setGenres,
  setError,
  setReload,
} = appStateSlice.actions;

export const selectGenres = (state: RootState) => state.videos.genres;

export const selectSelectedGenres = (state: RootState) =>
  state.videos.selectedGenres;

export const selectVideos = (state: RootState) => state.videos.videos;

export const selectVideosByGenre = (state: RootState) =>
  state.videos.videosByGenre;

export const selectVideosBySearch = (state: RootState) =>
  state.videos.videosBySearch;

export const selectError = (state: RootState) => state.videos.error;

export const selectReload = (state: RootState) => state.videos.reload;

export default appStateSlice.reducer;
