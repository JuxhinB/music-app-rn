import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface Props extends TouchableOpacityProps {
  children: JSX.Element;
}

function Touchable({children, ...props}: Props) {
  return <TouchableOpacity {...props}>{children}</TouchableOpacity>;
}

export default Touchable;
