import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostScreen from './Screens/MainScreen/PostScreen';
import CreateScreen from './Screens/MainScreen/CreateScreen';
import ProfileScreen from './Screens/MainScreen/ProfileScreen';
import RegistrationScreen from './Screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import { Image } from "react-native";




const MainStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

 export const useRoute = (isAuth) => {
    if(!isAuth) {
      return (
      <MainStack.Navigator initialRouteName='RegistrationScreen' options={{headerShown: false}}>
        <MainStack.Screen name ="RegistrationScreen" component={RegistrationScreen} options={{headerShown: false}}/>
        <MainStack.Screen name = "LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
      </MainStack.Navigator>
      )
    }
    return(
      <MainTab.Navigator screenOptions={{tabBarActiveTintColor: '#bfbebb', tabBarShowLabel: false, }}>
      <MainTab.Screen options={{
        tabBarIcon: ({focused, size, color}) => <Image
        source={require('./images/grid.png')}
        fadeDuration={0}
      />
      }} name="Публікації" component={PostScreen} />
      <MainTab.Screen options={{
        tabBarIcon: ({focused, size, color}) => <Image
        source={require('./images/new.png')}
        fadeDuration={0}
      />
      }} name="Створити публікацію" component={CreateScreen}/>
      <MainTab.Screen options={{
        tabBarIcon: ({focused, size, color}) => <Image
        source={require('./images/user.png')}
        fadeDuration={0}
      />
      }} name="Profile" component={ProfileScreen}/>
    </MainTab.Navigator>
    )
  }