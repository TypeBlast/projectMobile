import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import 'react-native-gesture-handler';

//Import de telas
import Index from './app/index'

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
        <Stack.Screen name="index" component={Index} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
