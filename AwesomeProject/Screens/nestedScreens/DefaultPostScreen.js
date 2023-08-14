import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  FlatList,
  Button,
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

const DefaultPostScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: item.photo }}
              style={{ width: 350, height: 200 }}
            />
            <View style={styles.iconWrap}>
              <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
                <Fontisto name="comment" size={24} color="grey" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("MapScreen")}
              >
                <SimpleLineIcons name="location-pin" size={24} color="grey" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconWrap: {
    flexDirection: "row",
    alignItems: "stretch",
  },
});

export default DefaultPostScreen;
