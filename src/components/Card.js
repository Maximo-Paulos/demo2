import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

function Card(props) {
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{ uri: props.producto.image }}
        resizeMode='contain'
      />
      <Text style={styles.nombre}>{props.producto.title}</Text>
      <Text style={styles.precio}>$ {props.producto.price}</Text>
      <Text>{props.producto.description}</Text>
      <Text style={styles.categoria}>{props.producto.category}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  image: {
    height: 150,
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  precio: {
    fontWeight: 'bold',
    color: 'green',
    marginVertical: 3,
  },
  categoria: {
    fontStyle: 'italic',
    marginTop: 3,
  },
});

export default Card;
