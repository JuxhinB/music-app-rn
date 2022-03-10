import {StyleSheet} from 'react-native';
import theme from '../../../styles/theme';

export const style = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',

    width: 40,
    height: 40,
    padding: theme.size.smallMargin,

    borderRadius: 20,
    backgroundColor: theme.colors.primary300,
  },
});
