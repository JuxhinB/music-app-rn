import React from 'react';
import {View} from 'react-native';
//
import global from '../global';
import {Routes, ScreenProps} from '../Types';

interface SearchScreenProps extends ScreenProps<Routes.Search> {}

function Search({}: SearchScreenProps) {
  return (
    <global.components.Layout>
      <View></View>
    </global.components.Layout>
  );
}

export default Search;
