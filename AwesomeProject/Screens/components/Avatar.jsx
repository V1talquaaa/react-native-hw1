import { StyleSheet, View, Image, Pressable } from "react-native";


function Avatar() {
  return (
    <View style={styles.avatar}>
        <Pressable style={styles.addSvg}>
        <Image source={require('../images/add.png')}/>
        </Pressable>
    </View>
    
  );
}

const styles = StyleSheet.create({
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 16,
        backgroundColor: '#F6F6F6',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: -60,
      },
    addSvg: {
        position: 'absolute',
        right: -12

      }
});

export { Avatar };