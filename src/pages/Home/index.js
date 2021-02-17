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



const alerta = <IO name="alert-circle-outline" size={30} color="orange" />;
const menu = <IO name="menu" size={30} color="#fff" />;


const project = <FA name="users" size={30} color="#fff" />;
const informativo = <IO name="ios-book" size={30} color="#fff" />;
const leaf = <IO name="leaf" size={30} color="#fff" />;


const chat = <IO name="chatbox-ellipses" size={30} color="#fff" />;


// AsyncStorage
 import AsyncStorage from '@react-native-community/async-storage';


const Home = ({ navigation }) => {

    const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");
    const [teste, setTeste] = React.useState("");
    const [irregular, setIrregular] = React.useState(false);

    function acessar() {

        if(email.length > 3){
            const verifica = [...email];
        let i = 0;
        let palavra = "";
        console.log(verifica);
        while( verifica[i] !== '@'){
           palavra += verifica[i];
           i++;
        }

            
        

         navigation.navigate('Ambiente')

         AsyncStorage.setItem('nome', palavra);
         AsyncStorage.setItem('email', email);
         AsyncStorage.setItem('telefone', '(11) 3333-3333');
         AsyncStorage.setItem('senha', '•••••');
         AsyncStorage.setItem('cep', '05000-090');
         AsyncStorage.setItem('bairro', 'Maracanã');
         AsyncStorage.setItem('logradouro', 'Rua Vitória');
         AsyncStorage.setItem('numero', '10');
         AsyncStorage.setItem('complemento', 'Bloco 1');
         AsyncStorage.setItem('cidade', 'São Paulo');
         AsyncStorage.setItem('uf', 'SP');

        setEmail("");
        setSenha("");

        }else{
            setTimeout( () => setIrregular(false), 3000);
            setIrregular(true);
        }
        


    }


    return (
        <View style={styles.container}>

            {/* <View style={styles.menu}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>{menu}</TouchableOpacity>
            </View> */}

            <View style={styles.main}>


                <View style={styles.block1}>
                   

                        <ImageBackground
                         source={require('../../../assets/logo.png') }
                         style={styles.logo} 
                        >
                        </ImageBackground>

                    
                    { irregular && <Text style={styles.textoAlerta}>Verifique os campos {alerta}</Text>}
                    <TextInput
                        style={styles.input}
                        placeholder="Digite o seu email..."
                        value={email}
                        onChange={(event) => { setEmail(event.target.value) }}
                    />


                    <TextInput
                        style={styles.input}
                        placeholder="Digite a sua senha..."
                        secureTextEntry={true}
                        value={senha}
                        onChange={(event) => { setSenha(event.target.value) }}
                    />

                    <TouchableOpacity
                        style={styles.btn}
                        title="Acessar"
                        onPress={acessar}

                    >
                        <Text style={styles.texto1} onPress={acessar}>Entrar</Text>
                    </TouchableOpacity>
                        
                    <TouchableOpacity onPress={() => navigation.navigate('Cadastros')}>
                        <Text style={styles.texto2}>Cadastre-se</Text>
                    </TouchableOpacity>
                </View>

                {/* <Provider store={store}>

                </Provider> */}

            </View>

            <View style={styles.footer}>

                <View style={styles.box4}><TouchableOpacity onPress={() => navigation.navigate('Projetos')}>{project}</TouchableOpacity></View>
                <View style={styles.box1}><TouchableOpacity onPress={() => navigation.navigate('Informativo')}>{informativo}</TouchableOpacity></View>
                <View style={styles.box2}><TouchableOpacity onPress={() => navigation.navigate('AReciclo')}>{leaf}</TouchableOpacity></View>
                <View style={styles.box3}><TouchableOpacity onPress={() => navigation.navigate('Contatos')}>{chat}</TouchableOpacity></View>
            </View>

        </View>
    );
}

export default Home;

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
    texto2:{
        marginTop: 12,
        fontSize: 16,
        color:'#00B9A3'
    },
    footer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        // backgroundImage: 'linear-gradient(#fff, #000)',
        height: 120,
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
        elevation: 11
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
        elevation: 11,
    },
    textoAlerta:{
        color: 'orange',
        fontSize: 16
    }


})