// Libraries

import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';


// Icones 

import FA from 'react-native-vector-icons/FontAwesome';
import IO from 'react-native-vector-icons/Ionicons';


const menu = <IO name="menu" size={30} color="#fff" />;

const home = <IO name="home" size={30} color="#fff" />;
const rocket = <FA name="rocket" size={30} color="#fff" />;
const book = <IO name="ios-book" size={30} color="#fff" />;
const person = <IO name="person" size={30} color="#fff" />;

const Contatos = ({ navigation }) => {

    const [nome, setNome] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [telefone, setTelefone] = React.useState("");
    const [assunto, setAssunto] = React.useState("");
    const [mensagem, setMensagem] = React.useState("");


    const [assuntos, setAssuntos] = useState(['', 'Quero fazer parte do projeto', 'Sugestão', 'Elogio', 'Reclamação'])
    const [assuntoSelecionado, setAssuntoSelecionado] = useState([])

    function enviar() {
        alert('.')
    }

    return (
        <View style={styles.container}>

            <View style={styles.areaMenu}>

                <View style={styles.areaTituloMenu}>

                    <Text style={styles.textoMenu}>Contatos</Text>
                </View>
                <View style={styles.iconMenu}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>{menu}</TouchableOpacity>
                </View>
            </View>

            <View style={styles.main}>


                <View style={styles.block1}>
                    <Text style={styles.h1}>Contatos</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Digite o seu nome..."
                        value={nome}
                        onChange={(event) => { setNome(event.target.value) }}

                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Digite o seu email..."
                        value={email}
                        onChange={(event) => { setEmail(event.target.value) }}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Digite o seu telefone..."
                        value={telefone}
                        onChange={(event) => { setTelefone(event.target.value) }}
                    />

                    <View style={styles.select}>

                        <View style={styles.textSelect}>
                            <Text>Escolha um dos assuntos abaixo:</Text>
                        </View>

                        <Picker
                            style={styles.pickerSelect}
                            selectedValue={assuntoSelecionado}
                            onValueChange={(itemValue) =>
                                setAssuntoSelecionado(itemValue)
                            }>
                            {
                                assuntos.map(as => {
                                    return <Picker.Item label={as} value={as} />
                                })
                            }
                        </Picker>

                        <View>
                            <Text style={styles.textSelect}>O assunto selecionado foi: {assuntoSelecionado}</Text>
                        </View>

                    </View>

                    {/* <TextInput
                        style={styles.input}
                        placeholder="Digite o assunto..."
                        value={assunto}
                        onChange={(event) => { setAssunto(event.target.value) }}
                    /> */}

                    <TextInput
                        style={styles.textarea}
                        multiline={true}
                        numberOfLines={4}

                        placeholder="Digite a mensagem..."
                        value={mensagem}
                        onChange={(event) => { setMensagem(event.target.value) }}
                    />

                    <TouchableOpacity
                        style={styles.btn}
                        title="Enviar"
                        onPress={enviar}
                    >

                        <Text style={styles.texto}>Enviar</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
}

export default Contatos;

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
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: 580
    },

    block1: {

        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: '#c3c3c3',

    },
    input: {
        marginTop: 12,
        justifyContent: 'center',
        alignItems: 'center',
        height: '7%',
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingLeft: 5
    },
    textarea: {
        marginTop: 12,
        justifyContent: 'center',
        alignItems: 'center',
        height: '21%',
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingLeft: 5
    },
    btn: {
        marginTop: 12,
        width: '50%',
        height: '7%',
        borderRadius: 5,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#00B9A3'

    },
    texto: {
        color: '#fff',
        fontSize: 20
    },

    select: {
        alignItems: "center",
        marginTop: 12
    },
    pickerSelect: {
        marginTop: 15,
        shadowRadius: 2,
    },
    textSelect: {
        marginTop: 12
    }

})