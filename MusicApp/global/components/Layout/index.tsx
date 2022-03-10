import React from 'react';
import {ScrollView} from 'react-native';
import {style} from './layout.style';

type LayoutProps = {
  children: JSX.Element;
};

function Layout({children}: LayoutProps) {
  return (
    <ScrollView
      style={style.container}
      contentContainerStyle={style.contentContainer}>
      {children}
    </ScrollView>
  );
}

export default Layout;
