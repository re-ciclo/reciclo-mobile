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

    const [img5, setImg5] = React.useState("block");
    const [img6, setImg6] = React.useState("none");

    const [img7, setImg7] = React.useState("block");
    const [img8, setImg8] = React.useState("none");

    const [img9, setImg9] = React.useState("block");
    const [img10, setImg10] = React.useState("none");

    const [img11, setImg11] = React.useState("block");
    const [img12, setImg12] = React.useState("none");

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

    function changeImage2() {
        setImg5("none");
        setImg6("block");
    }

    function backImage2() {
        setImg5("block");
        setImg6("none");
    }

    function changeImage3() {
        setImg7("none");
        setImg8("block");
    }

    function backImage3() {
        setImg7("block");
        setImg8("none");
    }

    function changeImage4() {
        setImg9("none");
        setImg10("block");
    }

    function backImage4() {
        setImg9("block");
        setImg10("none");
    }

    function changeImage5() {
        setImg11("none");
        setImg12("block");
    }

    function backImage5() {
        setImg11("block");
        setImg12("none");
    }



    return (
        <View style={styles.container}>

            <View style={styles.areaMenu}>

                <View style={styles.areaTituloMenu}>

                    <Text style={styles.textoMenu}>A Reciclo</Text>
                </View>
                <View style={styles.iconMenu}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>{menu}</TouchableOpacity>
                </View>
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
                        <TouchableOpacity onPress={() => changeImage2()}>
                            <ImageBackground source={require('../../../assets/green.jpg')} style={styles.bgi}
                                imageStyle={{ borderRadius: 5 }}
                                style={{ display: img5 }}>

                                <View style={styles.boxtxt} >
                                    <Text style={styles.txt}> Nossos <br /> Valores</Text>
                                </View>

                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => backImage2()}>
                            <ImageBackground source={require('../../../assets/bgwhite2.jpg')} style={styles.bgi}
                                imageStyle={{ borderRadius: 5 }}
                                style={{ display: img6 }}>

                                <View>
                                    <Text style={styles.txt2}> Acreditamos que a sociedade pode coexistir e progredir sem que seja
                                    necessário destruir o meio ambiente
                                    </Text>
                                </View>

                            </ImageBackground>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.card2}>
                        <TouchableOpacity onPress={() => changeImage3()}>
                            <ImageBackground source={require('../../../assets/green.jpg')} style={styles.bgi}
                                imageStyle={{ borderRadius: 5 }}
                                style={{ display: img7 }}>

                                <View style={styles.boxtxt} >
                                    <Text style={styles.txt}> Nossa <br /> Visão</Text>
                                </View>

                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => backImage3()}>
                            <ImageBackground source={require('../../../assets/bgwhite2.jpg')} style={styles.bgi}
                                imageStyle={{ borderRadius: 5 }}
                                style={{ display: img8 }}>

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

                        <TouchableOpacity onPress={() => changeImage4()}>
                            <ImageBackground source={require('../../../assets/green.jpg')} style={styles.bgi}
                                imageStyle={{ borderRadius: 5 }}
                                style={{ display: img9 }}>

                                <View style={styles.boxtxt} >
                                    <Text style={styles.txt}> Nosso <br /> Objetivo</Text>
                                </View>

                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => backImage4()}>
                            <ImageBackground source={require('../../../assets/bgwhite2.jpg')} style={styles.bgi}
                                imageStyle={{ borderRadius: 5 }}
                                style={{ display: img10 }}>

                                <View >
                                    <Text style={styles.txt2}> Converter materias que podem ser reciclados
                                    em benefícios a moradores da comunidade
                                </Text>
                                </View>

                            </ImageBackground>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.card2}>

                        <TouchableOpacity onPress={() => changeImage5()}>
                            <ImageBackground source={require('../../../assets/green.jpg')} style={styles.bgi}
                                imageStyle={{ borderRadius: 5 }}
                                style={{ display: img11 }}>

                                <View style={styles.boxtxt} >
                                    <Text style={styles.txt}> Como <br /> Faremos</Text>
                                </View>

                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => backImage5()}>
                            <ImageBackground source={require('../../../assets/bgwhite2.jpg')} style={styles.bgi}
                                imageStyle={{ borderRadius: 5 }}
                                style={{ display: img12 }}>

                                <View >
                                    <Text style={styles.txt2}>
                                        Com sua ajuda! <br />
                                        Seja a mudança que você quer ver no mundo!<br />
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
        marginRight: 3,
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
        borderRadius: 6
        // transition: 1,

    },


})