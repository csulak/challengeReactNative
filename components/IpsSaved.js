import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {obtenerIpsSavedAccion} from '../redux/ipsSavedDucks';

const IpsSaved = () => {
  //EN ESTE EJEMPLO MUESTRO TODAS LAS IPS SIN TENER QUE PEGARLE A NINGUN ENDPOINT ME TRAE TODA LA INFO AL CARGAR ESTE COMPONENTE

  const [isLoading, setIsLoading] = React.useState(false);

  
  // el useSelector() que importamos para poder leer toda la tienda
  // dentro de la tienda(store.js) tenemos statistics y countryInfo. y en statistics entre otras cosas
  // tiene un objeto con toda la info de las estadisticas que le pega al endpoint correspondiente
  const statistics = useSelector(store => store.ipsSaved.objetoo);
  
  
  // el useDispatch() que importamos nos sirve para poder consumir nuestras acciones creadas en los ducks
  const dispatch = useDispatch();
  
  
  // useEffect se ejecutara una vez que levante este componente (IpsSaved.jsx)
  useEffect(() => {
    console.log("useEffect del componente IpsSaved")
    obtenerDatos();
  }, []);
  
  
  const obtenerDatos = async () => {
    setIsLoading(true);
    dispatch(obtenerIpsSavedAccion())

    setIsLoading(false);
  };



  return (
    <View style={{padding: 10, borderColor: 'blue', borderWidth: 1}}>
      <Text>Aca visualizamos todas las ips que se fueron persistiendo</Text>

      <Text>ip - distancia to buenos aires</Text>

      <FlatList
        data={statistics}
        renderItem={({item}) => (
          <Text style={{padding: 10, fontSize: 11}}>
            {item.ip} - {item.distance_to_buenos_aires}
          </Text>
        )}
        refreshing={isLoading}
        onRefresh={obtenerDatos}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default IpsSaved;
