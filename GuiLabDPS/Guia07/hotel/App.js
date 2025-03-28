import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import TipoHabitacion from './src/components/TipoHabitacion';
import ListaServicios from './src/components/ListaServicios';
import LugaresInteres from './src/components/LugaresInteres';
import ModalHotel from './src/components/ModalHotel';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const roomData = [
    { type: 'Suite', description: 'Habitación de lujo con vista al mar', price: 200 },
    { type: 'Doble', description: 'Habitación con dos camas dobles', price: 120 },
    { type: 'Simple', description: 'Habitación con cama individual', price: 80 },
  ];

  const lugares = [
    { name: 'Playa Principal', description: 'Una hermosa playa de arena blanca, ideal para nadar y relajarse.', image: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg'},
    { name: 'Museo Local', description: 'Un museo que cuenta la historia de la región, con exposiciones interactivas.', image: 'https://images.pexels.com/photos/69903/pexels-photo-69903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Parque Natural', description: 'Un parque lleno de flora y fauna local, perfecto para caminatas y observación de aves.', image: 'https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Centro Comercial', description: 'Un moderno centro comercial con tiendas de lujo y restaurantes de primer nivel.', image: 'https://images.pexels.com/photos/2861655/pexels-photo-2861655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ];

  const servicios = ['Wi-Fi gratuito', 'Piscina', 'Gimnasio', 'Restaurante', 'Spa'];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Bienvenido al Hotel Paradise</Text>

      <Button title="Ver más sobre el hotel" onPress={() => setModalVisible(true)} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tipos de Habitaciones</Text>
        {roomData.map((room, index) => (
          <TipoHabitacion key={index} {...room} />
        ))}
      </View>

      <ListaServicios servicios={servicios} />
      <LugaresInteres lugares={lugares} />

      <ModalHotel
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        title="Hotel Paradise"
        content="El Hotel Paradise ofrece una experiencia inolvidable con lujo y comodidad."
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default App;

