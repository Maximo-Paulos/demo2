import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { auth } from '../firebase/config';

function Login(props) {  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);
  const [loginError, setLoginError] = useState('');


  // Código nuevo:
  function onSubmit() {
    setLogin(false);
    setLoginError('');

    if (!email.includes('@')) {
      setLoginError('Email mal');
      return;
    }
    if (password.length < 6) {
      setLoginError('La password debe tener una longitud mínima de 6 caracteres');
      return;
    }

    auth.signInWithEmailAndPassword(email, password)
      .then(response => {
        setLogin(true);
        props.irA('Home'); 
      })
      .catch(error => {
        setLoginError('Credenciales incorrectas'); 
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>
      <TextInput
        style={styles.field}
        placeholder='email'
        keyboardType='email-address'
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.field}
        placeholder='password'
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <Pressable style={styles.boton} onPress={() => onSubmit()}>
        <Text style={styles.textoBoton}>Login</Text>
      </Pressable>
      {login && <Text>Usuario logueado.</Text>}
      {loginError !== '' && <Text>{loginError}</Text>}

      {/* Solo para controlar: datos en tiempo real */}
      <View style={styles.control}>
        <Text>Email: {email}</Text>
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

export default Login;
