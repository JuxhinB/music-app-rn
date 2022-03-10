import React from 'react';
import {Text} from 'react-native';
//
import global from '../global';
import {Routes, ScreenProps} from '../Types';

interface HomeScreenProps extends ScreenProps<Routes.Home> {}

function Home({}: HomeScreenProps) {
  return (
    <global.components.Layout>
      <Text>Home</Text>
    </global.components.Layout>
  );
}

export default Home;
