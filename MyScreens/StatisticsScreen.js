import * as React from 'react';
import {View, Text} from 'react-native';
import MyButton from './MyButton';
import Statistics from '../components/Statistics';

export default function StatisticsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 20}}>Statistics Screen</Text>
      <MyButton nombre="Ir a Country Infoo" destino="CountryInfo" />

      <Statistics />
    </View>
  );
}
