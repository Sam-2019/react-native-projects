import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { citiesData } from "../features/citySlice";
import ListItem from "../ListItem";

function Cities() {
  const listCities = useSelector(citiesData);

  // console.log(listCities)

  // if (!listCities) {
  //   return (
  //     <View style={styles.empty_container}>
  //       <Text>No entry yet!</Text>

  //     </View>
  //   );
  // }

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.header_text}>Cities</Text>
      </View>

      {/* <View>{listCities}</View> */}
   
    </View>
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
