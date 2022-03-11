import React from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
//
import global from '../../global';
import {Routes, Video} from '../../Types';
import {style} from './latestReleases.style';
import SongCover from './SongCover';

type LatestReleasesProps = {
  releases: Video[];
};

function LatestReleases({releases = []}: LatestReleasesProps) {
  const {t} = useTranslation();
  const {navigate} = useNavigation();

  return (
    <View style={style.container}>
      <global.components.Text style={style.title}>
        {t('module.latest-releases-title')}
      </global.components.Text>
      {releases.length > 0 && (
        <View style={style.items}>
          <View style={style.mainRelease}>
            <SongCover
              style={style.mainRelease_item}
              uri={releases[0].image_url}
              title={releases[0].title}
              artist={releases[0].artist}
              onPress={() => {
                navigate({
                  name: Routes.Details,
                  params: {
                    itemDetails: releases[0],
                  },
                });
              }}
            />
          </View>

          <View style={style.regularReleases}>
            <SongCover
              style={style.regularReleases_itemTop}
              uri={releases[1].image_url}
              title={releases[1].title}
              artist={releases[1].artist}
              onPress={() => {
                navigate({
                  name: Routes.Details,
                  params: {
                    itemDetails: releases[0],
                  },
                });
              }}
            />
            <SongCover
              style={style.regularReleases_itemBottom}
              uri={releases[2].image_url}
              title={releases[2].title}
              artist={releases[2].artist}
              onPress={() => {
                navigate({
                  name: Routes.Details,
                  params: {
                    itemDetails: releases[0],
                  },
                });
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
}

export default LatestReleases;
