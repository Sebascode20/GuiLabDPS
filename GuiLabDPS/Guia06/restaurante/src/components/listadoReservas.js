import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ListadoReservas = () => {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const reservasGuardadas = await AsyncStorage.getItem('reservas');
        if (reservasGuardadas) {
          setReservas(JSON.parse(reservasGuardadas));
        }
      } catch (error) {
        console.error('Error al cargar las reservas', error);
      }
    };

    fetchReservas();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.reserva}>
      <Text>{`Nombre: ${item.nombre}`}</Text>
      <Text>{`Fecha: ${new Date(item.fecha).toLocaleDateString()}`}</Text>
      <Text>{`Hora: ${new Date(item.hora).toLocaleTimeString()}`}</Text>
      <Text>{`Personas: ${item.personas}`}</Text>
      <Text>{`Sección: ${item.seccion}`}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listado de Reservas</Text>
      <FlatList
        data={reservas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  reserva: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
});

export default ListadoReservas;
