import React from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { cityData } from "../features/citySlice";
import Item from "../component/item";

function Cities() {
  const CitiesList = useSelector(cityData);

  if (CitiesList.length === 0) {
    return (
      <View style={styles.empty_container}>
        <Text>No entry yet!</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <Item text={item.city} subText={item.country} />
  );

  return (
    <ScrollView>
      <FlatList
        data={CitiesList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
}

export default Cities;

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
