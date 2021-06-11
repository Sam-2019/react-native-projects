import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Item = ({ text, subText }) => {
  const navigation = useNavigation();
  return (
    <TouchableHighlight onPress={() => navigation.navigate("City")}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.subText}>{subText}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    paddingVertical: 8,
    borderBottomWidth: 2,
    backgroundColor: "gray",
    color: "#20232a",
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    fontWeight: 500,
    paddingLeft: 5,
  },
  subText: {
    fontSize: 16,
    paddingLeft: 5,
  },
});
