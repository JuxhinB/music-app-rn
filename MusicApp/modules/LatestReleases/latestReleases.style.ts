import {StyleSheet} from 'react-native';
import theme from '../../styles/theme';

export const style = StyleSheet.create({
  container: {
    padding: theme.size.baseMargin,
  },
  title: {
    fontFamily: theme.font.family.bold,
    fontSize: theme.font.size.h4,
    marginBottom: theme.size.baseMargin,
    color: theme.colors.gray600,
  },
  items: {
    flexDirection: 'row',
    height: 250,
  },
  mainRelease: {
    width: '50%',
    height: '100%',
    paddingRight: theme.size.smallMargin,
  },
  mainRelease_item: {
    flex: 1,
  },
  regularReleases: {
    width: '50%',
    height: '100%',
    paddingLeft: theme.size.smallMargin,
  },
  regularReleases_itemTop: {
    flex: 1,
    marginBottom: theme.size.smallMargin,
  },
  regularReleases_itemBottom: {
    flex: 1,
    marginTop: theme.size.smallMargin,
  },
  image: {
    flex: 1,
    borderRadius: theme.size.smallMargin,
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    zIndex: 1,

    flex: 1,

    width: '100%',
    height: 100,
    borderBottomLeftRadius: theme.size.smallMargin,
    borderBottomRightRadius: theme.size.smallMargin,
  },
  info: {
    paddingLeft: theme.size.smallMargin,
    paddingRight: theme.size.smallMargin,
    paddingTop: theme.size.smallMargin / 2,
    paddingBottom: theme.size.smallMargin / 2,

    width: '100%',

    position: 'absolute',
    bottom: 0,
    zIndex: 2,
  },
  coverArtist: {
    fontFamily: theme.font.family.bold,
    fontSize: theme.font.size.medium,
    lineHeight: 14,
    marginBottom: theme.size.smallMargin / 2,
  },
  coverTitle: {
    fontFamily: theme.font.family.bold,
    fontSize: theme.font.size.h6,
    lineHeight: 19,
  },
});
