import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './TopHeader.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../styles/colors';

const TopHeader = ({title, iconName, onPress}) => {
  return (
    <View style={styles.container}>
      {iconName && (
        <TouchableOpacity
          onPress={onPress}
          style={[
            styles.icon_container,
            {
              backgroundColor: colors.white,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: colors.gray,
            },
          ]}>
          <Icon name={iconName} size={25} color={colors.gray} />
        </TouchableOpacity>
      )}
      <View style={styles.title_container}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {iconName && <View style={styles.icon_container}></View>}
    </View>
  );
};

export default TopHeader;
