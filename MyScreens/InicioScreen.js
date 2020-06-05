import * as React from 'react';
import {View, Text, Image} from 'react-native';
import MyButton from './MyButton';
import BurgersToText from '../components/BurgersToText';

export default function InicioScreen(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 20}}>Inicio Screen</Text>
      <MyButton nombre="Ir a Statisticss" destino="Statistics" />
      <BurgersToText />
    </View>
  );
}
