import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { cityData } from "../features/citySlice";
import Item from "../component/item";
import AddLocation from "../AddLocation";
import { useRoute } from "@react-navigation/native";

function City() {
  const route = useRoute();

  return (
    <View>
      <AddLocation city={route.params.city} />
    </View>
  );
}

export default City;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  empty_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flex: 1,
    alignItems: "center",
  },
  header_text: {
    fontSize: 50,
  },
});
