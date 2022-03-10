import React from 'react';
import {Text as RNText, TextProps as RNTextProps} from 'react-native';

interface TextProps extends RNTextProps {
  children: JSX.Element;
}

function Text({children, ...props}: TextProps) {
  return (
    <RNText style={Object.assign({}, props.style)} {...props}>
      {children}
    </RNText>
  );
}

export default Text;
