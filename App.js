import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


// Navegation

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Stack
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


// Pages
import Home from './src/pages/Home';
import Projetos from './src/pages/Projetos';
import AReciclo from './src/pages/AReciclo';
import Informativo from './src/pages/Informativo';
import Contatos from './src/pages/Contatos';
import Cadastros from './src/pages/Cadastros';


// Ambiente
import Ambiente from './src/pages/Ambiente';


// Pages Ambiente
import Resultados from './src/pages/Resultados';
import Eventos from './src/pages/Eventos';
import Dados from './src/pages/Dados';
import Mundo from './src/pages/Mundo';


// Deslogar
import Sair from './src/pages/Sair';

export default function App() {
  return (
    <NavigationContainer>

      <Drawer.Navigator initialRouteName="Home">


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
            title: "Informativos",
            headerStyle: {
              backgroundColor: '#000'
            },
            headerTintColor: '#fff'
          }}
        />


        <Drawer.Screen name="Contatos" component={Contatos}
          options={{
            title: "Contato",
            headerStyle: {
              backgroundColor: '#000'
            },
            headerTintColor: '#fff'
          }}
        />

        <Drawer.Screen name="Cadastros" component={Cadastros}
          options={{
            title: "Cadastre-se",
            headerStyle: {
              backgroundColor: '#000'
            },
            headerTintColor: '#fff'
          }}
        />


        <Drawer.Screen name="Ambiente" component={Ambiente}
          options={{
            title: "Ambiente",
            headerStyle: {
              backgroundColor: '#f4511e'

            },
            headerTintColor: '#fff'
          }}
        />

        <Drawer.Screen name="Resultados" component={Resultados}
          options={{
            title: "Resultados",
            headerStyle: {
              backgroundColor: '#f4511e'

            },
            headerTintColor: '#fff'
          }}
        />

        <Drawer.Screen name="Eventos" component={Eventos}
          options={{
            title: "Eventos",
            headerStyle: {
              backgroundColor: '#f4511e'

            },
            headerTintColor: '#fff'
          }}
        />

        <Drawer.Screen name="Dados" component={Dados}
          options={{
            title: "Dados",
            headerStyle: {
              backgroundColor: '#f4511e'

            },
            headerTintColor: '#fff'
          }}
        />

        <Drawer.Screen name="Mundo" component={Mundo}
          options={{
            title: "Mundo",
            headerStyle: {
              backgroundColor: '#f4511e'

            },
            headerTintColor: '#fff'
          }}
        />

        <Drawer.Screen name="Sair" component={Sair}
          options={{
            title: "Sair",
            headerStyle: {
              backgroundColor: '#f4511e'

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
