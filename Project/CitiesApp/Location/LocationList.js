import React from "react";
import { ScrollView, StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { locationData } from "../features/locationSlice";
import Item from "../component/item";

function Locations() {
  const LocationList = useSelector(locationData);
  let view;

  if (LocationList.length === 0) {
    view = (
      <View style={styles.empty_container}>
        <Text style={styles.empty_text}>No location for this city yet!</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <Item text={item.city} subText={item.info} />
  );

  if (LocationList.length > 0) {
    view = (
      <FlatList
        data={LocationList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    );
  }

  return <ScrollView>{view}</ScrollView>;
}

export default Locations;

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
