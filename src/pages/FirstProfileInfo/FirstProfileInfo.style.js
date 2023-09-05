import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  description_container: {
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  description: {
    textAlign: 'center',
    fontSize: 17,
    color: colors.black,
  },
  input_container: {
    flexDirection: 'row',
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
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  button_container: {
    justifyContent: 'flex-end',
    marginBottom: 20,
    marginTop: 50
  },
});
