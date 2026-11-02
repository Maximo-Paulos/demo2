import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Card from '../components/Card';
import products from '../data/products';

function ProductsAll() {
  const [productos, setProductos] = useState(products);

  return (
    <View style={styles.flatlist}>
      <FlatList
        data={productos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Card producto={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    width: '100%',
    flex: 1,
  },
});

export default ProductsAll;
