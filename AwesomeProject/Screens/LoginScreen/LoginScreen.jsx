import { View, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Title } from "../components/Title";
import { FormTextInput } from "../components/FormTextInput";
import { Button } from "../components/Button";
import { LoginCreateLink } from "../components/LoginCreateLink";
import { Avatar } from "../components/Avatar";
import { useState } from "react";

export default LoginScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onLogin = () => {
    if(email && password !== '')
    console.log({email: email, password: password})
  }
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.containerLogin}>
        <Title title="Увійти" />
        <View style={styles.form}>
          <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
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
            </KeyboardAvoidingView>
            <Button title={'Увійти'} onPress={onLogin}/>
          <LoginCreateLink content={"Вже є акаунт? Увійти"} />
        </View>
      </View>
      </TouchableWithoutFeedback>
    );
  }

const styles = StyleSheet.create({
  containerLogin: {
    marginTop: 255,
    backgroundColor: "#fff",
    alignItems: "center",
    height: 549,
    paddingTop: 32,
    paddingBottom: 45,
    paddingLeft: 15,
    paddingRight: 15,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});

