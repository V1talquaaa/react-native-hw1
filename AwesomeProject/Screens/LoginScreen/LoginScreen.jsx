import { Component } from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Title } from "../components/Title";
import { FormTextInput } from "../components/FormTextInput";
import { Button } from "../components/Button";
import { LoginCreateLink } from "../components/LoginCreateLink";
import { Avatar } from "../components/Avatar";

export default class LoginScreen extends Component {
  state = {};

  render() {
    return (
      <View style={styles.containerLogin}>
        <Title title="Увійти" />
        <View style={styles.form}>
          <KeyboardAvoidingView behavior="padding">
            <FormTextInput
              keyboardType="email-address"
              style={styles.formInput}
              placeholder="Адреса електронної пошти"
              placeholderTextColor="#BDBDBD"
            />
            <FormTextInput
              secureTextEntry={true}
              style={styles.formInput}
              placeholder="Пароль"
              placeholderTextColor="#BDBDBD"
            />
            </KeyboardAvoidingView>
            <Button title={'Увійти'}/>
          <LoginCreateLink content={"Вже є акаунт? Увійти"} />
        </View>
      </View>
    );
  }
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
