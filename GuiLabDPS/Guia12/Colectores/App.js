import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddScreen from './screens/AddScreen';
import ListScreen from './screens/ListScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="AddScreen" component={AddScreen} options={{ title: "Agregar Colector" }} />
        <Tab.Screen name="ListScreen" component={ListScreen} options={{ title: "Lista de Colectores" }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
