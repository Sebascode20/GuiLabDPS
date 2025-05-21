import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../src/utils/firebase';

export default function AddScreen() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [codigo, setCodigo] = useState('');

  const agregarColector = async () => {
    if (!nombre || !descripcion || !codigo) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    try {
      await addDoc(collection(db, 'colectores'), {
        nombre,
        descripcion,
        codigo,
      });
      Alert.alert('Éxito', 'Colector agregado');
      setNombre('');
      setDescripcion('');
      setCodigo('');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudo agregar el colector');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar colector</Text>
      <TextInput placeholder="Nombre" value={nombre} onChangeText={setNombre} style={styles.input} />
      <TextInput placeholder="Descripción" value={descripcion} onChangeText={setDescripcion} style={styles.input} />
      <TextInput placeholder="Código" value={codigo} onChangeText={setCodigo} style={styles.input} />
      <Button title="Agregar Colector" onPress={agregarColector} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 8, borderRadius: 5 },
  title: { fontSize: 24, textAlign: 'center', marginVertical: 20 }
});
