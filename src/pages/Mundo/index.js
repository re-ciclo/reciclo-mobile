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


const Mundo = ({ navigation }) => {


    return (
        <View style={styles.container}>

            <View style={styles.menu}>
                <TouchableOpacity onPress={() => navigation.navigate('Ambiente')}>{voltar}</TouchableOpacity>
            </View>

        </View>
    );
}

export default Mundo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        flexDirection: 'column'
    },
    menu: {
        paddingRight: 5,
        backgroundColor: '#00B9A3',
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: 40
    },
    h1: {
        fontSize: 32
    },
    main: {

        justifyContent: 'center',
        alignItems: 'center',
        height: 500,
    },
    block1: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        // backgroundColor: '#c3c3c3',
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: 150,
        height: 150,
        backgroundColor: '#fff',
        borderRadius: 100,
        shadowOpacity: 1,
        shadowRadius: 6.68,
        elevation: 11,
        marginBottom: 70
    },
    input: {
        marginTop: 12,
        paddingLeft: 5,
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: '7%',
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowOpacity: 1,
        shadowRadius: 6.68,
        elevation: 11,
        borderRadius: 5
    },
    btn: {
        marginTop: 12,
        width: '50%',
        height: '7%',
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: '#00B9A3'

    },
    texto1: {
        color: '#fff',
        fontSize: 20

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
        backgroundImage: 'linear-gradient(#fff, #000)',
        height: '120px',
        flexDirection: 'row'

    },
    box1: {
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
    box2: {
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

    box3: {
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

    box4: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%',
        height: '45%',
        backgroundColor: '#00B9A3',
        borderRadius: 5,
        shadowOpacity: 1,
        shadowRadius: 6.68,
        elevation: 11
    }

})