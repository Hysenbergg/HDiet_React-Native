import React from 'react';
import FlashMessage from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthStack from './navigations/AuthStack';
import BottomTab from './navigations/BottomTab';
import FirstProfileInfo from './pages/FirstProfileInfo/FirstProfileInfo';
import CustomLoading from './components/CustomLoading/CustomLoading';

const Stack = createNativeStackNavigator();

const Router = () => {
  const [userSession, setUserSession] = React.useState();
  const [profileInfo, setProfileInfo] = React.useState(false);
  const [userFirstLogin, setUserFirstLogin] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(user);
      if (user) {
        const userID = user.uid;
        database()
          .ref(`users/${userID}/profile`)
          .once('value')
          .then(res => {
            if (res.exists()) {
              setProfileInfo(true);
              setUserFirstLogin(false);
            }
            setLoading(false);
          })
          .catch(error => console.log('Router Error: ' + error));
      } else {
        setUserFirstLogin(true);
        setLoading(false);
      }
    });
  }, []);

  if(loading){
    return <CustomLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        { !userSession ? (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        ) : (
          !profileInfo &&
          userFirstLogin && (
            <Stack.Screen name="FirstProfile" component={FirstProfileInfo} />
          )
        )}
        <Stack.Screen name="BottomTab" component={BottomTab} />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default Router;