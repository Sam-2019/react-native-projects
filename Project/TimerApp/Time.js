import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Time = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>12:00 pm</Text>
    </View>
  );
};

export default Time;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: 500,
  },
});
