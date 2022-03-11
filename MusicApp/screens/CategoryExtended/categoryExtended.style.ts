import {StyleSheet} from 'react-native';
import theme from '../../styles/theme';

export const style = StyleSheet.create({
  title: {
    margin: theme.size.baseMargin,

    fontFamily: theme.font.family.bold,
    fontSize: theme.font.size.h4,
    color: theme.colors.gray600,
  },
  list: {
    marginTop: theme.size.baseMargin,
    paddingLeft: theme.size.baseMargin,
    paddingRight: theme.size.baseMargin,
  },
  contentContainer: {
    paddingBottom: theme.size.navBarHeight,
  },
  itemWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.size.smallMargin,
    padding: theme.size.smallMargin,
    backgroundColor: `${theme.colors.gray400}50`,
    borderRadius: 5,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: theme.size.smallMargin,
    borderRadius: 25,
  },
  contentWrap: {
    flex: 1,
    paddingLeft: theme.size.smallMargin,
  },
  songArtist: {
    width: '100%',
    fontFamily: theme.font.family.bold,
    fontSize: theme.font.size.input,
    marginBottom: theme.size.smallMargin / 2,
    color: theme.colors.gray800,
  },
  songTitle: {
    width: '100%',
    fontFamily: theme.font.family.bold,
    fontSize: theme.font.size.h6,
    lineHeight: 19,
    color: theme.colors.gray800,
  },
});
