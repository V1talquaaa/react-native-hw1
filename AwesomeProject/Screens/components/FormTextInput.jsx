import { StyleSheet, TextInput } from "react-native";

function FormTextInput({
  placeholder,
  placeholderTextColor,
  secureTextEntry,
  keyboardType,
  value,
  onChangeText,
}) {
  return (
    <TextInput
      style={styles.formInput}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      value={value}
      onChangeText={onChangeText}

    ></TextInput>
  );
}

const styles = StyleSheet.create({
  formInput: {
    backgroundColor: "#E8E8E8",
    marginBottom: 16,
    width: 343,
    height: 50,
    padding: 16,
    borderRadius: 8,
  },
});

export { FormTextInput };
