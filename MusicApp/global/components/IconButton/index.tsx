import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {style} from './iconButton.style';

interface IconButtonProps extends TouchableOpacityProps {
  children: JSX.Element;
}

function IconButton({children, ...props}: IconButtonProps) {
  return (
    <TouchableOpacity
      style={Object.assign(style.button, props.style)}
      {...props}>
      {children}
    </TouchableOpacity>
  );
}

export default IconButton;
