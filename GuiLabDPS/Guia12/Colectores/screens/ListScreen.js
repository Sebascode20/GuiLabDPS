import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../src/utils/firebase';
import ColectorItem from '../src/components/ColectorItem';

export default function ListScreen() {
  const [colectores, setColectores] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'colectores'), snapshot => {
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setColectores(items);
    });

    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={colectores}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ColectorItem colector={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});
