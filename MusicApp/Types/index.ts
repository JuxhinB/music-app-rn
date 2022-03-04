import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainNavigatorParams} from './route-types';

export {Routes, MainNavigatorParams} from './route-types';

export type ScreenProps<T extends keyof MainNavigatorParams> = {
  navigation: NativeStackNavigationProp<MainNavigatorParams, T>;
  route: RouteProp<MainNavigatorParams, T>;
};
