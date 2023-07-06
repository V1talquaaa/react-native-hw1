import { StyleSheet, Pressable, Text } from "react-native";

function LoginCreateLink({content}) {
  return (
    <Pressable style={styles.linkWrap}>
    <Text style={styles.linkText}>{content}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    linkWrap: {
        marginTop: 16,
        alignItems: 'center',
        justifyContent: 'center',
      },
      linkText: {
        color: "#1B4371",
      }
});

export { LoginCreateLink };