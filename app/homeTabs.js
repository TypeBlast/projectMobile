import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse, faShop, faUsersGear, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { View, Text } from 'react-native';

// Importando as telas que serão usadas nas abas
import HomeScreen from './screens/home';
import ShopScreen from './screens/shop';
import UsersScreen from './screens/users';
import CartScreen from './screens/cart';
import UserScreen from './screens/user';

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let icon;

          switch (route.name) {
            case 'Home':
              icon = faHouse;
              break;
            case 'Shop':
              icon = faShop;
              break;
            case 'Services':
              icon = faUsersGear;
              break;
            case 'Cart':
              icon = faCartShopping;
              break;
            case 'User':
              icon = faUser;
              break;
          }

          return <FontAwesomeIcon icon={icon} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#E01483',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          position: 'absolute',
          bottom: 10,
          left: 20,
          right: 20,
          height: 60,
          borderRadius: 20,
          backgroundColor: 'white',
          shadowColor: '#000',
          shadowOpacity: 0.06,
          shadowOffset: { width: 0, height: 5 },
          shadowRadius: 10,
          elevation: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          paddingBottom: 5,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Shop" component={ShopScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Services" component={UsersScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Cart" component={CartScreen} options={{ headerShown: false }} />
      <Tab.Screen name="User" component={UserScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default HomeTabs;
