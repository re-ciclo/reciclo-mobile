// Libraries

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
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





const AReciclo = ({ navigation }) => {

    // Imagens
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

    function changeImage1() {
        setImg3("none");
        setImg4("block");
    }

    function backImage1() {
        setImg3("block");
        setImg4("none");
    }
    


    return (
        <View style={styles.container}>

            <View style={styles.menu}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>{menu}</TouchableOpacity>
            </View>

            <View style={styles.main}>

                <View style={styles.block1}>
                    <View style={styles.card1}>

                        <TouchableOpacity onPress={() => changeImage()}>
                            <ImageBackground source={require('../../../assets/green.jpg')} style={styles.bgi}
                                imageStyle={{ borderRadius: 5 }}
                                style={{ display: img }}>

                                <View style={styles.boxtxt} >
                                    <Text style={styles.txt}> Nossa <br /> História </Text>
                                </View>

                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => backImage()}>
                            <ImageBackground source={require('../../../assets/bgwhite2.jpg')} style={styles.bgi}
                                imageStyle={{ borderRadius: 5 }}
                                style={{ display: img2 }}>

                                <View>
                                    <Text style={styles.txt2}>
                                        A Re-ciclo surgiu em 2020 como projeto acadêmico da instituição
                                        Recode Pro e idealizado pela Squad 07
                                    </Text>
                                </View>

                            </ImageBackground>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.card2}>

                        <TouchableOpacity onPress={() => changeImage1()}>
                            <ImageBackground source={require('../../../assets/green.jpg')} style={styles.bgi}
                                imageStyle={{ borderRadius: 5 }}
                                style={{ display: img3 }} >

                                <View style={styles.boxtxt} >
                                    <Text style={styles.txt} > Nossa <br /> Missão</Text>
                                </View>

                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => backImage1()}>
                            <ImageBackground source={require('../../../assets/bgwhite2.jpg')} style={styles.bgi}
                                imageStyle={{ borderRadius: 5 }}
                                style={{ display: img4 }}>

                                <View>
                                    <Text style={styles.txt2}> Mostrar as pessoa que conviver em harmonia com o meio ambiente
                                    traz benefícios diretos a todos
                                    </Text>
                                </View>

                            </ImageBackground>
                        </TouchableOpacity>

                    </View>

                </View>

                <View style={styles.block2}>

                    <View style={styles.card1}>
                        <TouchableOpacity onPress={() => changeImage()}>
                            <ImageBackground source={require('../../../assets/green.jpg')} style={styles.bgi}
                                imageStyle={{ borderRadius: 5 }}
                                style={{ display: img }}>

                                <View style={styles.boxtxt} >
                                    <Text style={styles.txt}> Nossos <br /> Valores</Text>
                                </View>

                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => backImage()}>
                            <ImageBackground source={require('../../../assets/bgwhite2.jpg')} style={styles.bgi}
                                imageStyle={{ borderRadius: 5 }}
                                style={{ display: img2 }}>

                                <View>
                                    <Text style={styles.txt2}> Acreditamos que a sociedade pode coexistir e progredir sem que seja
                                    necessário destruir o meio ambiente
                                    </Text>
                                </View>

                            </ImageBackground>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.card2}>
                        <TouchableOpacity onPress={() => changeImage()}>
                            <ImageBackground source={require('../../../assets/green.jpg')} style={styles.bgi}
                                imageStyle={{ borderRadius: 5 }}
                                style={{ display: img }}>

                                <View style={styles.boxtxt} >
                                    <Text style={styles.txt}> Nossa <br /> Visão</Text>
                                </View>

                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => backImage()}>
                            <ImageBackground source={require('../../../assets/bgwhite2.jpg')} style={styles.bgi}
                                imageStyle={{ borderRadius: 5 }}
                                style={{ display: img2 }}>

                                <View  >
                                    <Text style={styles.txt2}>Onde muitos veem lixo nós enxergamos uma oportunidade de melhorar
                                    a qualidade de vida da comunidade
                                    </Text>
                                </View>

                            </ImageBackground>
                        </TouchableOpacity>

                    </View>

                </View>

                <View style={styles.block3}>

                    <View style={styles.card1}>

                        <TouchableOpacity onPress={() => changeImage()}>
                            <ImageBackground source={require('../../../assets/green.jpg')} style={styles.bgi}
                                imageStyle={{ borderRadius: 5 }}
                                style={{ display: img }}>

                                <View style={styles.boxtxt} >
                                    <Text style={styles.txt}> Nosso <br /> Objetivo</Text>
                                </View>

                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => backImage()}>
                            <ImageBackground source={require('../../../assets/bgwhite2.jpg')} style={styles.bgi}
                                imageStyle={{ borderRadius: 5 }}
                                style={{ display: img2 }}>

                                <View >
                                    <Text style={styles.txt2}> Converter materias que podem ser reciclados 
                                    em benefícios a moradores da comunidade
                                </Text>
                                </View>

                            </ImageBackground>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.card2}>

                        <TouchableOpacity onPress={() => changeImage()}>
                            <ImageBackground source={require('../../../assets/green.jpg')} style={styles.bgi}
                                imageStyle={{ borderRadius: 5 }}
                                style={{ display: img }}>

                                <View style={styles.boxtxt} >
                                    <Text style={styles.txt}> Como <br /> Faremos</Text>
                                </View>

                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => backImage()}>
                            <ImageBackground source={require('../../../assets/bgwhite2.jpg')} style={styles.bgi}
                                imageStyle={{ borderRadius: 5 }}
                                style={{ display: img2 }}>

                                <View >
                                    <Text style={styles.txt2}>
                                        Com sua ajuda! <br/>
                                        Seja a mudança que você quer ver no mundo!<br/>
                                        Mahatma Gandhi
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

export default AReciclo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        flexDirection: 'column'
    },

    menu: {
        backgroundColor: '#00B9A3',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        height: 40,
    },

    h1: {
        fontSize: 32
    },

    main: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 580
    },

    block1: {
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '30%',
        backgroundColor: '#F8F9FA',
        flexDirection: 'row'
    },

    card1: {
        // backgroundColor:'#000',
        width: '40%',
        height: '68%',
        borderRadius: 5,
        borderRadius: 5,
        shadowOpacity: 0.6,
        shadowRadius: 6.68,
        elevation: 10,
    },
    card2: {
        // backgroundColor: '#000',
        width: '40%',
        height: '68%',
        borderRadius: 5,
        borderRadius: 5,
        shadowOpacity: 0.6,
        shadowRadius: 6.68,
        elevation: 10,
    },

    block2: {
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '30%',
        backgroundColor: '#F8F9FA',
        flexDirection: 'row'
    },

    block3: {
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '30%',
        backgroundColor: '#F8F9FA',
        flexDirection: 'row'
    },

    txt: {
        // fontFamily: 'zilla slab',
        fontSize: 32,
        justifyContent: "center",
        alignItems: 'center',
        color: '#fff'
    },

    txt2: {
        fontSize: 14,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#00B9A3',
        height: 118,
        marginLeft: 3,
        marginRight:3,
        display: 'flex',
    },

    boxtxt: {
        justifyContent: "center",
        alignItems: 'center',
        height: 118
    },

    boxtxt2: {
        justifyContent: "center",
        alignItems: 'center'
        
    },

    bgi: {
        width: 1,
        height: 150,
        borderRadius: 6,
    },


})