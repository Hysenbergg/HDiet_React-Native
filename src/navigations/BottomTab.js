import React, {useEffect, useRef} from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Animatable from 'react-native-animatable';
import Icon, { Icons } from '../components/Icons';

import HomePage from '../pages/HomePage/HomePage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import MealPlanPage from '../pages/MealPlanPage/MealPlanPage';
import GraphicsPage from '../pages/GraphicsPage/GraphicsPage';
import { colors } from '../styles/colors';

const TabArr = [
  { route: 'Home', label: 'Home', type: Icons.Ionicons, activeIcon: 'home', inActiveIcon: 'home-outline', component: HomePage },
  { route: 'Search', label: 'Search', type: Icons.Ionicons, activeIcon: 'calendar-sharp', inActiveIcon: 'calendar-outline', component: MealPlanPage },
  { route: 'Account', label: 'Account', type: Icons.Ionicons , activeIcon: 'bar-chart', inActiveIcon: 'bar-chart-outline', component: GraphicsPage },
  { route: 'Like', label: 'Like', type: Icons.MaterialCommunityIcons, activeIcon: 'clipboard-account', inActiveIcon: 'clipboard-account-outline', component: ProfilePage },
];

const Tab = createBottomTabNavigator();

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({0: {scale: .5, rotate: '0deg'}, 1: {scale: 1.5, rotate: '360deg'}});
    } else {
      viewRef.current.animate({0: {scale: 1.5, rotate: '360deg'}, 1: {scale: 1, rotate: '0deg'}});
    }
  }, [focused])

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View
        ref={viewRef}
        duration={1000}
        style={styles.container}>
        <Icon type={item.type} name={focused ? item.activeIcon : item.inActiveIcon} color={focused ? colors.primary : colors.gray} />
      </Animatable.View>
    </TouchableOpacity>
  )
}

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 16
        }
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen key={index} name={item.route} component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />
            }}
          />
        )
      })}
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
