import { StyleSheet, View } from "react-native";

function AuthorizationFormContainer() {
  return (
<View style={styles.container}></View>
  );
}

const styles = StyleSheet.create({
    container: {
      marginTop: 255,
      backgroundColor: '#fff',
      alignItems: 'center',
      height: 549,
      paddingTop: 92,
      paddingBottom: 45,
      paddingLeft: 15,
      paddingRight: 15,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
  
    },
  
  });

export { AuthorizationFormContainer };