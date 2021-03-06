// Libraries

import React from 'react';
import {
    StyleSheet,
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





const Cadastros = ({ navigation }) => {

    const [nome, setNome] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [telefone, setTelefone] = React.useState("");
    const [senha, setSenha] = React.useState("");
    const [confirmarSenha, setConfirmarSenha] = React.useState("");


    const [cep, setCep] = React.useState("");
    const [logradouro, setLogradouro] = React.useState("");
    const [complemento, setComplemento] = React.useState("");
    const [bairro, setBairro] = React.useState("");
    const [cidade, setCidade] = React.useState("");
    const [uf, setUf] = React.useState("");
    const [numero, setNumero] = React.useState("");






    function enviar() {
        alert('.')
    }

    return (
        <View style={styles.container}>

            <View style={styles.areaMenu}>

                <View style={styles.areaTituloMenu}>

                    <Text style={styles.textoMenu}>Cadastros</Text>
                </View>
                <View style={styles.iconMenu}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>{menu}</TouchableOpacity>
                </View>
            </View>

            <View style={styles.main}>


                <View style={styles.block1}>
                    <Text style={styles.h1}>Cadastro</Text>

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

                    <TextInput
                        style={styles.input}
                        placeholder="Digite a senha..."
                        value={senha}
                        onChange={(event) => { setSenha(event.target.value) }}

                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Confirme a senha..."
                        value={confirmarSenha}
                        onChange={(event) => { setConfirmarSenha(event.target.value) }}

                    />
                </View>

                <View style={styles.block1}>
                    <TextInput
                        style={styles.input}
                        placeholder="00000-000"
                        value={cep}
                        onChange={(event) => { setCep(event.target.value) }}

                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Digite o bairro..."
                        value={bairro}
                        onChange={(event) => { setBairro(event.target.value) }}

                    />

                    <View style={styles.block2}>
                        <TextInput
                            style={{
                                marginTop: 12,
                               
                                padding: 9,
                                width: '60%',
                                backgroundColor: '#fff',
                                borderRadius: 5,
                               
                            }}
                            placeholder="Digite o logradouro..."
                            value={logradouro}
                            onChange={(event) => { setLogradouro(event.target.value) }}

                        />

                        <TextInput
                            style={{
                                marginTop: 12,
                                padding: 9,
                                marginLeft: 1,
                                width: '20%',
                                backgroundColor: '#fff',
                                borderRadius: 5,
                            }}
                            placeholder="Nº"
                            value={numero}
                            onChange={(event) => { setNumero(event.target.value) }}

                        />



                    </View>

                    <TextInput
                        style={styles.input}
                        placeholder="Digite o complemento..."
                        value={complemento}
                        onChange={(event) => { setComplemento(event.target.value) }}

                    />
                </View>



                <View style={styles.block2}>
                    <TextInput
                        style={{
                            marginTop: 12,
                            padding: 9,
                            width: '70%',
                            backgroundColor: '#fff',
                            borderRadius: 5,
                            
                        }}
                        placeholder="Digite a cidade..."
                        value={cidade}
                        onChange={(event) => { setCidade(event.target.value) }}
                    />

                    <TextInput
                        style={{
                            marginTop: 12,
                            padding: 9,
                            width: '10%',
                            marginLeft: 1,
                            backgroundColor: '#fff',
                            borderRadius: 5,
                           
                        }}
                        placeholder="UF"
                        value={uf}
                        onChange={(event) => { setUf(event.target.value) }}
                    />


                </View>

                <TouchableOpacity
                    style={styles.btn}
                    title="Enviar"
                    onPress={enviar}
                >
                    <Text style={styles.texto}>Enviar</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

export default Cadastros;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        flexDirection: 'column'
    },areaMenu:{
        flexDirection:'row',
        paddingRight: 5,
        backgroundColor: '#00B9A3',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 40
    },
areaTituloMenu: {
        width:'50%',
        justifyContent:'center',
        marginEnd: 2,
    },

textoMenu:{
        color: '#fff',
        fontSize: 20,
        fontFamily:'Arial'
    },
areaIconMenu:{
        width:'10%'
    },
    h1: {
        fontSize: 32
    },
    main: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: 600,
        backgroundColor: '#c3c3c3',
    },

    block1: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',

    },

    block2: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',


    },
    input: {
        marginTop: 12,
        padding: 9,
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 5,
    
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
})