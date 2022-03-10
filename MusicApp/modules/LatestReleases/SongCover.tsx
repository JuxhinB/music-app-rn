import React from 'react';
import {View, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
//
import global from '../../global';
import theme from '../../styles/theme';
import {style} from './latestReleases.style';

interface SongCoverProps {
  title: string | number;
  artist: string | number;
  uri: string;
  style: ViewStyle;
  onPress?: () => any;
}

function SongCover({onPress = () => {}, ...props}: SongCoverProps) {
  return (
    <global.components.Touchable onPress={onPress} style={props.style}>
      <>
        <global.components.Image style={style.image} uri={props.uri} />
        <LinearGradient
          colors={[
            `${theme.colors.gray900}00`,
            `${theme.colors.gray900}80`,
            `${theme.colors.gray900}99`,
            `${theme.colors.gray900}`,
          ]}
          style={style.gradient}
        />
        <View style={style.info}>
          <global.components.Text style={style.coverArtist}>
            {`${props.artist}`}
          </global.components.Text>
          <global.components.Text style={style.coverTitle}>
            {`${props.title}`}
          </global.components.Text>
        </View>
      </>
    </global.components.Touchable>
  );
}

export default SongCover;
