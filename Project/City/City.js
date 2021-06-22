import React from "react";
import { StyleSheet, View } from "react-native";
import AddLocation from "../Location/AddLocation";
import Locations from "../Location/Locations";
import { useRoute } from "@react-navigation/native";

function City() {
  const route = useRoute();
  const city = route.params.city;

  return (
    <View style={styles.container}>
      <Locations />

      <View style={styles.location_form}>
        <AddLocation city={city} />
      </View>
    </View>
  );
}

export default City;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  location_form: {},
});
