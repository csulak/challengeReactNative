import * as React from 'react';
import {View, Text} from 'react-native';
import MyButton from './MyButton';
import IpsSaved from '../components/IpsSaved';

export default function IpsSavedScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>Ips Saved Screen</Text>
      <MyButton nombre="Ir a Inicioo" destino="Inicio" />

      <IpsSaved />
    </View>
  );
}
