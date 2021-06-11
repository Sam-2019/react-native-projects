import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ListItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.location}>Location</Text>
      <Text style={styles.memory}>Memory</Text>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    paddingVertical: 8,
    borderBottomWidth: 2,
    backgroundColor: "gray",
    color: "#20232a",
    fontWeight: "bold",
  },
  location: {
    fontSize: 20,
    fontWeight: 500,
    paddingLeft: 5,
  },
  memory: {
    fontSize: 16,
    paddingLeft: 5,
  },
});
