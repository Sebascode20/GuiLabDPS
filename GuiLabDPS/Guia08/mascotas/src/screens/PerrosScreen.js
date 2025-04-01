import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EspeciesList from '../components/ListaEspecies';

const perros = [
    {
      name: 'Labrador',
      image: 'https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?q=80&w=1378&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      country: 'Canadá',
    },
    {
      name: 'Bulldog',
      image: 'https://images.unsplash.com/photo-1568315056770-f4a63027dcd3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      country: 'Reino Unido',
    },
    {
      name: 'Chihuahua',
      image: 'https://images.unsplash.com/photo-1605630574100-cff6f7d2a948?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      country: 'México',
    },
    {
      name: 'Pastor Alemán',
      image: 'https://images.unsplash.com/photo-1605725657590-b2cf0d31b1a5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      country: 'Alemania',
    },
    {
      name: 'Beagle',
      image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      country: 'Reino Unido',
    },
  ];

function PerrosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Especies de Perros</Text>
      <EspeciesList data={perros} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default PerrosScreen;
