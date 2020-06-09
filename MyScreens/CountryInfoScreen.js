import * as React from 'react';
import {View, Text} from 'react-native';
import MyButton from './MyButton';
import CountryInfo from '../components/CountryInfo';

export default function CountryInfoScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 20}}>Country Info Screen</Text>
      <MyButton nombre="Ir a Inicioo" destino="Inicio" />

      <CountryInfo />
    </View>
  );
}
