import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { v4 as uuidv4 } from "uuid";
import { TextInput, Button } from "react-native-paper";
import { useDispatch } from "react-redux";
import { addCity } from "./features/citySlice";

const AddCity = () => {
  const [city, setCity] = React.useState("");
  const [country, setCountry] = React.useState("");

  const dispatch = useDispatch();

  function add() {
    const entry = {
      id: uuidv4(),
      city,
      country,
    };

    dispatch(addCity(entry));

    setCity("");
    setCountry("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_text}>Cities</Text>
      </View>

      <View>
        <TextInput
          label="Name"
          value={city}
          onChangeText={(city) => setCity(city)}
        />

        <TextInput
          label="Country"
          value={country}
          onChangeText={(country) => setCountry(country)}
        />
      </View>

      <View style={styles.button}>
        <Button mode="contained" onPress={add}>
          Submit
        </Button>
      </View>
    </View>
  );
};

export default AddCity;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  text: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    alignSelf: "center",
  },
  header_text: {
    fontSize: 30,
  },
  button: {
    marginTop: 10,
  },
});
