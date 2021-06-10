import React from "react";
import { View, TextInput } from "react-native";

const Input = ({ value, inputChange, styles }) => {
  return (
    <View>
      <TextInput
        style={styles}
        onChangeText={inputChange}
        selectionColor="#666666"
        value={value}
        onChangeText={inputChange}
      />
    </View>
  );
};

export default Input;
