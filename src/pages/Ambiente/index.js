// Libraries

import React from 'react';
import {StyleSheet,
        Text,
        View,
        Image,
        TextInput,
        TouchableOpacity,
        StatusBar
    } from 'react-native';


// Icones 

import FA from 'react-native-vector-icons/FontAwesome';
import IO from 'react-native-vector-icons/Ionicons';


const menu = <IO name="menu" size={30} color="#fff" />;

const home = <IO name="home" size={30} color="#fff" />;
const rocket = <FA name="rocket" size={30} color="#fff" />;
const book = <IO name="ios-book" size={30} color="#fff" />;
const person = <IO name="person" size={30} color="#fff" />;


const eventos = <IO name="calendar-outline" size={100} color="#fff" />;
const resultados = <IO name="bar-chart" size={100} color="#fff" />;
const dados = <IO name="finger-print-outline" size={100} color="#fff" />;
const mundo = <IO name="earth-outline" size={100} color="#fff" />;
const sair = <IO name="log-out-outline" size={25} color="#00B9A3" />;

// AsyncStorage
import AsyncStorage from '@react-native-community/async-storage';


const Ambiente = ({navigation}) =>{

    const [verifica, setVerifica] = React.useState("");
    const [nome, setNome] = React.useState("");
    const [valor, setValor] = React.useState("");





    async function verificar(){
        const name = await AsyncStorage.getItem('user');
        setVerifica(name);
        setNome(name)
        console.log(name);

        // if( name == "Fulano"){   //undefined AsyncStorage.getItem('user') !== '10' || AsyncStorage.getItem('user') !== 10
        //     AsyncStorage.removeItem('user');
        //     navigation.navigate('Home');
            
        //  }
        
    }

    

    function deslogar(){
        // AsyncStorage.multiRemove(['user']);
        AsyncStorage.removeItem('user');
        navigation.navigate('Home');
    }

    

    
     
        return(
            <View style={styles.container} onLoad={verificar()}>
    
                <View style={styles.menu}>
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>{menu}</TouchableOpacity>
                </View>
    
                <View style={styles.main}>
                    <View style={styles.block1}>
                        <Text style={styles.h1}>Seja bem vindo(a) {nome}</Text>
                        <Text style={styles.p}>Fique à vontade e acesse os resultados, eventos, seus dados e notícias da comunidade.</Text>
                    </View>  
                    
                        <View style={styles.block2}>
                            <View style={styles.card1}>
                                <TouchableOpacity onPress={() => navigation.navigate('Resultados')}>{resultados}</TouchableOpacity>
                            </View>
                            <View style={styles.card2}>
                                <TouchableOpacity onPress={() => navigation.navigate('Eventos')}>{eventos}</TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.block3}>
    
                            <View style={styles.card1}>
                                <TouchableOpacity onPress={() => navigation.navigate('Dados')}>{dados}</TouchableOpacity>
                            </View>
                            <View style={styles.card2}>
                                <TouchableOpacity onPress={() => navigation.navigate('Mundo')}>{mundo}</TouchableOpacity>
                            </View>
    
                        </View>
                       
                        
                        
                        <TouchableOpacity style={styles.sair} onPress={deslogar}><Text>{sair}</Text></TouchableOpacity>
                        {/* <Text>{valor}</Text> */}
                        
    
                </View>
    
               
    
            </View>
        );
    }

export default Ambiente;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        width:'100%',
        height:'100%',
        flexDirection:'column'
    },
    menu:{
        backgroundColor:'#00B9A3',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        height: 40,
    },
   
    main:{
        
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 580
    },
    h1:{
        
        fontSize:30,
    },
    p:{
        
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15,
        paddingLeft: 20,
        paddingRight: 10
    },
    block1:{
        
        justifyContent: 'flex-start',
        alignItems: 'center',
        width:'100%',
        height:'20%',
        flexDirection:'column'
        
    },
    card1:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#00B9A3',
        width:'40%',
        height:'70%',
        borderRadius:5,
        shadowOpacity: 1,
        shadowRadius: 6.68,
        elevation: 11,
    },
    card2:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#00B9A3',
        width:'40%',
        height:'70%',
        borderRadius:5,
        shadowOpacity: 1,
        shadowRadius: 6.68,
        elevation: 11,
    },
    block2:{
        justifyContent: 'space-around',
        alignItems: 'center',
        width:'100%',
        height:'35%',
        flexDirection:'row'
    },
    block3:{
        justifyContent: 'space-around',
        alignItems: 'center',
        width:'100%',
        height:'32%', 
        flexDirection:'row'
    },
    sair:{
        borderRadius:5,
        shadowOpacity: 1,
        shadowRadius: 6.68,
        elevation: 11,
    }
   

})