import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React, { useState, useEffect } from "react";

export default function FetchData() {
  const API_URL = "https://jsonplaceholder.typicode.com/users";
  const RandDogImg = "https://random.dog/woof.json";

  const [data, setData] = useState([]);
  const [dogImg, setDogImg] = useState("");

  useEffect(async () => {
    try {
      const response = await fetch(API_URL);
      const userData = await response.json();
      setData(userData);

      const dogresp = await fetch(RandDogImg);
      const dogData = await dogresp.json();
      setDogImg(dogData.url);
      // console.log(userData[0].name);
    } catch (e) {
      console.log(e);
    }
  }, [API_URL, RandDogImg]);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: dogImg ? dogImg : null,
        }}
        style={{ width: "100%", height: 500 }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((entries, index) => {
          return (
            <View
              key={index}
              style={{
                backgroundColor: "#CAD5E2",
                padding: 10,
                borderRadius: 5,
                marginVertical: 15,
              }}>
              <Text style={{ fontSize: 16 }}>{entries.email}</Text>
              <Text style={{ fontSize: 16 }}>{entries.username}</Text>
              <Text style={{ fontSize: 16 }}>{entries.address.zipcode}</Text>
              <Text style={{ fontSize: 16 }}>{entries.address.city}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});
