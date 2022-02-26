import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={{ textAlign: "center", color: "white", fontSize: 18 }}>
        This is a footer
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "green",
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
  },
});
