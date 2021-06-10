import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as Location from "expo-location";

const LocationButton = () => {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);

  function getLocation() {
    navigator.geolocation.getCurrentPosition(
      (initialPosition) => {
        onGetCoords(
          initialPosition.coords.latitude,
          initialPosition.coords.longitude
        );
      },
      (error) => {
        alert(error.message);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  return (
    <View style={styles.container}>
      <Button
        title="Press me"
        label="Use Current Location"
        style={styles.button}
        onPress={getLocation}
      />
    </View>
  );
};

export default LocationButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  button: {
    backgroundColor: "#FF0000",
    justifyContent: "center",
  },
});
