import { Text, View, StyleSheet, Pressable, Image } from "react-native"
import { Button } from "../../components/Button"

const PostScreen = () => {
    return (
        <View style={styles.container}>
            <Text>PostScreen is here</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

})

export default PostScreen