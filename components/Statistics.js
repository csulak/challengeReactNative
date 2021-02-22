import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {obtenerStatisticsAccion} from '../redux/statisticsDucks';
import {View, Text, TouchableOpacity} from 'react-native';

const Statistics = () => {
  // el useDispatch() que importamos nos sirve para poder consumir nuestras acciones creadas en los ducks
  const dispatch = useDispatch();

  // el useSelector() que importamos para poder leer toda la tienda
  // dentro de la tienda(store.js) tenemos statistics y countryInfo. y en statistics entre otras cosas
  // tiene un objeto con toda la info de las estadisticas que le pega al endpoint correspondiente
  const statistics = useSelector(store => store.statistics.objetoo);

  console.log('statistics Compoent', statistics);

  return (
    <View style={{padding: 10, borderColor: 'blue', borderWidth: 1}}>
      <Text>Estadisticas Generales</Text>

      {/* <p></p> */}

      {/* <button onClick={() => dispatch(obtenerStatisticsAccion() )}>Get Statistics</button> */}

      <TouchableOpacity
        style={{
          marginTop: 20,
          width: 200,
          height: 50,
          backgroundColor: '#ff5204',
          padding: 10,
          alignItems: 'center',
          borderRadius: 5,
        }}
        onPress={() => dispatch(obtenerStatisticsAccion())}>
        <Text style={{color: '#fff', fontSize: 20}}>Get Statistics</Text>
      </TouchableOpacity>

      <View>
        <Text> Average distance To Bs As : {statistics.average} </Text>
      </View>

      <View>
        <Text>Quantity of IPs saved : {statistics.quantity} </Text>
      </View>
    </View>
  );
};

export default Statistics;
