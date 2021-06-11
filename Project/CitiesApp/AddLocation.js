import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

import { v4 as uuidv4 } from "uuid";
import { TextInput, Button } from "react-native-paper";
import { useDispatch } from "react-redux";
import { addLocation } from "./features/locationSlice";

const AddLocation = ({ city }) => {
  const [name, setName] = React.useState("");
  const [info, setInfo] = React.useState("");

  const dispatch = useDispatch();

  function add() {
    const entry = {
      id: uuidv4(),
      name,
      info,
      city,
    };

    dispatch(addLocation(entry));

    setName("");
    setInfo("");
  }

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          label="Location Name"
          value={name}
          onChangeText={(name) => setCity(name)}
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
