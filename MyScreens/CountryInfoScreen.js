import * as React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import MyButton from './MyButton'

export default function CountryInfoScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 20}}>Country Info Screen</Text>
      <MyButton nombre='Ir a Inicioo' destino='Inicio' />
    </View>
  );
}
