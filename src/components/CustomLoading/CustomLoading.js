import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import { colors } from '../../styles/colors';

export default function CustomLoading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
