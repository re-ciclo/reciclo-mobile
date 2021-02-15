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




// AsyncStorage
 import AsyncStorage from '@react-native-community/async-storage';


const Sair = ({ navigation }) => {

    function deslogar(){
        AsyncStorage.removeItem('user');
        navigation.navigate('Home');
    }

    deslogar();

    return (
       
        <View style={styles.container}>
            <View onLoad={deslogar()}>
               <Text>Parece que há dados salvos, confirme a saída segura</Text> <TouchableOpacity style={styles.btn} onPress={() => deslogar()}>Deslogar</TouchableOpacity>
            </View>
        </View>
        
       
    );
}

export default Sair;

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 12,
        width: '100%',
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: '#00B9A3',
        color:'#fff'

    }

})