import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';

const IpsSaved = () => {
  //EN ESTE EJEMPLO MUESTRO TODAS LAS IPS SIN TENER QUE PEGARLE A NINGUN ENDPOINT ME TRAE TODA LA INFO AL CARGAR ESTE COMPONENTE

  const [ipsSaved, setIpsSaved] = React.useState([]);

  // useEffect se ejecutara una vez que levante este componente (IpsSaved.jsx)
  useEffect(() => {
    //console.log("useEffect")
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch('http://localhost:8080/challenge/api/ips/saved');
    const todasLasIpsIngresadas = await data.json();
    console.log('que tenemos aca', todasLasIpsIngresadas);
    setIpsSaved(todasLasIpsIngresadas);
  };

  return (
    <View style={{padding: 10, borderColor: 'blue', borderWidth: 1}}>
      <Text>Aca visualizamos todas las ips que se fueron persistiendo</Text>

      <Text>ip - distancia to buenos aires</Text>

      <FlatList
        data={ipsSaved}
        renderItem={({item}) => (
          <Text style={{padding: 10, fontSize: 11}}>
            {item.ip} - {item.distance_to_buenos_aires}
          </Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default IpsSaved;
