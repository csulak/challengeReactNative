import React, {Fragment, useEffect} from 'react';
import {Text, View, TextInput, Button, Alert} from 'react-native';
import {useForm} from 'react-hook-form';

import {useDispatch, useSelector} from 'react-redux';
import {postearCountryInfoByIpAccion} from '../redux/countryInfoDucks';

export default function App() {
  // el useDispatch() que importamos nos sirve para poder consumir nuestras acciones creadas en los ducks
  const dispatch = useDispatch();

  // el useSelector() que importamos para poder leer toda la tienda
  // dentro de la tienda(store.js) tenemos statistics y countryInfo. y en countryInfo entre otras cosas
  // tiene un objeto con toda la info del country de la ip ingresada
  const countryInfo = useSelector(store => store.countryInfo.objetoo);

  const {register, setValue, handleSubmit, errors} = useForm();

  const onSubmit = (data, e) => {
    console.log('que hay en data', data);

    dispatch(postearCountryInfoByIpAccion(data.ip));
    // esto limpia los campos una vez que se termino de ejecutar el form al darle click  a agregar
  };

  useEffect(() => {
    register({name: 'ip'}, {required: true});
  }, [register]);

  return (
    <View>
      <Text>Informacion del country de la IP Ingresada</Text>

      <View>
        <TextInput
          style={{
            height: 40,
            borderColor: 'blue',
            borderWidth: 1,
          }}
          placeholder="carga una IP ej 123.123.123.123"
          onChangeText={text => setValue('ip', text, true)}
        />
        {errors.ip && <Text>This is required.</Text>}

        <Button title="B U S C A R" onPress={handleSubmit(onSubmit)} />
      </View>

      <View>
        <Text>
          {countryInfo.ip_inserted} - {countryInfo.name} -{' '}
          {countryInfo.iso_code}
        </Text>
      </View>
    </View>
  );
}
