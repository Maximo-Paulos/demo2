import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import Contador from '../components/Contador';
import DynamicForm from '../components/DynamicForm';

function Home() {
  function clickear() {
    console.log('me clickearon');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Hola Mundo</Text>
      <Pressable style={styles.boton} onPress={() => clickear()}>
        <Text style={[styles.texto, styles.textoBoton]}>clickeame</Text>
      </Pressable>
      <Contador />
      <DynamicForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  texto: {
    textAlign: 'center',
  },
  boton: {
    padding: 4,
    backgroundColor: '#ccc',
    marginBottom: 10,
    borderRadius: 4,
  },
  textoBoton: {
    fontWeight: 'bold',
  },
});

export default Home;
