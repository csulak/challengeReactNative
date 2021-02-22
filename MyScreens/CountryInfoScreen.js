import * as React from 'react';
import {View, Text} from 'react-native';
import * as RootNavigation from './RootNavigation';
import CountryInfo from '../components/CountryInfo';
import {Button} from 'react-native-material-ui';

export default function CountryInfoScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 20}}>Aca podras consultar inforcaion de una ip</Text>
      <CountryInfo />
      <Button
        raised
        primary
        text="Volver a Inicio"
        onPress={() => RootNavigation.navigate('Inicio')}
      />
    </View>
  );
}
