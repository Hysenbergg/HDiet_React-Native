import React from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import styles from './CustomInput.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../styles/colors';

const CustomInput = ({
  title,
  value,
  onChangeText,
  placeholder,
  multiLine,
  isSecure,
  icon_button,
  visible,
  type='password',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.input_container}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.gray}
          multiline={multiLine}
          secureTextEntry={isSecure}
          autoCapitalize='none'
        />
        {type === 'mail' ? (
          <View style={styles.icon_container}>
            <Icon name="email-outline" size={18} color={colors.gray} />
          </View>
        ) : (
          <TouchableOpacity style={styles.icon_container} onPress={icon_button}>
            <Icon
              name={visible ? 'eye-off' : 'eye-outline'}
              size={18}
              color={visible ? colors.black : colors.gray}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomInput;
