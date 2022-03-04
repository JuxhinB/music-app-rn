import React, {useRef} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
//
import Routing from './Routing';
import styles from './styles';
const {general} = styles;

const App = () => {
  const containerRef = useRef<any>();
  const routeNameRef = useRef();

  return (
    <SafeAreaView style={[general.flex_1]}>
      <StatusBar barStyle={'dark-content'} />

      <NavigationContainer
        ref={containerRef}
        onReady={() =>
          (routeNameRef.current = containerRef.current.getCurrentRoute().name)
        }
        onStateChange={async () => {
          const currentRouteName = containerRef.current.getCurrentRoute().name;
          routeNameRef.current = currentRouteName;
        }}>
        <Routing />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
