import {StyleSheet} from 'react-native';
import theme from '../../styles/theme';

export const style = StyleSheet.create({
  title: {
    margin: theme.size.baseMargin,

    fontFamily: theme.font.family.bold,
    fontSize: theme.font.size.h3,
    color: theme.colors.gray600,
  },
  item: {
    backgroundColor: `${theme.colors.gray400}50`,

    padding: theme.size.smallMargin,
    marginTop: theme.size.smallMargin,
    marginRight: theme.size.baseMargin,
    marginLeft: theme.size.baseMargin,

    borderRadius: 10,
  },
  itemText: {
    fontSize: theme.font.size.h6,
    color: theme.colors.gray800,
  },
});
