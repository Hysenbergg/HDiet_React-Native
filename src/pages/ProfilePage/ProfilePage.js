import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './ProfilePage.style';
import {showMessage} from 'react-native-flash-message';

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const ProfilePage = () => {
  const [data, setData] = React.useState();
  const [username, setUsername] = React.useState();

  React.useEffect(() => {
    const userID = auth().currentUser.uid;
    database()
      .ref(`users/${userID}/profile`)
      .on('value', snapshot => {
        const contentData = snapshot.val();
        setData(contentData);
      });
    database()
      .ref(`users/${userID}/username`)
      .once('value', snapshot => {
        const userNameData = snapshot.val();
        setUsername(userNameData);
      });
  }, []);

  // Çıkış işlemi ama çıkış işlemini yaptıktan sonra login syafasına yönlendirilmiyor.
  const handleLogOut = async () => {
    try {
      await auth()
        .signOut()
        .then(res => {
          console.log(res);
          showMessage({
            message: 'Çıkış işlemi başarılı.',
            type: 'success',
          });
        })
        .catch(error => console.log(error));
    } catch (error) {
      console.log('Profile çıkış Error: ' + error);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>{username}</Text>
        <View>
          {data && (
            <>
              <Text>{data.age}</Text>
              <Text>{data.gender === '2' ? 'Erkek' : 'Kadın'}</Text>
              <Text>{data.height}</Text>
              <Text>{data.weight}</Text>
              <Text>
                Kullanıcı Aktifliği:{' '}
                {data.userActivity === '1'
                  ? 'Az Sıklıkta'
                  : data.userActivity === '2'
                  ? 'Ara Ara'
                  : data.userActivity === '3'
                  ? 'İdeal'
                  : 'Sık Sık'}
              </Text>
            </>
          )}
        </View>
      </View>
      <TouchableOpacity
        style={{margin: 50, backgroundColor: 'red'}}
        onPress={handleLogOut}>
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfilePage;
