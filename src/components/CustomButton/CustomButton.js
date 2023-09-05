import React from 'react';
import {Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './CustomButton.style';

const CustomButton = ({title, onPress, theme = 'primary', loading}) => {
  return (
    <TouchableOpacity
      style={styles[theme].container}
      onPress={onPress}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator color='white' />
      ) : (
        <Text style={styles[theme].button_text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
