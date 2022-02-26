import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Flexbox() {
  return (
    <View style={styles.flex}>
      <Text
        style={{
          color: "white",
          backgroundColor: "black",
          fontSize: 20,
          padding: 5,
        }}>
        Flexbox 1
      </Text>
      <Text
        style={{
          color: "white",
          backgroundColor: "black",
          fontSize: 20,
          padding: 5,
        }}>
        Flexbox 2
      </Text>
      <Text
        style={{
          color: "white",
          backgroundColor: "black",
          fontSize: 20,
          padding: 5,
        }}>
        Flexbox 3
      </Text>
      <Text
        style={{
          color: "white",
          backgroundColor: "black",
          fontSize: 20,
          padding: 5,
        }}>
        Flexbox 4
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    backgroundColor: "green",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
