import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Heading = ({ styles, text }) => {
  return (
    <View>
      <Text style={styles}>Current weather for {text}</Text>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({});
