import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';

const IntroCat = () => {
  return (
    <>
      <Text>IntroCat Component!</Text>
      <View>
        <Text>Some text here</Text>
        <Image
          source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
          style={{width: 200, height: 200}}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'blue',
          borderWidth: 1,
        }}
        defaultValue="You can type here papa!"
      />
    </>
  );
};

export default IntroCat;
