import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export default StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: colors.white,
  },
  dropdown: {
    backgroundColor: colors.white,
    height: 50,
    borderColor: colors.gray,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  label: {
    position: 'absolute',
    backgroundColor: colors.white,
    left: 22,
    top: -11,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    color: colors.black
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: colors.black
  },
});
