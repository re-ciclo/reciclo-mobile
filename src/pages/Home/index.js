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





const Home = ({navigation}) =>{
    return(
        <View style={styles.container}>

            <View style={styles.menu}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>{menu}</TouchableOpacity>
            </View>

            <View style={styles.main}>
                    <Text style={styles.h1}>Home</Text>
            </View>

            <View style={styles.footer}>

            <View style={styles.box4}><TouchableOpacity onPress={() => navigation.navigate('Projetos')}>{home}</TouchableOpacity></View>
                    <View style={styles.box1}><TouchableOpacity onPress={() => navigation.navigate('Informativo')}>{rocket}</TouchableOpacity></View>
                    <View style={styles.box2}><TouchableOpacity onPress={() => navigation.navigate('AReciclo')}>{book}</TouchableOpacity></View>
                    <View style={styles.box3}><TouchableOpacity onPress={() => navigation.navigate('Contatos')}>{person}</TouchableOpacity></View>
            </View>

        </View>
    );
}

export default Home;

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
        height: '40px',
    },
    h1:{
        fontSize:32
    },
    main:{
        
        justifyContent: 'center',
        alignItems: 'center',
        height: '460px',
    },
    footer:{
        justifyContent:'space-around',
        alignItems:'center',
        width:'100%',
        backgroundImage:'linear-gradient(#fff, #000)',
        height: '120px',
        flexDirection:'row'
        
    },
    box1:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%',
        height: '45%',
        backgroundColor: '#00B9A3',
        borderRadius: 5,
        shadowOpacity: 1,
        shadowRadius: 6.68,
        elevation: 11,
    }
    ,
    box2:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%',
        height: '45%',
        backgroundColor: '#00B9A3',
        borderRadius: 5,
        shadowOpacity: 1,
        shadowRadius: 6.68,
        elevation: 11,
    },

    box3:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%',
        height: '45%',
        backgroundColor: '#00B9A3',
        borderRadius: 5,
        shadowOpacity: 1,
        shadowRadius: 6.68,
        elevation: 11,
    },

    box4:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%',
        height: '45%',
        backgroundColor: '#00B9A3',
        borderRadius: 5,
        shadowOpacity: 1,
        shadowRadius: 6.68,
        elevation: 11,
    }

})