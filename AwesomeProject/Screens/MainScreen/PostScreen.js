
import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';

const PostScreen = ({ navigation }) => {

  const handleButtonPress = () => {
    console.log('Button "Публікації" pressed');
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleButtonPress}>
          <Image
            source={require('../../images/log-out.png')}
            style={{ marginRight: 15 }}
            fadeDuration={0}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

      return (
        <View style={styles.container}>
            <Text>PostScreen is here</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

})

export default PostScreen;