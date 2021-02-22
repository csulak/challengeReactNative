import * as React from 'react';
import {View, Text} from 'react-native';
import * as RootNavigation from './RootNavigation';
import {Button} from 'react-native-material-ui';

export default function InicioScreen(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 20}}>Bienvenido</Text>
      <Button
        raised
        primary
        text="Ir a Statistics"
        onPress={() => RootNavigation.navigate('Statistics')}
      />
      <Button
        raised
        primary
        text="Ir a Country Info"
        onPress={() => RootNavigation.navigate('CountryInfo')}
      />
    </View>
  );
}
