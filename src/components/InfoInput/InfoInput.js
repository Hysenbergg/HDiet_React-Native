import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './InfoInput.style';
import {colors} from '../../styles/colors';

const InfoInput = ({title, value, onChangeText, placeholder, type='number-pad'}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.input_title}>{title}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.gray}
        keyboardType={type}
      />
    </View>
  );
};

export default InfoInput;
