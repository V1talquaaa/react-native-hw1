import { Component } from 'react';
import { View, StyleSheet} from 'react-native'
import { Title } from '../components/Title';
import { FormTextInput } from '../components/FormTextInput';
import { Button } from '../components/Button';
import { LoginCreateLink } from '../components/LoginCreateLink';
import { Avatar } from '../components/Avatar';

export default class RegistrationScreen extends Component {

  state = {

  }


  render() {
    return (
        <View style={styles.containerRegistration}>
        <Avatar />
        <Title title='Реєстрація'/>
        <View style={styles.form}>
            <FormTextInput style={styles.formInput} placeholder='Логін' placeholderTextColor="#BDBDBD" />
            <FormTextInput keyboardType='email-address' style={styles.formInput} placeholder='Адреса електронної пошти' placeholderTextColor="#BDBDBD" />
            <FormTextInput secureTextEntry={true} style={styles.formInput} placeholder='Пароль' placeholderTextColor="#BDBDBD" />
            <Button />
            <LoginCreateLink content={'Вже є акаунт? Увійти'}/>
        </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  containerRegistration: {
    marginTop: 255,
    backgroundColor: '#fff',
    alignItems: 'center',
    height: 549,
    paddingTop: 92,
    paddingBottom: 45,
    paddingLeft: 15,
    paddingRight: 15,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

  },

});