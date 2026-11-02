import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import products from '../data/products';

function ProductsList() {
  const [productos, setProductos] = useState(products);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Probando FlatLists</Text>
      <Text style={styles.subtitulo}>Lista de productos</Text>
      <View style={styles.flatlist}>
        <FlatList
          data={productos}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <Text>{item.title}</Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  flatlist: {
    width: '100%',
    flex: 1,
  },
});

export default ProductsList;
