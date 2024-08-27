import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse, faShop, faUsersGear, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';

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
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Shop" component={ShopScreen} />
      <Tab.Screen name="Services" component={UsersScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="User" component={UserScreen} />
    </Tab.Navigator>
  );
}

export default HomeTabs;
