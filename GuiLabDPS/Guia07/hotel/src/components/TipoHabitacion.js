import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TipoHabitacion = ({ type, description, price }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{type}</Text>
    <Text style={styles.description}>{description}</Text>
    <Text style={styles.price}>Precio: {price} USD</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#f8f8f8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    color: '#4caf50',
  },
});

export default TipoHabitacion;
