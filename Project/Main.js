import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddCity from "./City/AddCity";
import CitiesStack from "./City/CityStack";

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Cities" component={CitiesStack} />
      <Tab.Screen name="Add City" component={AddCity} />
    </Tab.Navigator>
  );
};

export default Main;
