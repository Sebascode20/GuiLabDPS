import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function ColectorItem({ colector }) {
  return (
    <View style={styles.item}>
      <QRCode value={colector.codigo} size={100} color="purple" />
      <Text style={styles.nombre}>{colector.nombre}</Text>
      <Text>{colector.descripcion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: { marginBottom: 30, alignItems: 'center' },
  nombre: { fontSize: 20, fontWeight: 'bold', marginTop: 10 },
});
