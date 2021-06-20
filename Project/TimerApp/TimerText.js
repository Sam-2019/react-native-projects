import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TimerText = ({ text, subtext }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.subtext}>{subtext}</Text>
    </View>
  );
};

export default TimerText;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: 500,
  },
  subtext: {
    fontSize: 15,
  },
});
