import * as React from "react";
import { StyleSheet, View } from "react-native";
import { v4 as uuidv4 } from "uuid";
import { TextInput, Button } from "react-native-paper";
import { useDispatch } from "react-redux";
import { addLocation } from "../features/locationSlice";

const AddLocation = ({ city }) => {
  const [location, setLocation] = React.useState("");
  const [info, setInfo] = React.useState("");
  const grabCity = city;

  const dispatch = useDispatch();

  function add() {
    const entry = {
      id: uuidv4(),
      location,
      info,
      city: grabCity,
    };

    dispatch(addLocation(entry));

    setLocation("");
    setInfo("");
  }

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          label="Location Name"
          value={location}
          onChangeText={(location) => setLocation(location)}
        />

        <TextInput
          label="Location Info"
          value={info}
          onChangeText={(info) => setInfo(info)}
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

export default AddLocation;

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
