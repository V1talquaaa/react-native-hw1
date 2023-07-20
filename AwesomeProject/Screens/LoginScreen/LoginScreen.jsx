import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  Text,
  ImageBackground,
} from "react-native";
import { Title } from "../../components/Title";
import { FormTextInput } from "../../components/FormTextInput";
import { Button } from "../../components/Button";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '../../router';

export default LoginScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigation = useNavigation();

  const onLogin = () => {
    if (email && password !== "")
      console.log({ email: email, password: password });
      useRoute(true);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={require("../../images/PhotoBG.png")}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <View style={styles.containerLogin}>
          <Title title="Увійти" />
          <View style={styles.form}>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
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
            <Button title={"Увійти"} onPress={onLogin} />
            <View style={styles.bottomTextWrap}>
              <Text>Немає аккаунту?</Text>
              <Pressable
                style={styles.linkWrap}
                onPress={() => navigation.navigate("RegistrationScreen")}
              >
                <Text style={styles.refLink}>Зареєструватися</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

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
  bottomTextWrap: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
  refLink: {
    color: "#1B4371",
    marginLeft: 5,
  },
});
