import React from 'react';
import {View, Text} from 'react-native';
import styles from './LoginPage.style';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {showMessage} from 'react-native-flash-message';

import auth from '@react-native-firebase/auth';

const LoginPage = ({navigation}) => {
  const [mail, setMail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [visible, setVisible] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async () => {
    if (mail === '' || password === '') {
      showMessage({
        message: 'Eksik alan mevcut. Tekrar Deneyiniz.',
        type: 'danger',
      });
      return;
    }
    try {
      setLoading(true);
      await auth()
        .signInWithEmailAndPassword(mail, password)
        .then(res => {
          console.log(res);
          showMessage({
            message: 'Giriş başarılı.',
            type: 'success',
            titleStyle: {textAlign: 'center'},
          });
          navigation.navigate('FirstProfile');
          setMail('');
          setPassword('');
        })
        .catch(error => {
          console.log(error);
          showMessage({
            message: error.message,
            type: 'danger',
          })
        });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const VisibleChanged = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <Text>HDiet</Text>
      </View>
      <View style={styles.bottom_container}>
        <CustomInput
          title="E-posta"
          value={mail}
          onChangeText={setMail}
          placeholder="E-posta adresinizi giriniz.."
          type="mail"
        />
        <CustomInput
          title="Şifre"
          value={password}
          onChangeText={setPassword}
          placeholder="Şifrenizi giriniz.."
          isSecure={visible ? false : true}
          icon_button={VisibleChanged}
          visible={visible}
        />
        <CustomButton
          title="Giriş Yap"
          onPress={handleSubmit}
          loading={loading}
        />
        <CustomButton
          title="Üye Ol"
          onPress={() => navigation.navigate('Register')}
          theme="secondary"
          loading={loading}
        />
      </View>
    </View>
  );
};

export default LoginPage;
