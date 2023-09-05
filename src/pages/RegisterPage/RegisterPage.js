import React from 'react';
import {View, Text} from 'react-native';
import styles from './RegisterPage.style';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {showMessage} from 'react-native-flash-message';

import auth from '@react-native-firebase/auth';

const RegisterPage = ({navigation}) => {
  const [mail, setMail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [repassword, setRepassword] = React.useState('');
  const [visible, setVisible] = React.useState(false);
  const [revisible, setRevisible] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleRegisterUser = async () => {
    if (mail === '' || password === '') {
      showMessage({
        message: 'Eksik alan mevcut. Tekrar Deneyiniz.',
        type: 'danger',
      });
      return;
    }
    if (password !== repassword) {
      showMessage({
        message: 'Şifreler uyuşmuyor!',
        type: 'danger',
      });
      return;
    }
    try {
      setLoading(true);
      await auth()
        .createUserWithEmailAndPassword(mail, password)
        .then(res => {
          console.log(res);
          showMessage({
            message: 'Kayıt işleminiz başarılı.',
            type: 'success',
            titleStyle: {textAlign: 'center'},
          });
          navigation.navigate('Login');
        })
        .catch(error => {
          console.log(error);
          showMessage({
            message: 'Kayıt işlemş yapılamadı.' + error.message,
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

  const ReVisibleChanged = () => {
    setRevisible(!revisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <Text>RegisterPage</Text>
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
          icon_button={VisibleChanged}
          isSecure={visible ? false : true}
          visible={visible}
        />
        <CustomInput
          title="Şifre Tekrar"
          value={repassword}
          onChangeText={setRepassword}
          placeholder="Şifrenizi tekrar giriniz.."
          icon_button={ReVisibleChanged}
          isSecure={revisible ? false : true}
          visible={revisible}
        />
        <CustomButton
          title="Kayıt Ol"
          onPress={handleRegisterUser}
          loading={loading}
        />
        <CustomButton
          title="Geri"
          onPress={() => navigation.goBack()}
          theme="secondary"
        />
      </View>
    </View>
  );
};

export default RegisterPage;
