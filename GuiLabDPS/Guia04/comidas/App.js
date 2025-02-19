import { AppRegistry } from "react-native";
import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from "react-native";

const PLATOS = [
  {
    id: "1",
    src: require("./src/img/pupusas.jpg"),
    nombre: "Pupusas",
    caloria: 256,
  },
  {
    id: "2",
    src: require("./src/img/empanadas.jpg"),
    nombre: "Empanadas",
    caloria: 335,
  },
  {
    id: "3",
    src: require("./src/img/pasteles.jpg"),
    nombre: "Pasteles",
    caloria: 292,
  },
  {
    id: "4",
    src: require("./src/img/yuca.jpg"),
    nombre: "Yuca",
    caloria: 480,
  },
  {
    id: "5",
    src: require("./src/img/nuegados.jpg"),
    nombre: "Nuegados",
    caloria: 280,
  },
];

const Item = ({ img, nombre, caloria }) => (
  <View style={styles.item}>
    <Image source={img} style={styles.img} />
    <View style={styles.textContainer}>
      <Text style={styles.nombre}>{nombre}</Text>
      <Text style={styles.caloria}>Cantidad calórica: {caloria}</Text>
    </View>
  </View>
);

export default function App() {
  const renderItem = ({ item }) => (
    <Item img={item.src} nombre={item.nombre} caloria={item.caloria} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={PLATOS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#33fffc",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  img: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderRadius: 100,
    borderColor: "#d35647",
    resizeMode: "cover",
    margin: 8,
    marginRight: 16
  },
  nombre: {
    fontSize: 32,
    fontFamily: "sans-serif",
  },
  caloria: {
    fontSize: 16,
    color: "#555", // Color más suave para las calorías
    marginTop: 4, // Espacio entre el nombre y las calorías
  },
});
