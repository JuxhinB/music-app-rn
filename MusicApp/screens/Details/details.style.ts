import {StyleSheet} from 'react-native';
import theme from '../../styles/theme';

export const style = StyleSheet.create({
  coverWrap: {
    margin: theme.size.baseMargin,
    flex: 1,
    height: 400,
    borderRadius: 15,
    overflow: 'hidden',

    shadowColor: theme.colors.gray900,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  contentWrap: {
    flex: 1,
    padding: theme.size.baseMargin,
  },
  contentHeaderWrap: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentReleaseYear: {
    position: 'absolute',
    width: '100%',
    top: -theme.size.baseMargin,
    color: theme.colors.gray600,
  },
  contentArtist: {
    color: theme.colors.gray700,
    fontSize: theme.font.size.h6,
    fontFamily: theme.font.family.bold,
  },
  contentTitle: {
    color: theme.colors.gray800,
    fontSize: theme.font.size.h4,
  },
});
