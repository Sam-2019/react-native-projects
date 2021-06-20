import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import NavigationApp from "./Project/CitiesApp/Main";
import Timer from "./Project/TimerApp/Timer";
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

function MainCity() {
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

export default function App() {
  return <Timer />;
}
