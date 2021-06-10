import React from "react";
import { StyleSheet,  View } from "react-native";

const Card = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}></View>
    </View>
  );
};

export default Card;

const profileCardColor = "dodgerblue";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 150,
    marginBottom: 150,
    backgroundColor: "blue",
  },
  cardContainer: {
    backgroundColor: profileCardColor,
    width: 300,
    height: 400,
  },
});
