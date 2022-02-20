import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import Flexbox from "./Flexbox";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Header />
      <Text style={{ marginHorizontal: 10 }}>Hello world</Text>
      <Main />
      <Footer /> */}
      <Flexbox />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
