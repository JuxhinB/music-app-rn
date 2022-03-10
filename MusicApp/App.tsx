import React, {useRef} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
//
import Routing from './Routing';
import styles from './styles';
import {useAppDispatch} from './store/hooks';
import {setActiveRouteName} from './store/slices/appStateSlice';
import {Provider} from 'react-redux';
import {store} from './store';
//
const {general} = styles;

const App = () => {
  const dispatch = useAppDispatch();
  const containerRef = useRef<any>();
  const routeNameRef = useRef();

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
        <Routing />
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
