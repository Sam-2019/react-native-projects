import React, { useState } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import Heading from "./Heading";
import Input from "./Input";
import Forecast from "./Forecast";
import OpenWeatherMap from "./open_weather_map";
import PressButton from "../PressButton";
import LocationButton from './LocationButton'

const WeatherApp = () => {
  const [zip, setZip] = useState("");
  const [forecast, setForecast] = useState(null);

  function InputChange(text) {
    let zip = setZip(text);

    OpenWeatherMap.fetchForecast(zip).then((forecast) => {
      //  console.log(forecast);
      //  setForecast(forecast);
    });
  }

  let content = null;

  if (forecast !== null) {
    content = <Forecast main={main} description={description} temp={temp} />;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backdrop}
        source={require("./pngtree.jpg")}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <View style={styles.row}>
            <Heading styles={styles.mainText} text={zip} />
          </View>

          <View style={styles.zipContainer}>
            <Input
              value={zip}
              inputChange={(zip) => InputChange(zip)}
              styles={[styles.zipCode, styles.mainText]}
            />
          </View>

          {content}
        </View>
      </ImageBackground>

      <LocationButton />
    </View>
  );
};

export default WeatherApp;

const baseFontSize = 16;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", paddingTop: 30 },
  backdrop: { flex: 1, flexDirection: "column" },
  overlay: {
    paddingTop: 5,
    backgroundColor: "#000000",
    opacity: 0.5,
    flexDirection: "column",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "flex-start",
    padding: 30,
  },
  zipContainer: {
    height: baseFontSize + 10,
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3,
  },
  zipCode: { flex: 1, flexBasis: 1, width: 150, height: baseFontSize },
  mainText: { fontSize: baseFontSize, color: "#FFFFFF" },
});
