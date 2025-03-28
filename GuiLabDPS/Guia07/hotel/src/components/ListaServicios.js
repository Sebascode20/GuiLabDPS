import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListaServicios = ({ servicios }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Servicios</Text>
    {servicios.map((service, index) => (
      <Text key={index} style={styles.serviceItem}>
        - {service}
      </Text>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#e1f5fe',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  serviceItem: {
    fontSize: 16,
    color: '#333',
  },
});

export default ListaServicios;
