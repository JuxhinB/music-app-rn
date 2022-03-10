import React from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
//
import global from '../../global';
import {style} from './latestReleases.style';
import SongCover from './SongCover';

type LatestReleasesProps = {};

function LatestReleases({}: LatestReleasesProps) {
  const {t} = useTranslation();
  return (
    <View style={style.container}>
      <global.components.Text style={style.title}>
        {t('module.latest-releases-title')}
      </global.components.Text>

      <View style={style.items}>
        <View style={style.mainRelease}>
          <SongCover
            style={style.mainRelease_item}
            uri="https://unsplash.it/400/400?image=1"
            title="Song 1"
          />
        </View>

        <View style={style.regularReleases}>
          <SongCover
            style={style.regularReleases_itemTop}
            uri="https://unsplash.it/400/400?image=1"
            title="Song 2"
          />
          <SongCover
            style={style.regularReleases_itemBottom}
            uri="https://unsplash.it/400/400?image=1"
            title="Song 3"
          />
        </View>
      </View>
    </View>
  );
}

export default LatestReleases;
