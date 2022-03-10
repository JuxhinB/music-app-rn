import React from 'react';
import {View} from 'react-native';
//
import global from '../global';
import {Routes, ScreenProps} from '../Types';

interface DetailsScreenProps extends ScreenProps<Routes.Details> {}

function DetailsScreen({}: DetailsScreenProps) {
  return (
    <global.components.Layout>
      <View></View>
    </global.components.Layout>
  );
}

export default DetailsScreen;
