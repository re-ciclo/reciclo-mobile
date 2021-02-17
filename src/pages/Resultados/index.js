// Libraries

import React from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    StatusBar
} from 'react-native';

import { Text } from 'react-native-svg';


// Icones 

import FA from 'react-native-vector-icons/FontAwesome';
import IO from 'react-native-vector-icons/Ionicons';


const voltar = <IO name="arrow-undo" size={25} color="#fff" />;


// Graphics
import {
    PieChart,
    AreaChart,
    StackedAreaChart,
    YAxis,
    XAxis,
    Grid,
    BarChart,
    LineChart,
    ProgressCircle
}
    from 'react-native-svg-charts';


import * as shape from 'd3-shape';
import * as scale from 'd3-scale';



// AsyncStorage
// import AsyncStorage from '@react-native-community/async-storage';


const Resultados = ({ navigation }) => {


    const [falta, setFalta] = React.useState(1600);
    const [arrecadado, setArrecadado] = React.useState(400);
    const [porcento, setPorcento] = React.useState(0.2);

    // Pie
    const [data, setData] = React.useState([
        {
            key: 1,
            amount: 20,
            svg: { fill: '#A9A9A9' },
        },
        {
            key: 2,
            amount: 23,
            svg: { fill: '#4682B4' }
        },
        {
            key: 3,
            amount: 17,
            svg: { fill: '#E9967A' }
        },
        {
            key: 4,
            amount: 30,
            svg: { fill: '#B0E0E6' }
        },
        {
            key: 5,
            amount: 10,
            svg: { fill: '#2F4F4F' }
        }
    ]);


    const Labels = ({ slices, height, width }) => {
        return slices.map((slice, index) => {
            const { labelCentroid, pieCentroid, data } = slice;
            return (
                <Text
                    key={index}
                    x={pieCentroid[0]}
                    y={pieCentroid[1]}
                    fill={'white'}
                    textAnchor={'middle'}
                    alignmentBaseline={'middle'}
                    fontSize={24}
                    stroke={'black'}
                    strokeWidth={0.2}
                >
                    {data.amount}
                </Text>
            )
        })
    }




    // Line
    const [data2, setData2] = React.useState([
        {
            month: new Date(2015, 0, 1),
            aluminio: 100,
            papel: 115,
            plastico: 85,
            pet: 150,
            vidro: 50
        }

    ])


    const colors = ['rgba(169, 169, 169, 0.7)', 'rgba(70, 130, 180, 0.7)', 'rgba(233, 150, 122, 0.7)', 'rgba(176, 224, 230, 0.7)', 'rgba(47, 79, 79, 0.7)']
    const keys = ['aluminio', 'papel', 'plastico', 'pet', 'vidro']







    // New Bar

    const [data3, setData3] = React.useState([450]);

    const axesSvg = { fontSize: 15, fill: 'grey' };
    const verticalContentInset = { top: 10, bottom: 10 }
    const xAxisHeight = 0
    7






    const dataOthers = [30, 10, 25, 18, 17];


    function semana1() {
        // Pie
        setData([
            {
                key: 1,
                amount: 20,
                svg: { fill: '#A9A9A9' },
            },
            {
                key: 2,
                amount: 23,
                svg: { fill: '#4682B4' }
            },
            {
                key: 3,
                amount: 17,
                svg: { fill: '#E9967A' }
            },
            {
                key: 4,
                amount: 30,
                svg: { fill: '#B0E0E6' }
            },
            {
                key: 5,
                amount: 10,
                svg: { fill: '#2F4F4F' }
            }
        ]);


        // Line

        setData2([
            {
                month: new Date(2015, 0, 1),
                aluminio: 100,
                papel: 115,
                plastico: 85,
                pet: 150,
                vidro: 50
            }
        ])


        setData3([440]);


        setArrecadado(400);
        setFalta(2000-400);
        setPorcento(0.2);



    }





    function semana2() {
        // Pie

        setData([
            {
                key: 1,
                amount: 18,
                svg: { fill: '#A9A9A9' },
            },
            {
                key: 2,
                amount: 13,
                svg: { fill: '#4682B4' }
            },
            {
                key: 3,
                amount: 27,
                svg: { fill: '#E9967A' }
            },
            {
                key: 4,
                amount: 30,
                svg: { fill: '#B0E0E6' }
            },
            {
                key: 5,
                amount: 12,
                svg: { fill: '#2F4F4F' }
            }
        ]);



        setData2([
            {
                month: new Date(2015, 0, 1),
                aluminio: 100,
                papel: 115,
                plastico: 85,
                pet: 150,
                vidro: 50
            },
            {
                month: new Date(2015, 1, 1),
                aluminio: 90,
                papel: 65,
                plastico: 135,
                pet: 150,
                vidro: 60
            },
        ])


        setData3([440, 441]);


        setArrecadado(800);
        setFalta(2000-800);
        setPorcento(0.4);
    }


    function semana3() {
        // Pie

        setData([
            {
                key: 1,
                amount: 22,
                svg: { fill: '#A9A9A9' },
            },
            {
                key: 2,
                amount: 15,
                svg: { fill: '#4682B4' }
            },
            {
                key: 3,
                amount: 25,
                svg: { fill: '#E9967A' }
            },
            {
                key: 4,
                amount: 35,
                svg: { fill: '#B0E0E6' }
            },
            {
                key: 5,
                amount: 3,
                svg: { fill: '#2F4F4F' }
            }
        ]);

        setData2([
            {
                month: new Date(2015, 0, 1),
                aluminio: 100,
                papel: 115,
                plastico: 85,
                pet: 150,
                vidro: 50
            },
            {
                month: new Date(2015, 1, 1),
                aluminio: 90,
                papel: 65,
                plastico: 135,
                pet: 150,
                vidro: 60
            },
            {
                month: new Date(2015, 2, 1),
                aluminio: 110,
                papel: 75,
                plastico:125,
                pet: 175,
                vidro: 15
            },

        ])


        setData3([440, 440, 455]);


        setArrecadado(1400);
        setFalta(2000-1400);
        setPorcento(0.7);


    }


    function semana4() {
        // Pie

        setData([
            {
                key: 1,
                amount: 14,
                svg: { fill: '#A9A9A9' },
            },
            {
                key: 2,
                amount: 10,
                svg: { fill: '#4682B4' }
            },
            {
                key: 3,
                amount: 26,
                svg: { fill: '#E9967A' }
            },
            {
                key: 4,
                amount: 25,
                svg: { fill: '#B0E0E6' }
            },
            {
                key: 5,
                amount: 25,
                svg: { fill: '#2F4F4F' }
            }
        ]);

        setData2([
            {
                month: new Date(2015, 0, 1),
                aluminio: 100,
                papel: 115,
                plastico: 85,
                pet: 150,
                vidro: 50
            },
            {
                month: new Date(2015, 1, 1),
                aluminio: 90,
                papel: 65,
                plastico: 135,
                pet: 150,
                vidro: 60
            },
            {
                month: new Date(2015, 2, 1),
                aluminio: 110,
                papel: 75,
                plastico:125,
                pet: 175,
                vidro: 15
            },
            {
                month: new Date(2015, 3, 1),
                aluminio: 70,
                papel: 50,
                plastico: 130,
                pet: 125,
                vidro: 125
            },

        ]);


        setData3([440, 441, 455, 450]);


        setArrecadado(2000);
        setFalta(2000-2000);
        setPorcento(1);



    }




    return (
        <View style={styles.container}>

            {/* <View style={styles.menu}>
                <TouchableOpacity onPress={() => navigation.navigate('Ambiente')}>{voltar}</TouchableOpacity>
            </View> */}
            
            <View style={styles.areaMenu}>
                 
                <View style={styles.areaTituloMenu}>
                        
                        <Text style={styles.textoMenu}>Resutados</Text>
                </View>
                <View style={styles.iconMenu}>
                     <TouchableOpacity onPress={() => navigation.navigate('Ambiente')}>{voltar}</TouchableOpacity>
                </View>
            </View>

            <View style={styles.main}>


                <View style={styles.btnArea}>
                    <TouchableOpacity style={styles.btn} onPress={semana1}><Text style={styles.texto2}>Sem 1</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={semana2}><Text style={styles.texto2}>Sem 2</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={semana3}><Text style={styles.texto2}>Sem 3</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={semana4}><Text style={styles.texto2}>Sem 4</Text></TouchableOpacity>
                </View>

                <View style={styles.block1}>
                    <View style={styles.areaTitulo}>
                        <Text style={styles.h2}>Produção de Quilo de Material (%)</Text>
                    </View>
                    <PieChart
                        style={{ height: 200 }}
                        valueAccessor={({ item }) => item.amount}
                        data={data}
                        spacing={0}
                        outerRadius={'95%'}
                    >
                        <Labels />
                    </PieChart>
                    <View style={styles.areaBox}>
                        <View style={styles.box1}><Text style={styles.textoBox}>Alumínio</Text></View>
                        <View style={styles.box2}><Text style={styles.textoBox}>Papel</Text></View>
                        <View style={styles.box3}><Text style={styles.textoBox}>Plástico</Text></View>
                        <View style={styles.box4}><Text style={styles.textoBox}>Pet</Text></View>
                        <View style={styles.box5}><Text style={styles.textoBox}>Vidro</Text></View>

                    </View>
                </View>

                <View style={styles.block1}>

                    <View style={styles.areaTitulo}>
                        <Text style={styles.h2}>Material durante as semanas (kg) </Text>
                    </View>



                    <View style={{ flexDirection: 'row', height: 220 }}>
                        <StackedAreaChart
                            style={{ flex: 1 }}
                            contentInset={{ top: 12, bottom: 10 }}
                            data={data2}
                            keys={keys}
                            colors={colors}
                            curve={shape.curveNatural}
                        >
                            <Grid />
                        </StackedAreaChart>
                        <YAxis
                            style={{ position: 'absolute', top: 0, bottom: 0 }}
                            data={StackedAreaChart.extractDataPoints(data2, keys)}
                            contentInset={{ top: 14, bottom: 10 }}
                            svg={{
                                fontSize: 18,
                                fill: 'black',
                                stroke: 'black',
                                strokeWidth: 0.1,
                                alignmentBaseline: 'baseline',
                                baselineShift: '3',
                            }}
                        />

                    </View>




                </View>


                <View style={styles.block1}>
                    <View style={styles.areaTitulo}>
                        <Text style={styles.h2}>Quilo de Material por Semana</Text>
                    </View>

                    <View style={{ height: 200, padding: 18, flexDirection: 'row' }}>
                        <YAxis
                            data={data3}
                            style={{ marginBottom: xAxisHeight }}
                            contentInset={verticalContentInset}
                            svg={axesSvg}
                        />
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <BarChart
                                style={{ flex: 1 }}
                                data={data3}
                                contentInset={verticalContentInset}
                                svg={{ fill: 'rgba(60, 179, 113, 0.7)' }}
                            >
                                <Grid />
                            </BarChart>
                            <XAxis
                                style={{ marginHorizontal: -10, height: xAxisHeight }}
                                data={['a', 'b', 'c', 'd']}
                                formatLabel={(value, index) => `Sem ${index + 1}`}
                                contentInset={{ left: 20, right: 20 }}
                                svg={{ top: 10, fontSize: 15, fill: 'grey' }}
                            />
                        </View>
                    </View>

                </View>


                {/* <View style={styles.block1}>







                </View> */}


                <View style={styles.block1}>
                    <View style={styles.areaTitulo}>
                        <Text style={styles.h2}>Pintura dos Apartamentos</Text>
                        <Text style={styles.h2}>Meta:2.000</Text>
                    </View>

                    <ProgressCircle style={{ height: 200 }} progress={porcento} progressColor={'rgb(134, 65, 244)'} />

                    <View style={styles.areaTitulo}>
                        <Text style={styles.h2}>Arrecadado:{arrecadado}</Text>
                        <Text style={styles.h2}>Falta:{falta}</Text>
                    </View>
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
    areaMenu:{
        flexDirection:'row',
        paddingRight: 5,
        backgroundColor: '#00B9A3',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 40
    },
    areaTituloMenu: {
        width:'53%',
        justifyContent:'center',
        marginEnd: 2,
    },
    areaIconMenu:{
        width:'10%'
    },
    h1: {
        fontSize: 32
    },
    h2: {
        fontSize: 20,
        fontFamily: 'Arial'
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


    }, btn: {
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
        height: '40%'
    },
    areaTitulo: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20
    },
    textoMenu:{
        color: '#fff',
        fontSize: 20,
        fontFamily:'Arial'
    },
    texto1: {
        color: '#000',
        fontSize: 20,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'

    },
    texto2: {
        fontFamily: 'Arial',
        fontSize: 16,
        color: '#fff'
    },
    areaBox: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingLeft: 10,
        paddingTop: 10,
        height: 120,
        width: '90%',


    },
    box1: {
        paddingLeft: 10,
        height: 20,
        width: 20,
        backgroundColor: '#A9A9A9',
        borderRadius: 5,

    },
    box2: {
        paddingLeft: 10,
        height: 20,
        width: 20,
        backgroundColor: '#4682B4',
        borderRadius: 5
    },
    box3: {
        paddingLeft: 10,
        height: 20,
        width: 20,
        backgroundColor: '#E9967A',
        borderRadius: 5
    },
    box4: {
        paddingLeft: 10,
        height: 20,
        width: 20,
        backgroundColor: '#B0E0E6',
        borderRadius: 5
    },
    box5: {
        paddingLeft: 10,
        height: 20,
        width: 20,
        backgroundColor: '#2F4F4F',
        borderRadius: 5
    },
    textoBox: {
        fontFamily: 'Arial',
        marginLeft: 12,
        marginTop: 2
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