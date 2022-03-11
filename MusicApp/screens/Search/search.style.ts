import {StyleSheet} from 'react-native';
import theme from '../../styles/theme';

export const style = StyleSheet.create({
  input: {
    marginLeft: theme.size.baseMargin,
    marginRight: theme.size.baseMargin,
    padding: theme.size.smallMargin,

    fontSize: theme.font.size.input,
    fontFamily: theme.font.family.bold,
    color: theme.colors.gray800,

    backgroundColor: `${theme.colors.gray400}`,
    borderRadius: 10,
  },
  list: {
    marginTop: theme.size.baseMargin,
    paddingLeft: theme.size.baseMargin,
    paddingRight: theme.size.baseMargin,
  },
  contentContainer: {
    paddingBottom: theme.size.navBarHeight,
  },
});
