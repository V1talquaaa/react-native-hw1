import { View, StyleSheet } from "react-native";
import MapView from "react-native-maps";

const MapScreen = () => {
    return(
        <View style={styles.container}>
            <MapView style={{flex: 1}}></MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
    },
  });

export default MapScreen