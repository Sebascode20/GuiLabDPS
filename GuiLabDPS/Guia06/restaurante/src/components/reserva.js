import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { Picker } from '@react-native-picker/picker'; 

const Reserva = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState(new Date());
  const [hora, setHora] = useState(new Date());
  const [personas, setPersonas] = useState('');
  const [seccion, setSeccion] = useState('No fumadores');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleReserva = async () => {
    const reserva = {
      id: uuid.v4(),
      nombre,
      fecha,
      hora,
      personas,
      seccion
    };

    try {
      const reservasGuardadas = await AsyncStorage.getItem('reservas');
      let reservas = reservasGuardadas ? JSON.parse(reservasGuardadas) : [];

      reservas.push(reserva);
      await AsyncStorage.setItem('reservas', JSON.stringify(reservas));

      setNombre('');
      setPersonas('');
      setSeccion('No fumadores');
      navigation.navigate('ListadoReservas');
    } catch (error) {
      console.error('Error al guardar la reserva', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Nombre:</Text>
      <TextInput
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
        placeholder="Ingresa tu nombre"
      />

      <Text>Fecha:</Text>
      <Button title="Seleccionar Fecha" onPress={() => setShowDatePicker(true)} />
      {showDatePicker && (
        <DateTimePicker
          value={fecha}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) {
              setFecha(selectedDate);
            }
          }}
        />
      )}

      <Text>Hora:</Text>
      <Button title="Seleccionar Hora" onPress={() => setShowTimePicker(true)} />
      {showTimePicker && (
        <DateTimePicker
          value={hora}
          mode="time"
          display="default"
          onChange={(event, selectedTime) => {
            setShowTimePicker(false);
            if (selectedTime) {
              setHora(selectedTime);
            }
          }}
        />
      )}

      <Text>Cantidad de Personas:</Text>
      <TextInput
        style={styles.input}
        value={personas}
        onChangeText={setPersonas}
        keyboardType="numeric"
        placeholder="Número de personas"
      />

      <Text>Sección:</Text>
      <Picker
        selectedValue={seccion}
        onValueChange={(itemValue) => setSeccion(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="No fumadores" value="No fumadores" />
        <Picker.Item label="Fumadores" value="Fumadores" />
      </Picker>

      <Button title="Reservar" onPress={handleReserva} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
  },
  picker: {
    height: 50,
    width: 200,
  },
});

export default Reserva;