import { View, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Text, Pressable, ImageBackground } from "react-native";
import { Title } from "../../components/Title";
import { FormTextInput } from "../../components/FormTextInput";
import { Button } from "../../components/Button";
import { Avatar } from "../../components/Avatar";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default  RegistrationScreen = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const onRegister = () => {
    if(login && email && password !== '') {
      console.log({
        login: login,
        email: email,
        password: password
      })
    }
  }

    return (
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>   
        <ImageBackground source={require('../../images/PhotoBG.png')}  resizeMode="cover" style={styles.imageBackground}>   
        <View style={styles.containerRegistration}>
        <Avatar />
        <Title title="Реєстрація" />
        <View style={styles.form}>
            <FormTextInput
              style={styles.formInput}
              placeholder="Логін"
              placeholderTextColor="#BDBDBD"
              value={login}
              onChangeText={setLogin}
            />
            <FormTextInput
              keyboardType="email-address"
              style={styles.formInput}
              placeholder="Адреса електронної пошти"
              placeholderTextColor="#BDBDBD"
              value={email}
              onChangeText={setEmail}
            />
            <FormTextInput
              secureTextEntry={true}
              style={styles.formInput}
              placeholder="Пароль"
              placeholderTextColor="#BDBDBD"
              value={password}
              onChangeText={setPassword}
            />
            <Button title={'Зареєструватися'} onPress={onRegister}/>
            <View style={styles.bottomTextWrap}>
            <Text>Вже є аккаунт?</Text>
              <Pressable style={styles.linkWrap} onPress={() => navigation.navigate("LoginScreen")}>
                <Text style={styles.refLink}>Увійти</Text>
              </Pressable>
          </View>
          
        </View>
      </View>
      </ImageBackground>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

    );
  }

const styles = StyleSheet.create({
  containerRegistration: {
    marginTop: 255,
    backgroundColor: "#fff",
    alignItems: "center",
    height: 549,
    paddingTop: 92,
    paddingBottom: 45,
    paddingLeft: 15,
    paddingRight: 15,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  bottomTextWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15
  },
  refLink: {
    color: "#1B4371",
    marginLeft: 5
  },
});

