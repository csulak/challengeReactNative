import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import * as RootNavigation from './RootNavigation'
import {styles} from './MyButtonStyles'

export default function MyButton({nombre, destino}) {
  return (
    <TouchableOpacity
      style={styles.myButtonStyle}
      onPress={() => RootNavigation.navigate(destino)}>
      <Text style={styles.text}>{nombre}</Text>
    </TouchableOpacity>
  );
}
