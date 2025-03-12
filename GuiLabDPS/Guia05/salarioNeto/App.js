import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Form from './src/components/Form';
import Result from './src/components/Result';
import Button from './src/components/Button';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [salarioBase, setSalarioBase] = useState('');
  const [salarioNeto, setSalarioNeto] = useState(null);

  const calcularSalarioNeto = () => {
    const salarioBaseNum = parseFloat(salarioBase);

    if (isNaN(salarioBaseNum) || salarioBaseNum <= 0) {
      alert('Por favor, ingresa un salario base válido');
      return;
    }

    const issDeduction = salarioBaseNum * 0.03; 
    const afpDeduction = salarioBaseNum * 0.04; 
    const rentaDeduction = salarioBaseNum * 0.05;

    const deduccionesTotales = issDeduction + afpDeduction + rentaDeduction;
    const salarioFinal = salarioBaseNum - deduccionesTotales;

    setSalarioNeto(salarioFinal);

    setNombre('');
    setSalarioBase('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cálculo de Salario Neto</Text>
      <Form
        nombre={nombre} 
        setNombre={setNombre} 
        salarioBase={salarioBase} 
        setSalarioBase={setSalarioBase} 
      />
      <Button onPress={calcularSalarioNeto} />
      {salarioNeto !== null && <Result nombre={nombre} salarioNeto={salarioNeto} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  }
});
