import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ModalHotel from "./ModalHotel";

const LugaresInteres = ({ lugares }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handlePlacePress = (place) => {
    setSelectedPlace(place);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lugares de Interés Cercanos</Text>
      {lugares.map((place, index) => (
        <TouchableOpacity key={index} onPress={() => handlePlacePress(place)}>
          <Text style={styles.placeItem}>- {place.name}</Text>
        </TouchableOpacity>
      ))}
      {selectedPlace && (
        <ModalHotel
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          title={selectedPlace.name}
          content={selectedPlace.description}
          image={selectedPlace.image}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#fff3e0",
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  placeItem: {
    fontSize: 16,
    color: "#333",
  },
});

export default LugaresInteres;