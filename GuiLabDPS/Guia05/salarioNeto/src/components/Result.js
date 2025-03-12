import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Resultado = ({salarioNeto }) => {
  return (
    <Text style={styles.result}>
      {'El salario neto es:'} ${salarioNeto.toFixed(2)}
    </Text>
  );
};

const styles = StyleSheet.create({
  result: {
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Resultado;
