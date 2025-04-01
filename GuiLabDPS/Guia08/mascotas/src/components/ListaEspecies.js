import React from "react";
import { FlatList, View, Text, StyleSheet, Image } from "react-native";

function ListaEspecies({ data }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.country}>País de origen: {item.country}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f8f8f8",
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    width: "100%",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
  },
  country: {
    fontSize: 14,
    color: '#777',
  },
});

export default ListaEspecies;
