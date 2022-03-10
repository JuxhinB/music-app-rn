import React from 'react';
import {View} from 'react-native';
//
import global from '../global';
import {Routes, ScreenProps} from '../Types';

interface CategoryExtendedScreenProps
  extends ScreenProps<Routes.CategoryExtended> {}

function CategoryExtended({}: CategoryExtendedScreenProps) {
  return (
    <global.components.Layout>
      <View></View>
    </global.components.Layout>
  );
}

export default CategoryExtended;
