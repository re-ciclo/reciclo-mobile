// Libraries

import React from 'react';
import {Card, Paragraph, Title } from 'react-native-paper';
import {StyleSheet,
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

const Informativo = ({navigation}) => {    

    return(
        <View style={styles.container}>

            <View style={styles.menu}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>{menu}</TouchableOpacity>
            </View>

            <View style={styles.main}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                <Text style={styles.h1}>Informativos</Text>                

                <Title style={styles.title}>Você sabe qual a cor de cada lixeira?</Title>
                          
                <View style={styles.content}>

                    <Card style={styles.center}>
                        <Card.Cover style={styles.image} 
                            source={{ uri: 'https://imgur.com/IypLPgx.png' }} />
                    </Card>

                    <Text style={styles.text}>
                        <Paragraph>Cada cor é referente ao tipo de material que está sendo descartado: </Paragraph>                           
                    </Text>
                    
                    <Paragraph style={styles.red}>Vermelho - Plástico:
                        <Text >
                            <Paragraph> frascos e garrafas PET, potes de alimentos, embalagens, sacos plásticos em geral, 
                            tubos e conexões, peças de brinquedos, engradados de bebidas, baldes... </Paragraph>                           
                        </Text>                        
                    </Paragraph>

                    <Paragraph style={styles.blue}>Azul - Papel:
                        <Text >
                            <Paragraph> aparas de papel, jornais, revistas, caixas, papelão, papel de fax, formulários de 
                            computador, folhas de caderno, cartolinas, cartões, rascunhos escritos, envelopes, fotocópias, 
                            folhetos, impressos em geral.</Paragraph>                           
                        </Text>                        
                    </Paragraph>

                    <Paragraph style={styles.green}>Verde - Vidro:
                        <Text >
                            <Paragraph> tampas, potes, frascos, garrafas de bebidas, copos, embalagens...</Paragraph>                           
                        </Text>                        
                    </Paragraph>

                    <Paragraph style={styles.brown}>Marrom - Orgânicos:
                        <Text >
                            <Paragraph> restos de alimentos (carne, vegetais, frutas, ossos), sacos de 
                            café e chá, cascas de ovos e sementes, folhas, caule, madeira...</Paragraph>                           
                        </Text>                        
                    </Paragraph>

                    <Paragraph style={styles.yellow}>Amarelo - Metal:
                        <Text >
                            <Paragraph> latas de alumínio (ex. latas de bebidas), latas de aço (ex. latas de óleo, 
                            sardinha, molho de tomate), tampas, ferragens, canos, esquadrias e molduras de quadros...</Paragraph>                           
                        </Text>                        
                    </Paragraph>
                </View>

                <Title style={styles.title}>Conheça mais os benefícios da reciclagem</Title>
                <View style={styles.content}>

                    <Card style={styles.center}>
                        <Card.Cover style={styles.image} 
                            source={{ uri: 'https://imgur.com/beYoGYZ.jpg' }} />
                    </Card>

                    <Text style={styles.text}>
                        <Paragraph>Reciclar embalagens usadas, ou outros materiais, traz diversas vantagens ambientais e econômicas: </Paragraph>                           
                    </Text>
                    
                    <Paragraph>Reduz a acumulação de resíduos;</Paragraph>

                    <Paragraph>Evita a produção de novos produtos;</Paragraph>

                    <Paragraph>Reduz o consumo de energia;</Paragraph>

                    <Paragraph>Evita agressões ao solo, ar e água;</Paragraph>

                    <Paragraph>Contribui para fonte de renda;</Paragraph>

                    <Paragraph>Proporciona melhor qualidade vida.</Paragraph>
                </View>
            </View>

            <View style={styles.footer}>

            <View style={styles.box4}><TouchableOpacity onPress={() => navigation.navigate('Projetos')}>{home}</TouchableOpacity></View>
                    <View style={styles.box1}><TouchableOpacity onPress={() => navigation.navigate('Informativo')}>{rocket}</TouchableOpacity></View>
                    <View style={styles.box2}><TouchableOpacity onPress={() => navigation.navigate('AReciclo')}>{book}</TouchableOpacity></View>
                    <View style={styles.box3}><TouchableOpacity onPress={() => navigation.navigate('Contatos')}>{person}</TouchableOpacity></View>
            </View>
        </View>
    );
}

export default Informativo;

const styles = StyleSheet.create({
       container:{
        flex:1,
        backgroundColor: '#fff',
        width:'100%',
        height:'100%',
        flexDirection:'column'
    },
    menu:{
        backgroundColor:'#00B9A3',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        height: '40px',
    },
    main:{
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 160,
    },
    center: {
        alignItems: 'center',
    },    
    h1:{
        marginTop: 10,
        fontSize:32
    },
    title: {
        marginTop: 30,
    }, 
    buttons: {
        flexDirection: 'row',
    },
    btn: {
        marginRight: 15,
        marginBottom: 10,
    },
    modal: {
        backgroundColor: '#FFF',
        width: 250,
        padding: 20,
    },
    text: {
        marginTop: 18,
        marginBottom: 10,
        flexDirection: 'column',        
    },
    red: {
        color: 'red',
        fontWeight: 'bold',
    },
    blue: {
        color: 'blue',
        fontWeight: 'bold',
    },
    green: {
        color: 'green',
        fontWeight: 'bold',
    },
    brown: {
        color: '#7E591B',
        fontWeight: 'bold',
    },
    yellow: {
        color: '#F5C302',
        fontWeight: 'bold',
    },
    content:{    
        padding: 15,
    },    
})