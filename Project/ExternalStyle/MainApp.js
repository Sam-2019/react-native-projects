import React, { useState } from "react";
import { StyleSheet, Button, View } from "react-native";
import getStyleSheet from "./style";

const MainApp = () => {
  const [theme, setTheme] = useState(false);

  function toggleTheme() {
    setTheme(!theme);
  }

  const styles = getStyleSheet(theme);

  const backgroundColor = StyleSheet.flatten(styles.container).backgroundColor;

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Button title={backgroundColor} onPress={toggleTheme} />
      </View>
    </View>
  );
};

export default MainApp;
