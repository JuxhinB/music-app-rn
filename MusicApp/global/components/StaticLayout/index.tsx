import React from 'react';
import {View, ViewProps} from 'react-native';
import {style} from './layout.style';

interface LayoutProps extends ViewProps {
  children: JSX.Element;
}

function Layout({children}: LayoutProps) {
  return <View style={style.container}>{children}</View>;
}

export default Layout;
