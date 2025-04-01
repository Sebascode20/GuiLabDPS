import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GatosScreen from '../screens/GatosScreen';  
import PerrosScreen from '../screens/PerrosScreen';  

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Gatos') {
            iconName = 'paw';
          } else if (route.name === 'Perros') {
            iconName = 'paw-outline'; 
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarLabelStyle: {
          textAlign: 'center', 
          fontSize: 14, 
        },
      })}
    >
      <Tab.Screen name="Gatos" component={GatosScreen} />
      <Tab.Screen name="Perros" component={PerrosScreen} />
    </Tab.Navigator>
  );
}

export default Tabs;