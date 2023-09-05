import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

const base_style = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
    marginVertical: 8,
  },
  button_text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default {
  primary: StyleSheet.create({
    ...base_style,
    container: {
        ...base_style.container,
        backgroundColor: colors.primary,
    },
    button_text: {
        ...base_style.button_text,
        color: colors.white
    }
  }),
  secondary: StyleSheet.create({
    ...base_style,
    container: {
        ...base_style.container,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 10
    },
    button_text: {
        ...base_style.button_text,
        color: colors.primary
    }
  })
};
