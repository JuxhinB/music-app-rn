import React from 'react';
import {View} from 'react-native';
import {style} from './layout.style';

type LayoutProps = {
  children: JSX.Element;
};

function Layout({children}: LayoutProps) {
  return <View style={style.container}>{children}</View>;
}

export default Layout;
