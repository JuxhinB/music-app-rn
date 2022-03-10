import React from 'react';
import {ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
//
import global from '../../global';
import theme from '../../styles/theme';
import {style} from './latestReleases.style';

interface SongCoverProps {
  title: string;
  uri: string;
  style: ViewStyle;
  onPress?: () => any;
}

function SongCover({onPress = () => {}, ...props}: SongCoverProps) {
  return (
    <global.components.Touchable onPress={onPress} style={props.style}>
      <>
        <global.components.Image
          style={style.image}
          uri="https://unsplash.it/400/400?image=1"
        />
        <LinearGradient
          colors={[
            `${theme.colors.gray900}00`,
            `${theme.colors.gray900}70`,
            `${theme.colors.gray900}`,
          ]}
          style={style.gradient}
        />
        <global.components.Text style={style.coverTitle}>
          {props.title}
        </global.components.Text>
      </>
    </global.components.Touchable>
  );
}

export default SongCover;
