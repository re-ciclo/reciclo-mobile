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


// Graphics
import { PieChart } from 'react-native-svg-charts';

import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

import { BarChart } from 'react-native-svg-charts'

import { LineChart, ProgressCircle } from 'react-native-svg-charts'


// AsyncStorage
import AsyncStorage from '@react-native-community/async-storage';


const Resultados = ({ navigation }) => {

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

            <View style={styles.menu}>
                <TouchableOpacity onPress={() => navigation.navigate('Ambiente')}>{voltar}</TouchableOpacity>
            </View>

            <View style={styles.main}>


                <View style={styles.btnArea}>
                    <TouchableOpacity style={styles.btn}>Sem 1</TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>Sem 2</TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>Sem 3</TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>Sem 4</TouchableOpacity>
                </View>

                <View style={styles.block1}>
                    <PieChart style={{ height: 200 }} data={pieData} />
                </View>

                <View style={styles.block1}>
                    <AreaChart

                        style={{ height: 200 }}
                        data={data}
                        contentInset={{ top: 30, bottom: 30 }}
                        curve={shape.curveNatural}
                        svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                    >
                        <Grid />
                    </AreaChart>

                </View>


                <View style={styles.block1}>
                    <BarChart style={{ height: 200 }} data={data} svg={{ fill: 'rgba(034, 65, 244, 0.8)' }} contentInset={{ top: 30, bottom: 30 }}>
                        <Grid />
                    </BarChart>
                </View>


                <View style={styles.block1}>


                    <LineChart
                        style={{ height: 200 }}
                        data={data}
                        svg={{ stroke: 'rgb(134, 65, 244)' }}
                        contentInset={{ top: 20, bottom: 20 }}
                    >
                        <Grid />
                    </LineChart>
                </View>


                <View style={styles.block1}>

                     <ProgressCircle style={{ height: 200 }} progress={0.7} progressColor={'rgb(134, 65, 244)'} />
                
                </View>

                <View style={styles.footer}>
                </View>
            </View>

        </View>


    );
}

export default Resultados;

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
        backgroundImage: 'linear-gradient(#fff, #000)',
        height: '8%',
        flexDirection: 'row'

    }

})