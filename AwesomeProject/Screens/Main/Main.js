import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import PostScreen from '../MainScreen/PostScreen';
import CreateScreen from '../MainScreen/CreateScreen';
import ProfileScreen from '../MainScreen/ProfileScreen';
import { useNavigation } from '@react-navigation/native';

const MainTab = createBottomTabNavigator();

const Main = () => {
  const navigation = useNavigation();
  const handleButtonPress = () => {
    navigation.navigate("LoginScreen")
  };

  return (
    <MainTab.Navigator screenOptions={{ tabBarActiveTintColor: '#bfbebb', tabBarShowLabel: false, }}>
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Image source={require('../../images/grid.png')} fadeDuration={0} />
          ),
          headerRight: () => (
            <TouchableOpacity onPress={handleButtonPress}>
              <Image
                source={require('../../images/log-out.png')}
                style={{ marginRight: 15 }}
                fadeDuration={0}
              />
            </TouchableOpacity>
          ),
        }}
        name="Публікації"
        component={PostScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Image source={require('../../images/new.png')} fadeDuration={0} />
          ),
          tabBarVisible: false,
        }}
        name="Створити публікацію"
        component={CreateScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Image source={require('../../images/user.png')} fadeDuration={0} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};

export default Main;
