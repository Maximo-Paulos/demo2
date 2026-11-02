import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import Home from './src/screens/Home';
import Imagenes from './src/screens/Imagenes';
import ProductsList from './src/screens/ProductsList';
import ProductsAll from './src/screens/ProductsAll';
import CharactersAll from './src/screens/CharactersAll';
import Register from './src/screens/Register';
import Login from './src/screens/Login';



export default function App() {
  const [pantalla, setPantalla] = useState('Home');

  const pantallas = {
    Home: <Home />,
    Imagenes: <Imagenes />,
    ProductsList: <ProductsList />,
    ProductsAll: <ProductsAll />,
    CharactersAll: <CharactersAll />,
    Register: <Register irA={setPantalla} />,
    Login: <Login irA={setPantalla} />,
  };

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        {Object.keys(pantallas).map(nombre => (
          <Pressable
            key={nombre}
            style={[styles.tab, pantalla === nombre && styles.tabActiva]}
            onPress={() => setPantalla(nombre)}
          >
            <Text style={styles.textoTab}>{nombre}</Text>
          </Pressable>
        ))}
      </View>
      <View style={styles.pantalla}>{pantallas[pantalla]}</View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  menu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  tab: {
    padding: 6,
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 4,
    backgroundColor: '#eee',
  },
  tabActiva: {
    backgroundColor: '#b6b6ff',
  },
  textoTab: {
    fontSize: 12,
  },
  pantalla: {
    flex: 1,
  },
});
