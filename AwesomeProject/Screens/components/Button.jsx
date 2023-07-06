import { StyleSheet, Pressable, Text } from "react-native";

function Button() {
  return (
    <Pressable style={styles.button}>
    <Text style={styles.buttonTitle}>Зареєструватися</Text>
    </Pressable>
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