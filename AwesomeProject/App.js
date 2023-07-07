import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';


export default function App() {
  return (
    <View style={styles.container}>
    <ImageBackground source={require('./PhotoBG.png')} resizeMode="cover" style={styles.imageBackground}>
      {/* <RegistrationScreen /> */}
      <LoginScreen />
    </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 24,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    width: 400,
    
  }
});
