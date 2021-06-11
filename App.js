import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import NavigationApp from "./Project/CitiesApp/Main";
import store from "./store";
import { Provider } from "react-redux";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    accent: "yellow",
  },
};

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <NavigationApp />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
