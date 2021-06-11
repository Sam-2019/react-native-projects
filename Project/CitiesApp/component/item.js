import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Item = ({ text, subText }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("City", {
      city: text,
    });
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <View>
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.subText}>{subText}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    paddingVertical: 8,
    borderBottomWidth: 2,
    backgroundColor: "gray",
    color: "#20232a",
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    fontWeight: 500,
    paddingLeft: 5,
  },
  subText: {
    fontSize: 16,
    paddingLeft: 5,
  },
});
