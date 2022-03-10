import {Video} from '.';

export enum Routes {
  Home = 'Home',
  Search = 'Search',
  Categories = 'Categories',
  CategoryExtended = 'CategoryExtended',
  Details = 'Details',
}

export type MainNavigatorParams = {
  [Routes.Home]: {};
  [Routes.Search]: {};
  [Routes.Categories]: {};
  [Routes.CategoryExtended]: {};
  [Routes.Details]: {
    itemDetails: Video;
  };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainNavigatorParams {}
  }
}
