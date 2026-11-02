import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

function Imagenes() {
  return (
    <View>
      <Text style={styles.titulo}>Probando imágenes</Text>
      {/* ponytail: imagen de reemplazo, cambiar por la del zip de la consigna */}
      <Image
        style={styles.image}
        source={require('../../assets/icon.png')}
        resizeMode='contain'
      />
      {/* ponytail: URL de reemplazo, cambiar por el link de la consigna */}
      <Image
        style={styles.image}
        source={{ uri: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg' }}
        resizeMode='contain'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
});

export default Imagenes;
