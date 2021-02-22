import * as React from 'react';
import {View, Text} from 'react-native';
import * as RootNavigation from './RootNavigation';
import {Button} from 'react-native-material-ui';
import Statistics from '../components/Statistics';

export default function StatisticsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 20}}>Statistics Screen</Text>
      <Statistics />
      <Button
        raised
        primary
        text="Volver a Inicio"
        onPress={() => RootNavigation.navigate('Inicio')}
      />
    </View>
  );
}
