import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


// Navegation

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


// Pages
import Home from './src/pages/Home';
import Projetos from './src/pages/Projetos';
import AReciclo from './src/pages/AReciclo';
import Informativo from './src/pages/Informativo';
import Contatos from './src/pages/Contatos';
import Cadastros from './src/pages/Cadastros';

export default function App() {
  return (
    <NavigationContainer>

      <Drawer.Navigator initialRouteName="Cadastros">


        <Drawer.Screen name="Home" component={Home}
          options={{
            title: "Home",
            headerStyle: {
              backgroundColor: '#000'
            },
            headerTintColor: '#fff'
          }}
        />

        <Drawer.Screen name="Projetos" component={Projetos}
          options={{
            title: "Projetos",
            headerStyle: {
              backgroundColor: '#000'
            },
            headerTintColor: '#fff'
          }}
        />

        <Drawer.Screen name="AReciclo" component={AReciclo}
          options={{
            title: "AReciclo",
            headerStyle: {
              backgroundColor: '#000'
            },
            headerTintColor: '#fff'
          }}
        />

        <Drawer.Screen name="Informativo" component={Informativo}
          options={{
            title: "Informativo",
            headerStyle: {
              backgroundColor: '#000'
            },
            headerTintColor: '#fff'
          }}
        />


        <Drawer.Screen name="Contatos" component={Contatos}
          options={{
            title: "Contatos",
            headerStyle: {
              backgroundColor: '#000'
            },
            headerTintColor: '#fff'
          }}
        />
        
        <Drawer.Screen name="Cadastros" component={Cadastros}
          options={{
            title: "Cadastros",
            headerStyle: {
              backgroundColor: '#000'
            },
            headerTintColor: '#fff'
          }}
        />





      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
