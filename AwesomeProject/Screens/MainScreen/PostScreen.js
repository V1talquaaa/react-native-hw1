import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DefaultPostScreen from "../nestedScreens/DefaultPostScreen"
import CommentsScreen from "../nestedScreens/CommentsScreen";
import MapScreen from "../nestedScreens/MapScreen";


const NestedScreen = createStackNavigator();

const PostScreen = () => {
  return(
  <NestedScreen.Navigator>
  <NestedScreen.Screen name="DefaultScreen" component={DefaultPostScreen} options={{headerShown: false}}></NestedScreen.Screen>
  <NestedScreen.Screen name="Comments" component={CommentsScreen}></NestedScreen.Screen>
  <NestedScreen.Screen name="MapScreen" component={MapScreen}></NestedScreen.Screen>
</NestedScreen.Navigator>
  )

}

export default PostScreen