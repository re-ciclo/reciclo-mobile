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





const Projetos = ({navigation}) =>{
    return(
        <View style={styles.container}>

            <View style={styles.menu}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>{menu}</TouchableOpacity>
            </View>

            <View style={styles.main}>
                    {/* <Text style={styles.h1}>Projetos</Text> */}

                    <View style={styles.block1}>
                        .
                    </View>
                    <View style={styles.block2}>
                        .
                    </View>
                    <View style={styles.block3}>
                        .
                    </View>


            </View>

            {/* <View style={styles.footer}>

            <View style={styles.box4}><TouchableOpacity onPress={() => navigation.navigate('Projetos')}>{home}</TouchableOpacity></View>
                    <View style={styles.box1}><TouchableOpacity onPress={() => navigation.navigate('Informativo')}>{rocket}</TouchableOpacity></View>
                    <View style={styles.box2}><TouchableOpacity onPress={() => navigation.navigate('AReciclo')}>{book}</TouchableOpacity></View>
                    <View style={styles.box3}><TouchableOpacity onPress={() => navigation.navigate('Contatos')}>{person}</TouchableOpacity></View>
            </View> */}

        </View>
    );
}

export default Projetos;

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
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '580px'
    },
    block1:{
        
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        height:'30%',
        backgroundColor:'#c3c3c3'
    },
    block2:{
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        height:'30%',
        backgroundColor:'#c3c3c3'
    },
    block3:{
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        height:'30%',
        backgroundColor:'#c3c3c3'
    }

})