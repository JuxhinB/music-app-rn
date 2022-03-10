import React from 'react';
import {ImageStyle, StyleProp} from 'react-native';
import FastImage, {Priority, ResizeMode} from 'react-native-fast-image';
//
import {style} from './image.style';

// interface ImageProps {}
interface ImageProps {
  uri: string;
  resizeMode?: ResizeMode;
  priority?: Priority;
  style?: StyleProp<ImageStyle>;
}

function Image({...props}: ImageProps) {
  return (
    <FastImage
      style={Object.assign({...style.image}, props.style) as any}
      source={{
        uri: props.uri,
        priority: props.priority ?? FastImage.priority.normal,
      }}
      resizeMode={props.resizeMode ?? FastImage.resizeMode.cover}
      {...props}
    />
  );
}

export default Image;
