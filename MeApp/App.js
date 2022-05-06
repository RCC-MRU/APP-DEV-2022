import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import HomeScreen from './src/HomeScreen';
import AboutMe from './src/AboutMe'
import Projects from './src/Projects'

export default function App() {
  return (
    
    <NavigationContainer>
   <StatusBar style="auto"/>
      <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AboutMe" component={AboutMe} />
      <Stack.Screen name="Projects" component={Projects} />
    </Stack.Navigator>
    </NavigationContainer>
    
  );
}

