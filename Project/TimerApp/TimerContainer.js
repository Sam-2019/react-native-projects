import React from "react";
import { StyleSheet, View, Button } from "react-native";
import TimerText from "./TimerText";
import Time from "./TimerList";

const TimerContainer = ({text, subtext}) => {
  return (
    <View>
      <TimerText text={text} subtext={subtext}/>

      <Time />

      <View>
        <Button title="Edit" />

        <Button title="Remove" />
      </View>

      <Button title="Start" />
    </View>
  );
};

export default TimerContainer;

const styles = StyleSheet.create({});
