import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from '../RegistrationScreen/RegistrationScreen'
import LoginScreen from '../LoginScreen/LoginScreen'
import Main from "../Main/Main";


const MainStack = createStackNavigator();

const Auth = () => {

    return (
        <MainStack.Navigator initialRouteName='RegistrationScreen' options={{headerShown: true}}>
        <MainStack.Screen name ="RegistrationScreen" component={RegistrationScreen} options={{headerShown: true}}/>
        <MainStack.Screen name = "LoginScreen" component={LoginScreen} options={{headerShown: true}}/>
        <MainStack.Screen name = "Home" component={Main} options={{
          headerShown: false,
 }}/>
      </MainStack.Navigator>
    )
}

export default Auth