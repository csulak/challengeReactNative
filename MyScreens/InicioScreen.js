import * as React from 'react';
import {View, Text, Image} from 'react-native';
import I18n from '../app/i18n/i18n';
import MyButton from './MyButton';
import BurgersToText from '../components/BurgersToText';

export default function InicioScreen(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 20}}>{I18n.t('home.text')}</Text>
      <MyButton nombre={I18n.t('statistics.goTo')} destino="Statistics" />

      <BurgersToText />
    </View>
  );
}
