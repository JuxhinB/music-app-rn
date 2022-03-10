import React from 'react';
//
import global from '../global';
import modules from '../modules';
import {Routes, ScreenProps} from '../Types';

interface HomeScreenProps extends ScreenProps<Routes.Home> {}

function Home({}: HomeScreenProps) {
  return (
    <global.components.Layout>
      <modules.LatestReleases />
    </global.components.Layout>
  );
}

export default Home;
