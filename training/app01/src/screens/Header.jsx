import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Rcc App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "orange",
    width: screenWidth,
    height: screenHeight / 10,
    paddingHorizontal: 10,
    // paddingVertical: 10,
  },
  text: {
    fontSize: 24,
    color: "white",
    marginTop: 30,
  },
});
