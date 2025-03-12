import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Formulario = ({ nombre, setNombre, salarioBase, setSalarioBase }) => {
  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Ingrese el nombre del empleado"
        value={nombre}
        onChangeText={setNombre} 
      />

      <TextInput
        style={styles.input}
        placeholder="Ingrese el salario base"
        keyboardType="numeric"
        value={salarioBase}
        onChangeText={setSalarioBase} 
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    fontSize: 16,
  },
});

export default Formulario;
