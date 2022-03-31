import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import {useFonts} from 'expo-font'; 
import { Homepage } from "./src/screens"

export default function App() {

  const [fontsLoaded, setFontLoad] = useState(false)

  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        'Montserrat_Semibold': require('C:\Users\Supreet Kaur\OneDrive\Desktop\ToDo_List_App\assets\fonts\Montserrat-SemiBold.ttf')
      }).then(() => {
        setFontLoad(true);
      })
    })();
  }, [])


  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (
      <Homepage />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
