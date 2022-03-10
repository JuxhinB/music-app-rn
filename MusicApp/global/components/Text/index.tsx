import React from 'react';
import {Text as RNText, TextProps as RNTextProps} from 'react-native';
import {style} from './text.style';
interface TextProps extends RNTextProps {
  children: string;
}

function Text({children, ...props}: TextProps) {
  return (
    <RNText style={Object.assign({...style.default}, props.style)} {...props}>
      {children}
    </RNText>
  );
}

export default Text;
