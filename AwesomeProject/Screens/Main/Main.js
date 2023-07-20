// import PostScreen from '../MainScreen/PostScreen';
// import CreateScreen from '../MainScreen/CreateScreen';
// import ProfileScreen from '../MainScreen/ProfileScreen';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Image } from "react-native";

// const MainTab = createBottomTabNavigator();

// const Main = () => {
//     return (
//         <MainTab.Navigator screenOptions={{tabBarActiveTintColor: '#bfbebb', tabBarShowLabel: false, }}>
//         <MainTab.Screen options={{
//           tabBarIcon: ({focused, size, color}) => <Image
//           source={require('../../images/grid.png')}
//           fadeDuration={0}
//         />
//         }} name="Публікації" component={PostScreen} />
//         <MainTab.Screen options={{
//           tabBarIcon: ({focused, size, color}) => <Image
//           source={require('../../images/new.png')}
//           fadeDuration={0}
//         />
//         }} name="Створити публікацію" component={CreateScreen}/>
//         <MainTab.Screen options={{
//           tabBarIcon: ({focused, size, color}) => <Image
//           source={require('../../images/user.png')}
//           fadeDuration={0}
//         />
//         }} name="Profile" component={ProfileScreen}/>
//       </MainTab.Navigator>
//     )
// }

// export default Main

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

// Import the modified PostScreen component
import PostScreen from '../MainScreen/PostScreen';
import CreateScreen from '../MainScreen/CreateScreen';
import ProfileScreen from '../MainScreen/ProfileScreen';

const MainTab = createBottomTabNavigator();

const Main = () => {
  return (
    <MainTab.Navigator screenOptions={{ tabBarActiveTintColor: '#bfbebb', tabBarShowLabel: false }}>
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Image source={require('../../images/grid.png')} fadeDuration={0} />
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
