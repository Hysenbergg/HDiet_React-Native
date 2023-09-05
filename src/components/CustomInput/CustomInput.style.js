import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export default StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 15,
  },
  title: {
    fontSize: 16,
    color: colors.black,
    fontWeight: '600',
    marginBottom: 5,
    color: colors.primary,
  },
  input_container: {
    borderWidth: 1,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    paddingHorizontal: 10,
    borderColor: colors.primary,
    color: colors.primary,
    flex: 1,
  },
  icon_container: {
    marginRight: 10
  }
});
