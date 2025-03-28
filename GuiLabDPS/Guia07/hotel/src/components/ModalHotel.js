import React from "react";
import { Modal, View, Text, StyleSheet, Image, Button } from "react-native";

const ModalHotel = ({ visible, onClose, title, content, image }) => {
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {image && <Image source={{ uri: image }} style={styles.image} />}
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.content}>{content}</Text>
          <Button title="Cerrar" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 150,
    marginBottom: 15,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
});

export default ModalHotel;