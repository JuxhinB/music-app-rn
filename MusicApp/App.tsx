import React, {useCallback, useEffect, useRef} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import useAxios from 'axios-hooks';
import {Provider} from 'react-redux';
//
import Routes from './Routes';
import {store} from './store';
import {useAppDispatch, useAppSelector} from './store/hooks';
import {setActiveRouteName} from './store/slices/appStateSlice';
import {
  setLoading,
  setVideos,
  setGenres,
  setError,
  selectReload,
  setReload,
} from './store/slices/videosSlice';
//
import styles from './styles';
import {GetVideosResponse} from './Types';
const {general} = styles;

const App = () => {
  const dispatch = useAppDispatch();
  const containerRef = useRef<any>();
  const routeNameRef = useRef();

  const reload = useAppSelector(selectReload);

  const [{data: apiData, loading: apiLoading, error: apiError}, refetch] =
    useAxios<GetVideosResponse>(
      'https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/main/data/dataset.json',
    );

  const setData = useCallback(
    (data: GetVideosResponse) => {
      dispatch(setVideos(data.videos));
      dispatch(setGenres(data.genres));
    },
    [dispatch],
  );

  useEffect(() => {
    if (apiData) {
      setData(apiData);
    }
  }, [apiData, setData]);

  const setApiError = useCallback(
    error => {
      dispatch(setError(error));
    },
    [dispatch],
  );

  useEffect(() => {
    if (apiError) {
      setApiError(apiError);
    }
  }, [apiError, setApiError]);

  const setPromiseLoading = useCallback(
    (isLoading: boolean) => {
      dispatch(setLoading(isLoading));
    },
    [dispatch],
  );

  useEffect(() => {
    setPromiseLoading(apiLoading);
  }, [apiLoading, setPromiseLoading]);

  const refetchData = useCallback(() => {
    refetch().finally(() => {});
    dispatch(setReload(false));
  }, [dispatch, refetch]);

  useEffect(() => {
    if (reload) {
      refetchData();
    }
  }, [reload, refetchData]);

  return (
    <SafeAreaView style={[general.flex_1, general.bgPrimary900]}>
      <StatusBar barStyle={'light-content'} />

      <NavigationContainer
        ref={containerRef}
        onReady={() =>
          (routeNameRef.current = containerRef.current.getCurrentRoute().name)
        }
        onStateChange={async () => {
          const currentRouteName = containerRef.current.getCurrentRoute().name;
          routeNameRef.current = currentRouteName;
          dispatch(setActiveRouteName(currentRouteName));
        }}>
        <Routes />
      </NavigationContainer>
    </SafeAreaView>
  );
};

function StoreProvider() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default StoreProvider;
