import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cities from "./Cities/Cities";
import AddCity from "./AddCity";

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Cities" component={Cities} />
      <Tab.Screen name="Add City" component={AddCity} />
    </Tab.Navigator>
  );
};

export default Main;

const styles = StyleSheet.create({});
