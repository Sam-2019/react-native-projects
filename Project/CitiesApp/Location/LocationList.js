import React from "react";
import { ScrollView, StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { locationData } from "../features/locationSlice";
import { cityData } from "../features/citySlice";
import { FilterData } from "../utlis";
import { useRoute } from "@react-navigation/native";
import Item from "../component/item";

function LocationList() {
  const route = useRoute();
  const LocationList = useSelector(locationData);

  const city = route.params.city;

  const filterLocation = FilterData(LocationList, city);

  let view;

  if (filterLocation.length === 0) {
    view = (
      <View style={styles.empty_container}>
        <Text style={styles.empty_text}>No location for this city yet!</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <Item text={item.location} subText={item.info} />
  );

  if (filterLocation.length > 0) {
    view = (
      <FlatList
        data={filterLocation}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    );
  }

  return <ScrollView>{view}</ScrollView>;
}

export default LocationList;

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
  empty_text: {
    fontSize: 20,
  },
  header: {
    flex: 1,
    alignItems: "center",
  },
  header_text: {
    fontSize: 50,
  },
});
