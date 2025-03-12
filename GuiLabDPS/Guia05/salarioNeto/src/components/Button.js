import React from 'react';
import { Button } from 'react-native';

const Boton = ({ onPress }) => {
  return <Button title="Calcular Salario Neto" onPress={onPress} />;
};

export default Boton;
