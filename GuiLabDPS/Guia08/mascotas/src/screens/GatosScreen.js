import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EspeciesList from '../components/ListaEspecies';

const gatos = [
    {
      name: 'Persa',
      image: 'https://images.unsplash.com/photo-1585137173132-cf49e10ad27d?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      country: 'Irán',
    },
    {
      name: 'Siames',
      image: 'https://images.unsplash.com/photo-1592652426689-4e4f12c4aef5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      country: 'Tailandia',
    },
    {
      name: 'Maine Coon',
      image: 'https://images.unsplash.com/photo-1569591159212-b02ea8a9f239?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      country: 'Estados Unidos',
    },
    {
      name: 'Sphynx',
      image: 'https://images.unsplash.com/photo-1547565322-847851d7ef2f?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      country: 'Canadá',
    },
    {
      name: 'Bengalí',
      image: 'https://images.unsplash.com/photo-1496284777878-ce2e3e4dd028?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      country: 'Estados Unidos',
    },
  ];
  
function GatosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Especies de Gatos</Text>
      <EspeciesList data={gatos} /> 
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

export default GatosScreen;
