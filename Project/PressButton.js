import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

const PressButton = () => {
  const [pressing, setPressing] = useState(false);

  function _onPressIn() {
    setPressing(true);
  }

  function _onPressOut() {
    setPressing(false);
  }

  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPressIn={_onPressIn}
        onPressOut={_onPressOut}
        accessibilityLabel={"PUSH ME"}
        style={styles.touchable}
      >
        <View style={styles.button}>
          <Text style={styles.welcome}>{pressing ? "EEK!" : "PUSH ME"}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default PressButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: { fontSize: 20, textAlign: "center", margin: 10, color: "#FFFFFF" },
  touchable: { borderRadius: 100 },
  button: {
    backgroundColor: "#FF0000",
    borderRadius: 100,
    height: 200,
    width: 200,
    justifyContent: "center",
  },
});
