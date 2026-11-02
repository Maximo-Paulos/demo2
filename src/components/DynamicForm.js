import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';

function DynamicForm() {
  const [comentario, setComentario] = useState('');

  function onSubmit() {
    console.log({ comentario });
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.field}
        placeholder='comentario'
        onChangeText={text => setComentario(text)}
        value={comentario}
      />
      <Pressable style={styles.boton} onPress={() => onSubmit()}>
        <Text style={styles.textoBoton}>Enviar</Text>
      </Pressable>

      {/* Solo para controlar: datos en tiempo real */}
      <View style={styles.control}>
        <Text>Comentario: {comentario}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: 20,
  },
  field: {
    height: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'solid',
    borderRadius: 6,
    marginVertical: 10,
  },
  boton: {
    backgroundColor: '#28a745',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#28a745',
  },
  textoBoton: {
    color: '#fff',
    textAlign: 'center',
  },
  control: {
    marginTop: 20,
  },
});

export default DynamicForm;
