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
        tabBarIcon: ({ color }) => {
          let icon;
          let size = 32;  // Tamanho padrão para todos os ícones

          // Definindo o ícone e o tamanho específico para cada rota
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
              size = 30;  // Aumenta o tamanho do ícone específico da aba 'Home'
              break;
          }

          return <FontAwesomeIcon icon={icon} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#E01483',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,  // Remove os nomes das tabs
        tabBarStyle: {
          position: 'absolute',
          bottom: 30,
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
