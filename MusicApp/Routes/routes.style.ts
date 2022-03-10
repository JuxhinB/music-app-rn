import {StyleSheet} from 'react-native';
import theme from '../styles/theme';

export const style = StyleSheet.create({
  outerWrap: {
    position: 'absolute',
    backgroundColor: 'transparent',
    bottom: 0,
    width: '100%',
    padding: theme.size.smallMargin,
  },
  innerWrap: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: theme.size.smallMargin,
    borderRadius: 20,
    backgroundColor: theme.colors.primary700,
    shadowColor: theme.colors.gray900,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  icon: {
    backgroundColor: 'transparent',
    padding: theme.size.smallMargin,
  },
});
