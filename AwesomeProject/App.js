
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import { useRoute } from './router';

export default function App() {

  return (
    <NavigationContainer>
      {useRoute(true)}
    </NavigationContainer>
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
});

