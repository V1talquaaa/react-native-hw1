import { StyleSheet, Text, TouchableOpacity } from "react-native";

function Button({title, onPress}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        paddingHorizontal: 111,
        borderRadius: 100,
        elevation: 3,
        backgroundColor: '#FF6C00',
        color: '#fff',
      },
      buttonTitle: {
        color: "#fff",
      }
});

export { Button };