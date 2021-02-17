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
const editar = <IO name="build-outline" size={25} color="#fff" />;
const excluir = <IO name="trash-outline" size={25} color="#fff" />;


const calendario = <IO name="calendar-outline" size={100} color="#fff" />;
const beneficio = <IO name="gift-outline" size={100} color="#fff" />;


// AsyncStorage
import AsyncStorage from '@react-native-community/async-storage';


const Dados = ({ navigation }) => {


    const [img, setImg] = React.useState("block");
    const [img2, setImg2] = React.useState("none");

    const [img3, setImg3] = React.useState("block");
    const [img4, setImg4] = React.useState("none");




    function changeImage() {
        setImg("none");
        setImg2("block");
    }

    function backImage() {
        setImg("block");
        setImg2("none");
    }


    function changeImage2() {
        setImg3("none");
        setImg4("block");
    }

    function backImage2() {
        setImg3("block");
        setImg4("none");
    }


    return (
        <View style={styles.container}>

            <View style={styles.areaMenu}>

                <View style={styles.areaTituloMenu}>

                    <Text style={styles.texto1}>Eventos</Text>
                </View>
                <View style={styles.iconMenu}>
                    <TouchableOpacity onPress={() => navigation.navigate('Ambiente')}>{voltar}</TouchableOpacity>
                </View>
            </View>

            <View style={styles.main}>

                <View style={styles.block2}>
                    <Text style={styles.texto3}>Dias de Coletas dos Materias{editar}</Text>
                </View>

                <View style={styles.block1}>



                    <View style={styles.card1}>

                        <TouchableOpacity onPress={() => changeImage()}>
                            <ImageBackground source={require('../../../assets/green.jpg')} style={styles.bgi}
                                imageStyle={{ borderRadius: 5 }}
                                style={{ display: img }}>

                                <View style={styles.boxtxt} >
                                    <Text style={styles.txt}> {calendario} </Text>
                                </View>

                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => backImage()}>
                            <ImageBackground source={require('../../../assets/bgwhite2.jpg')} style={styles.bgi}
                                imageStyle={{ borderRadius: 5 }}
                                style={{ display: img2 }}>

                                <View>
                                    <Text style={styles.texto2}>
                                        • 28/02/2021 às 8h 00 <br/>
                                        • 07/03/2021 às 8h 00 <br/>
                                        • 14/03/2021 às 8h 00 <br/>
                                        • 21/03/2021 às 8h 00 <br/>
                                    </Text>
                                </View>

                            </ImageBackground>
                        </TouchableOpacity>

                    </View>



                </View>



                <View style={styles.block2}>
                    <Text style={styles.texto3}>Períodos de Benefícios{editar}</Text>

                </View>


                <View style={styles.block1}>


                    <View style={styles.card1}>

                        <TouchableOpacity onPress={() => changeImage2()}>
                            <ImageBackground source={require('../../../assets/green.jpg')} style={styles.bgi}
                                imageStyle={{ borderRadius: 5 }}
                                style={{ display: img3 }}>

                                <View style={styles.boxtxt} >
                                    <Text style={styles.txt}> {beneficio} </Text>
                                </View>

                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => backImage2()}>
                            <ImageBackground source={require('../../../assets/bgwhite2.jpg')} style={styles.bgi}
                                imageStyle={{ borderRadius: 5 }}
                                style={{ display: img4 }}>

                                <View>
                                    <Text style={styles.texto2}>
                                        • 28/08/2021 Pintura Geral <br/>
                                        • 07/12/2021 Cestas Básicas <br/>
                                        • 14/01/2022 Materias de Construção <br/>
                                        • 21/03/2022 Aniversário do Projeto <br/>
                                </Text>
                                </View>

                            </ImageBackground>
                        </TouchableOpacity>

                    </View>

                </View>

            </View>
        </View>
    );
}

export default Dados;

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
        width: '53%',
        justifyContent: 'center',
        marginEnd: 2
    },
    areaIconMenu: {
        width: '10%'
    },
    h1: {
        fontSize: 32
    },
    main: {
        marginTop: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 550,

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

    texto1: {
        color: '#fff',
        fontSize: 20
    },
    texto2: {
        fontSize: 16,
        color: '#00B9A3'
    },
    texto3: {
        fontSize: 20,
        color: '#000',
        paddingLeft: 15
    },
    footer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        // backgroundImage: 'linear-gradient(#fff, #000)',
        height: 120,
        flexDirection: 'row'

    },
    block1: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        width: '90%',
        height: '35%',
        borderRadius: 5,
        shadowOpacity: 1,
        shadowRadius: 6.68,
        elevation: 11
    },
    block2: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: '6%',
        borderRadius: 5,
        shadowOpacity: 1,
        shadowRadius: 6.68,
        elevation: 11
    },
    btn: {
        width: "45%",
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: '#00B9A3'
    },
    btn2: {
        width: '45%',
        height: 30,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: '#B9A300'

    },
    card1: {
        marginRight:10,
        width: "90%",
        height: "90%",
        borderRadius: 5,
        borderRadius: 5,
        shadowOpacity: 0.6,
        shadowRadius: 6.68,
        elevation: 10,
        justifyContent:'center',
        alignItems:'center' 
    },
    bgi: {
        width: 1,
        height: 150,
        borderRadius: 6        
        // transition: 1,

    },
    boxtxt: {
        justifyContent: "center",
        alignItems: 'center',
        height: 175,
        width: 282
    }

})