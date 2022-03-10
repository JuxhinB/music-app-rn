import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainNavigatorParams} from './route-types';

export {Routes, MainNavigatorParams} from './route-types';

export type ScreenProps<T extends keyof MainNavigatorParams> = {
  navigation: NativeStackNavigationProp<MainNavigatorParams, T>;
  route: RouteProp<MainNavigatorParams, T>;
};

export interface GetVideosResponse {
  genres: Genre[];
  videos: Video[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface Video {
  id: number;
  artist: string;
  title: number | string;
  release_year: number;
  genre_id: number;
  image_url: string;
}
