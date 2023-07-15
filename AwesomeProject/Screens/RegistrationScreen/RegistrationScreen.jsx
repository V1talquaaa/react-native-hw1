import { Component } from "react";
import { View, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Title } from "../components/Title";
import { FormTextInput } from "../components/FormTextInput";
import { Button } from "../components/Button";
import { LoginCreateLink } from "../components/LoginCreateLink";
import { Avatar } from "../components/Avatar";
import { useState } from "react";

export default  RegistrationScreen = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>      
        <View style={styles.containerRegistration}>
        <Avatar />
        <Title title="Реєстрація" />
        <View style={styles.form}>
          <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
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
          </KeyboardAvoidingView>
          <LoginCreateLink content={"Вже є акаунт? Увійти"} />
        </View>
      </View>
      </TouchableWithoutFeedback>

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
});

