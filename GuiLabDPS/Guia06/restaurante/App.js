import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Reserva from './src/components/reserva';
import ListadoReservas from './src/components/listadoReservas';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Reserva">
        <Stack.Screen name="Reserva" component={Reserva} />
        <Stack.Screen name="ListadoReservas" component={ListadoReservas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
