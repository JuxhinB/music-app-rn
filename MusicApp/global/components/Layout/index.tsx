import React from 'react';
import {
  RefreshControl as RNRefreshControl,
  ScrollViewProps,
  ScrollView,
} from 'react-native';
import {style} from './layout.style';

interface LayoutProps extends ScrollViewProps {
  children: JSX.Element;
  refreshing?: boolean;
  onRefresh?: () => any;
}

function Layout({
  children,
  refreshing = false,
  onRefresh = () => undefined,
}: LayoutProps) {
  return (
    <ScrollView
      style={style.container}
      contentContainerStyle={style.contentContainer}
      refreshControl={
        <RNRefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {children}
    </ScrollView>
  );
}

export default Layout;
