import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const FlatListLucas = () => {
  return (
    <View style={styles.container}>
      <Text>Esto es el componente FlatListLucas</Text>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie', name: 'asdsadadsasd'},
        ]}
        renderItem={({item}) => (
          <Text style={styles.item}>
            {item.key}
            {item.name}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default FlatListLucas;
