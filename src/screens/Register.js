import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { auth } from '../firebase/config';

// function Register() {  // Código anterior
function Register(props) {  // Código nuevo (Claude): recibe la prop irA
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [register, setRegister] = useState(false);
  const [registerError, setRegisterError] = useState('');

  // Código anterior:
  // function onSubmit() {
  //   console.log({ email, username, password });
  // }

  // Código nuevo:
  function onSubmit() {
    setRegister(false);
    setRegisterError('');
    auth.createUserWithEmailAndPassword(email, password)
      .then(response => {
        setRegister(true);
        props.irA('Login'); // Código nuevo (Claude): registro OK, redirige a Login
      })
      .catch(error => {
        setRegisterError('Fallo en el registro.');
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registro</Text>
      <TextInput
        style={styles.field}
        placeholder='email'
        keyboardType='email-address'
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.field}
        placeholder='userName'
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.field}
        placeholder='password'
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <Pressable style={styles.boton} onPress={() => onSubmit()}>
        <Text style={styles.textoBoton}>Registrate</Text>
      </Pressable>
      {register && <Text>Usuario registrado.</Text>}
      {registerError !== '' && <Text>{registerError}</Text>}

      <Text>Estos son los datos que se han introducido:</Text>
      <View style={styles.control}>
        <Text>Email: {email}</Text>
        <Text>Username: {username}</Text>
        <Text>Password: {password}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
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

export default Register;
