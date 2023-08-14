import { Text, View, StyleSheet, Image } from "react-native";
import { Button } from "../../components/Button";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import { useState } from "react";
import * as Location from "expo-location";

const CreateScreen = ({navigation}) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");

  const takePhoto = async () => {
try {
  const photo = await camera.takePictureAsync();
  Location.requestForegroundPermissionsAsync();
  const location = await Location.getCurrentPositionAsync();
  console.log(location);
  setPhoto(photo.uri);
} catch (error) {
  console.error("Error taking photo or getting location:", error);
}
  };

  const sendPhoto = () => {
    navigation.navigate("DefaultScreen", {photo})
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.photoContainer} ref={setCamera}>
        {photo && (
          <View style={styles.takePhotoContainer}>
            <Image
              source={{ uri: photo }}
              style={{ height: 100, width: 100 }}
            />
          </View>
        )}
        <TouchableOpacity style={styles.snapContainer} onPress={takePhoto}>
          <MaterialIcons name="photo-camera" size={24} color="grey" />
        </TouchableOpacity>
      </Camera>
      <TextInput
        style={styles.createScreenInput}
        placeholder="Назва..."
      ></TextInput>
      <TextInput
        style={styles.createScreenInput}
        placeholder="Місцевість..."
      ></TextInput>
      <Button style={styles.publishBtn} title={"Опублікувати"} onPress={sendPhoto}></Button>
      <TouchableOpacity style={styles.removePostBtn}>
        <Feather name="trash-2" size={24} color="grey" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  removePostBtn: {
    backgroundColor: "#E8E8E8",
    width: 60,
    paddingHorizontal: 23,
    paddingVertical: 8,
    borderRadius: 20,
    width: 70,
  },
  photoContainer: {
    backgroundColor: "#E8E8E8",
    width: 343,
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
    borderRadius: 8,
  },
  publishBtn: {
    backgroundColor: "#E8E8E8",
  },
  createScreenInput: {
    borderBottomWidth: 1,
    width: "90%",
    borderBottomColor: "#E8E8E8",
  },
  snapContainer: {
    width: 60,
    height: 60,
    borderColor: "#fff",
    borderRadius: 50,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  takePhotoContainer: {
    position: "absolute",
    top: 50,
    left: 10,
    borderColor: "#fff",
    borderWidth: 1,
  },
});

export default CreateScreen;
