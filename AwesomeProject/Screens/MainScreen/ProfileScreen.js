import { Text, View, StyleSheet } from "react-native"

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Text>ProfileScreen is here</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ProfileScreen