import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

function CharacterCard(props) {
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{ uri: props.personaje.image }}
        resizeMode='contain'
      />
      <Text style={styles.nombre}>{props.personaje.name}</Text>
      <Text>{props.personaje.species}</Text>
      <Text>{props.personaje.gender}</Text>
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
});

export default CharacterCard;
