import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

function Contador() {
  const [cantClicks, setCantClicks] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Cantidad de clicks: {cantClicks}</Text>
      <Pressable style={styles.boton} onPress={() => setCantClicks(cantClicks + 1)}>
        <Text style={[styles.texto, styles.textoBoton]}>Click aquí para contar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  boton: {
    padding: 7,
    backgroundColor: 'rgba(0, 255, 0, 0.5)',
    marginBottom: 10,
    borderRadius: 4,
  },
  texto: {
    textAlign: 'center',
  },
  textoBoton: {
    fontWeight: 'bold',
  },
});

export default Contador;
