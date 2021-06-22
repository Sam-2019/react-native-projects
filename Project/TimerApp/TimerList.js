import React from "react";
import { ScrollView, StyleSheet, View, FlatList } from "react-native";
import TimerContainer from "./TimerContainer";

const data = [
  {
    id: 0,
    task: "Clean House",
    bucket: "House Chore",
  },
  {
    id: 1,
    task: "Clean Car",
    bucket: "Car Chore",
  },
];

const TimerList = () => {
  const renderItem = ({ item }) => (
    <TimerContainer text={item.task} subtext={item.bucket} />
  );

  return (
    <ScrollView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
};

export default TimerList;

const styles = StyleSheet.create({});
