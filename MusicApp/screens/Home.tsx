import React from 'react';
//
import global from '../global';
import modules from '../modules';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {
  selectReload,
  selectVideos,
  setReload,
} from '../store/slices/videosSlice';
import {Routes, ScreenProps} from '../Types';

interface HomeScreenProps extends ScreenProps<Routes.Home> {}

function Home({}: HomeScreenProps) {
  const reload = useAppSelector(selectReload);
  const videos = useAppSelector(selectVideos);
  const dispatch = useAppDispatch();

  return (
    <global.components.Layout
      refreshing={reload}
      onRefresh={() => {
        dispatch(setReload(true));
      }}>
      <>
        <modules.LatestReleases
          releases={videos.length > 3 ? [videos[0], videos[1], videos[2]] : []}
        />
      </>
    </global.components.Layout>
  );
}

export default Home;
