import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Main from "./src/screens/Main";
import Header from "./src/screens/Header";
import Footer from "./src/screens/Footer";
import Flexbox from "./src/screens/Flexbox";
import FetchData from "./src/screens/FetchData";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Header />
      <Text style={{ marginHorizontal: 10 }}>Hello world</Text>
      <Main />
      <Footer />
      <Flexbox /> */}
      <FetchData />
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
