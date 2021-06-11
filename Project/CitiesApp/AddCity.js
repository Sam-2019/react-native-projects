import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { v4 as uuidv4 } from "uuid";
import { TextInput, Button } from "react-native-paper";
import { useSelector } from "react-redux";
import { addCity } from "./features/citySlice";

const AddCity = () => {
  const [city, setCity] = React.useState("");
  const [country, setCountry] = React.useState("");

  const dispatch = useDispatch();

  function addCity() {
    const entry = {
      id: uuidv4(),
      city,
      country,
    };

    dispatch(increment(entry));

    setCity("");
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>Cities</Text>
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

      <Button mode="contained" onPress={addCity}>
        Press me
      </Button>
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
});
