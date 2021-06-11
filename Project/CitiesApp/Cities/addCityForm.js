import * as React from "react";
import { View, Text } from "react-native";
import { v4 as uuidv4 } from "uuid";
import { TextInput, Button } from "react-native-paper";

const AddCityForm = ({ cities, newCities }) => {
  const [city, setCity] = React.useState("");
  const [country, setCountry] = React.useState("");

  function addCity() {
    const entry = {
      id: uuidv4(),
      city,
      country,
    };

    const data = [...cities, entry];
    newCities(data);

    setCity("");
  }

  return (
    <View>
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
          onChangeText={(country) => setCOuntry(country)}
        />
      </View>

      <Button mode="contained" onPress={addCity}>
        Press me
      </Button>
    </View>
  );
};

export default AddCityForm;
