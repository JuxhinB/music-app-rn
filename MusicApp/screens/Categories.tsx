import React from 'react';
import {Text} from 'react-native';
//
import global from '../global';
import {Routes, ScreenProps} from '../Types';

interface CategoriesScreenProps extends ScreenProps<Routes.Categories> {}

function Categories({}: CategoriesScreenProps) {
  return (
    <global.components.Layout>
      <Text>categories</Text>
    </global.components.Layout>
  );
}

export default Categories;
