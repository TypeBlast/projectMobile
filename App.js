import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import * as Font from 'expo-font';

//Import de telas
import Index from './app/index';
import Login from './app/login';
import Register from './app/register';

const Stack = createStackNavigator()

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'IntegralCF-Regular': require('./assets/fonts/IntegralCF-Regular.otf'),
        'IntegralCF-Bold': require('./assets/fonts/IntegralCF-Bold.otf'),
        'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
        'Poppins-ExtraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
        'MonumentExtentend': require('./assets/fonts/MonumentExtended-Ultrabold.otf')
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="index">
        <Stack.Screen name="index" component={Index} options={{
          title: false,
          headerTransparent: true,
          headerShown: false
        }} />
        <Stack.Screen name="login" component={Login} options={{
          title: false,
          headerTransparent: true
        }} />
        <Stack.Screen name="register" component={Register} options={{
          title: false,
          headerTransparent: true,
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
