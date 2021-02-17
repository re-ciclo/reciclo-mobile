// Libraries

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    StatusBar
} from 'react-native';



// Icones 

import FA from 'react-native-vector-icons/FontAwesome';
import IO from 'react-native-vector-icons/Ionicons';


const voltar = <IO name="arrow-undo" size={25} color="#fff" />;


// AsyncStorage
import AsyncStorage from '@react-native-community/async-storage';


const Eventos = ({ navigation }) => {

    const data = [30, 10, 25, 18, 17];
    const pieData = data.map((value, index) => ({
        value,
        key: `${index}-${value}`,
        svg: {
            fill: '#fff000'
        }
    }));

    return (
        <View style={styles.container}>

            <View style={styles.areaMenu}>

                <View style={styles.areaTituloMenu}>

                    <Text style={styles.textoMenu}>Eventos</Text>
                </View>
                <View style={styles.iconMenu}>
                    <TouchableOpacity onPress={() => navigation.navigate('Ambiente')}>{voltar}</TouchableOpacity>
                </View>
            </View>








        </View>


    );
}

export default Eventos;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        flexDirection: 'column'
    },
    areaMenu: {
        flexDirection: 'row',
        paddingRight: 5,
        backgroundColor: '#00B9A3',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 40
    },
    areaTituloMenu: {
        width: '50%',
        justifyContent: 'center',
        marginEnd: 2,
    },

    textoMenu: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Arial'
    },
    areaIconMenu: {
        width: '10%'
    },
    h1: {
        fontSize: 32
    },
    main: {

        justifyContent: 'space-between',
        alignItems: 'center',
        height: 1000
    },
    btnArea: {
        marginBottom: 10,
        width: '90%',
        height: '5%',
        backgroundColor: "#fff",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'


    },
    block1: {

        justifyContent: 'center',
        // justifyContent: 'flex-start',
        // alignItems: 'center',
        // flexDirection: 'column',
        borderRadius: 5,
        shadowOpacity: 1,
        shadowRadius: 6.68,
        elevation: 11,
        borderRadius: 5,
        width: '90%',
        height: '25%'
    },



    btn: {
        marginTop: 12,
        width: '20%',
        height: '90%',
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: '#00B9A3',
        justifyContent: 'center',
        color: '#fff',
        borderRadius: 5,
        shadowOpacity: 1,
        shadowRadius: 6.68,
        elevation: 11
    },
    texto1: {
        color: '#000',
        fontSize: 20,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'

    },
    texto2: {
        marginTop: 12,
        fontSize: 16,
        color: '#00B9A3'
    },
    footer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        // backgroundImage: 'linear-gradient(#fff, #000)',
        height: '8%',
        flexDirection: 'row'

    }

})