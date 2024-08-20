import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from "expo-status-bar";

// Import das telas
import Index from './app/index';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName='index'>
        <Stack.Screen name="index" component={Index} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
