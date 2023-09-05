import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './FirstProfileInfo.style';
import InfoInput from '../../components/InfoInput/InfoInput';
import Dropdown from '../../components/Dropdown/Dropdown';
import TopHeader from '../../components/TopHeader/TopHeader';
import CustomButton from '../../components/CustomButton/CustomButton';

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const data = [
  {label: 'Az Sıklıkta', value: '1'},
  {label: 'Ara Ara', value: '2'},
  {label: 'İdeal', value: '3'},
  {label: 'Sık Sık', value: '4'},
];

const genderData = [
  {label: 'Kadın', value: '1'},
  {label: 'Erkek', value: '2'},
];

const FirstProfileInfo = ({navigation}) => {
  const [genderValue, setGenderValue] = React.useState(null);
  const [activityValue, setActivityValue] = React.useState(null);
  const [age, setAge] = React.useState('');
  const [userHeight, setUserHeight] = React.useState('');
  const [userWeight, setUserWeight] = React.useState('');
  const [nameSurname, setNameSurname] = React.useState('');

  // İnputları temizlenme fonksiyonu.
  const handleClear = () => {
    setAge('');
    setUserWeight('');
    setUserHeight('');
    setNameSurname('');
    setActivityValue(null);
    setGenderValue(null);
  };

  const handleSubmit = () => {
    try {
      const userId = auth().currentUser;
      const userInfo = {
        height: userHeight,
        age: age,
        weight: userWeight,
        gender: genderValue,
        userActivity: activityValue,
      };
      console.log('user Bilgileri: ',userInfo);
      console.log('userID: ', userId.uid);
      database().ref(`users/${userId.uid}/profile`).set(userInfo);
      database().ref(`users/${userId.uid}/username`).set(nameSurname);
    } catch (error) {
      console.log(error);
    }
    navigation.navigate('BottomTab');
    handleClear();
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1,}}>
        <TopHeader title="Kullanıcı Bilgileri" />
        
        {/* Description Container */}
        <View style={styles.description_container}>
          <Text style={styles.description}>
            Uygulama içerisinde kullanacağınız hesaplamalar ve sizlere diyet
            programları önerebilmek için aşağıdaki bilgileri doldurmanız
            gerekmektedir. Bilgileriniz sadece bu işlemler için kullanılacaktır.
          </Text>
        </View>

        {/* Input container */}
        <View style={{flex: 1, marginTop: 30}}>
          <View style={{flex: 1}}>
            <InfoInput
              title="Ad Soyad"
              value={nameSurname}
              onChangeText={setNameSurname}
              placeholder="Adınızı ve Soyadınızı giriniz.."
              type='default'
            />
          </View>
          <View style={styles.input_container}>
            <InfoInput
              title="Yaş"
              value={age}
              onChangeText={setAge}
              placeholder="Yaş"
            />
            <InfoInput
              title="Boy"
              value={userHeight}
              onChangeText={setUserHeight}
              placeholder="Boy(cm)"
            />
            <InfoInput
              title="Kilo"
              value={userWeight}
              onChangeText={setUserWeight}
              placeholder="Kilo(kg)"
            />
          </View>
        </View>

        {/* Dropdown container */}
        <View style={{flex: 1}}>
          <Dropdown
            data={genderData}
            value={genderValue}
            setValue={setGenderValue}
            placeholder="Cinsiyet"
          />
          <Dropdown
            data={data}
            value={activityValue}
            setValue={setActivityValue}
            placeholder="Activity"
          />
        </View>

        {/* Butoton's container */}
        <View style={styles.button_container}>
          <CustomButton
            title="Temizle"
            onPress={handleClear}
            theme="secondary"
          />
          <CustomButton title="Kaydet" onPress={handleSubmit} />
        </View>
      </ScrollView>
    </View>
  );
};

export default FirstProfileInfo;
