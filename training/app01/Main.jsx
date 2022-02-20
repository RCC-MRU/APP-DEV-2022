import { View, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

export default function Main() {
  const [text, setText] = useState("");
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <Text style={{ fontSize: 20, textAlign: "justify" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
        molestiae architecto tenetur molestias consequuntur! Atque, tempora
        accusamus a maiores impedit enim, labore et unde maxime accusantium
        recusandae, repudiandae deserunt laudantium.
      </Text>
      <View style={{ marginTop: 10 }}>
        <TextInput
          style={styles.textInput}
          onChangeText={setText}
          autoCapitalize="words"
          defaultValue="Turel"
        />
      </View>
      <Text style={{ textAlign: "center", fontSize: 16 }}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 10,
    borderColor: "red",
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
});
