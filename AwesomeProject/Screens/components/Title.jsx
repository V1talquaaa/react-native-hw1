import { StyleSheet, Text } from "react-native";


function Title({title}) {
    return (
        <Text style={styles.title}>{title}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        marginBottom: 32,
        textAlign: 'center',
        fontSize: 30,
      },
})

export { Title }