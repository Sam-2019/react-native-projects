import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { citiesData } from "../features/citySlice";

function Cities() {
  const listCities = useSelector(citiesData);

  if (!listCities) {
    return (
      <View style={styles.empty_container}>
        <Text>No entry yet!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Cities</Text>
      <View>{listCities}</View>
    </View>
  );
}

export default Cities;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  empty_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
