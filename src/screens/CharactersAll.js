import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import CharacterCard from '../components/CharacterCard';

function CharactersAll() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setPersonajes(data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <View style={styles.flatlist}>
      {personajes.length === 0 ? (
        <ActivityIndicator size='large' color='green' />
      ) : (
        <FlatList
          data={personajes}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <CharacterCard personaje={item} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    width: '100%',
    flex: 1,
  },
});

export default CharactersAll;
