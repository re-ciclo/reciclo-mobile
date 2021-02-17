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


// AsyncStorage
import AsyncStorage from '@react-native-community/async-storage';


const Dados = ({ navigation }) => {

    const [verifica, setVerifica] = React.useState("");

    const [nome, setNome] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [telefone, setTelefone] = React.useState("");
    const [senha, setSenha] = React.useState("");

    const [cep, setCep] = React.useState("");
    const [bairro, setBairro] = React.useState("");
    const [logradouro, setLogradouro] = React.useState("");
    const [complemento, setComplemento] = React.useState("");
    const [numero, setNumero] = React.useState("");
    const [cidade, setCidade] = React.useState("");
    const [uf, setUf] = React.useState("");




    async function verificar(){
        
        const name = await AsyncStorage.getItem('nome');
        const email = await AsyncStorage.getItem('email');
        const telefone = await AsyncStorage.getItem('telefone');
        const senha = await AsyncStorage.getItem('senha');

        const cep = await AsyncStorage.getItem('cep');
        const bairro = await AsyncStorage.getItem('bairro');
        const logradouro = await AsyncStorage.getItem('logradouro');
        const complemento = await AsyncStorage.getItem('complemento');
        const numero = await AsyncStorage.getItem('numero');
        const cidade = await AsyncStorage.getItem('cidade');
        const uf = await AsyncStorage.getItem('uf');

        setVerifica(name);

        setNome(name);
        setEmail(email);
        setTelefone(telefone);
        setSenha(senha);

        setCep(cep);
        setBairro(bairro);
        setLogradouro(logradouro);
        setComplemento(complemento);
        setNumero(numero);
        setCidade(cidade);
        setUf(uf);

        
        
        
    }


    return (
        <View style={styles.container} onLoad={verificar()}>

            <View style={styles.areaMenu}>
                 
                <View style={styles.areaTituloMenu}>
                        
                        <Text style={styles.texto1}>Dados</Text>
                </View>
                <View style={styles.iconMenu}>
                     <TouchableOpacity onPress={() => navigation.navigate('Ambiente')}>{voltar}</TouchableOpacity>
                </View>
            </View>

            <View style={styles.main}>
                    {/* <Text style={styles.h1}>Informativo</Text> */}

                    <View style={styles.block1}>
                        <Text style={styles.texto2}>Nome:<Text style={styles.texto3}> {nome}</Text></Text>
                        <Text style={styles.texto2}>E-mail:<Text style={styles.texto3}> {email}</Text></Text>
                        <Text style={styles.texto2}>Telefone:<Text style={styles.texto3}> {telefone}</Text></Text>
                        <Text style={styles.texto2}>Senha:<Text style={styles.texto3}> {senha}</Text></Text>
                    </View>
                    <View style={styles.block2}>
                        <TouchableOpacity style={styles.btn}><Text style={styles.texto1}>Atualizar{editar}</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn2}><Text style={styles.texto1}>Excluir{excluir}</Text></TouchableOpacity>
                    </View>
                    <View style={styles.block1}>
                        <Text style={styles.texto2}>CEP:<Text style={styles.texto3}> {cep}</Text></Text>
                        <Text style={styles.texto2}>Bairro:<Text style={styles.texto3}> {bairro}</Text></Text>
                        <Text style={styles.texto2}>Logradouro:<Text style={styles.texto3}> {logradouro}</Text></Text>
                        <Text style={styles.texto2}>Nº:<Text style={styles.texto3}> {numero}</Text></Text>
                        <Text style={styles.texto2}>Complemento:<Text style={styles.texto3}> {complemento}</Text></Text>
                        <Text style={styles.texto2}>Cidade:<Text style={styles.texto3}> {cidade}</Text></Text>
                        <Text style={styles.texto2}>UF:<Text style={styles.texto3}> {uf}</Text></Text>
                    </View>
                    <View style={styles.block2}>
                        <TouchableOpacity style={styles.btn}><Text style={styles.texto1}>Atualizar{editar}</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn2}><Text style={styles.texto1}>Excluir{excluir}</Text></TouchableOpacity>
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
    areaMenu:{
        flexDirection:'row',
        paddingRight: 5,
        backgroundColor: '#00B9A3',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 40
    },
    areaTituloMenu: {
        width:'45%',
        justifyContent:'center',
        marginEnd: 2
    },
    areaIconMenu:{
        width:'10%'
    },
    h1: {
        fontSize: 32
    },
    main: {
        marginTop:20,
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
        fontSize: 16,
        color: '#000'
    },
    footer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        // backgroundImage: 'linear-gradient(#fff, #000)',
        height: 120,
        flexDirection: 'row'

    },
     block1:{
        
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 10,
        width:'90%',
        height:'35%',
        borderRadius: 5,
        shadowOpacity: 1,
        shadowRadius: 6.68,
        elevation: 11
    },
    block2:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width:'90%',
        height:'6%',
        borderRadius: 5,
        shadowOpacity: 1,
        shadowRadius: 6.68,
        elevation: 11
    },  
     btn: {

        width: '45%',
        height:30,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: '#00B9A3'

    },
    btn2: {

        width: '45%',
        height:30,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: '#B9A300'

    }

})