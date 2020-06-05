// In App.js in a new project

import * as React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import s from './MyDrawer_style';

import InicioScreen from '../MyScreens/InicioScreen';
import CountryInfoScreen from '../MyScreens/CountryInfoScreen';
import StatisticsScreen from '../MyScreens/StatisticsScreen';
import IpsSavedScreen from '../MyScreens/IpsSavedScreen';
import {navigationRef} from '../MyScreens/RootNavigation';

function DrawerMenu(props) {
  return (
    <TouchableOpacity onPress={props.navigation}>
      <View style={s.menuContainer}>
        <View style={s.iconoContainer}>
          <Icon size={17} name={props.iconName} />
        </View>
        <View style={s.tituloContainer}>
          <Text style={s.tituloTxt}>{props.titleName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function Menu(props) {
  return (
    <View style={s.container}>
      <View style={s.bgContainer}>
        <TouchableOpacity>
          <View style={s.userContainer}>
            <Image style={s.userImagen} source={require('./logo.jpeg')} />
            <View style={s.camaraContainer}>
              <Image style={s.camaraIcon} source={require('./camara.png')} />
            </View>
          </View>

          <View style={s.userNombre}>
            <Text style={s.userTitulo}>un Titulo</Text>
            <Text style={s.userSubTitulo}>un Subtitulo</Text>
          </View>
        </TouchableOpacity>
      </View>
      <DrawerMenu
        iconName="home"
        titleName="Inicioo"
        navigation={() => props.navigation.navigate('Inicio')}
      />
      <DrawerMenu
        iconName="user"
        titleName="Statisticss"
        navigation={() => props.navigation.navigate('Statistics')}
      />
      <DrawerMenu
        iconName="bell"
        titleName="Country Infoo"
        navigation={() => props.navigation.navigate('CountryInfo')}
      />
      <DrawerMenu
        iconName="car"
        titleName="Ips Saved!"
        navigation={() => props.navigation.navigate('IpsSaved')}
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Drawer.Navigator drawerContent={props => <Menu {...props} />}>
        <Drawer.Screen name="Inicio" component={InicioScreen} />
        <Drawer.Screen name="Statistics" component={StatisticsScreen} />
        <Drawer.Screen name="CountryInfo" component={CountryInfoScreen} />
        <Drawer.Screen name="IpsSaved" component={IpsSavedScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MyDrawer;
