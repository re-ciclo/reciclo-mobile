// Libraries

import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    StatusBar,
    Linking,
    Text
} from 'react-native';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';



// Icones 

import FA from 'react-native-vector-icons/FontAwesome';
import IO from 'react-native-vector-icons/Ionicons';


const voltar = <IO name="arrow-undo" size={25} color="#fff" />;

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

// AsyncStorage
import AsyncStorage from '@react-native-community/async-storage';


const Mundo = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.areaMenu}>
                 
                 <View style={styles.areaTituloMenu}>
                         
                         <Text style={styles.textoMenu}>Mundo</Text>
                 </View>
                 <View style={styles.iconMenu}>
                      <TouchableOpacity onPress={() => navigation.navigate('Ambiente')}>{voltar}</TouchableOpacity>
                 </View>
             </View>

            <Card style={styles.border}>
                <Card.Content>
                    <Title>
                        Maior dificuldade para a reciclagem no Brasil é a desinformação <hr />
                    </Title>
                </Card.Content >

                <TouchableOpacity onPress={() => Linking.openURL('https://www.bio3consultoria.com.br/dificuldade-de-reciclagem/')}>
                    <Card.Cover source={require('../../../assets/bio3.png')} style={styles.cardImg} />
                </TouchableOpacity>

                <Paragraph style={styles.textP} >
                    <em> 66% dos brasileiros afirmam saber pouco ou nada sobre coleta seletiva e 28% não sabem citar quais são as
                    cores das lixeiras para coleta do material</em>
                </Paragraph>
            </Card>

            <Card style={styles.border}>
                <Card.Content>
                    <Title> 
                        5 fatos sobre sustentabilidade que você precisa saber<hr />
                    </Title>
                </Card.Content >

                <TouchableOpacity onPress={() => Linking.openURL('https://aguasustentavel.org.br/publicacoes/blog/53-5-fato-sobre-sustentabilidade-que-vc-precisa-saber?gclid=Cj0KCQiA962BBhCzARIsAIpWEL3iHdUWZ14S8puICD0GGf91lMHyPyGNG4SMPGVpaUFGS8qFw3UoubgaAp5OEALw_wcB')}>
                    <Card.Cover source={require('../../../assets/aguasustentavel1.png')} style={styles.cardImg} />
                </TouchableOpacity>

                <Paragraph style={styles.textP} > 
                    <em> Reciclamos apenas 3% de todo o lixo que é recolhido no Brasil,
                    sendo que 30% poderia ser reaproveitado</em>
                </Paragraph>
            </Card>

            <Card style={styles.border}>
                <Card.Content>
                    <Title>
                        Panorama abrelpe 2020<hr />
                    </Title>
                </Card.Content >

                <TouchableOpacity onPress={() => Linking.openURL('https://abrelpe.org.br/panorama/')}>
                    <Card.Cover source={require('../../../assets/abrelp1.jpg')} style={styles.cardImg} />
                </TouchableOpacity>

                <Paragraph style={styles.textP} >  
                    <em> Nessa edição você acompanha dados inéditos do setor
                    de resíduos sólidos urbanos no Brasil</em>
                </Paragraph>
            </Card>

            <Card style={styles.border}>
                <Card.Content>
                    <Title>
                        30% do lixo que chega aos aterros poderia ser reciclado<hr />
                    </Title>
                </Card.Content >

                <TouchableOpacity onPress={() => Linking.openURL('https://ci.eco.br/cerca-de-30-por-cento-do-lixo-poderia-ser-reciclado/')}>
                    <Card.Cover source={require('../../../assets/cidadesinteligentes.jpg')} style={styles.cardImg} />
                </TouchableOpacity>

                <Paragraph style={styles.textP} > 
                    <em> Reciclamos apenas 3% de todo o lixo que é recolhido no Brasil,
                    sendo que 30% poderia ser reaproveitado</em>
                </Paragraph>
            </Card>

            <Card style={styles.border}>
                <Card.Content>
                    <Title>
                        Pesquisa revela a percepção dos brasileiros sobre o meio ambiente<hr />
                    </Title>
                </Card.Content >

                <TouchableOpacity onPress={() => Linking.openURL('https://observatorio3setor.org.br/noticias/pesquisa-revela-a-percepcao-dos-brasileiros-sobre-o-meio-ambiente/')}>
                    <Card.Cover source={require('../../../assets/observatorio1.jpg')} style={styles.cardImg} />
                </TouchableOpacity>

                <Paragraph style={styles.textP} > 
                    <em> Apesar de 78% considerarem importante a questão do aquecimento global, apenas 25% 
                        informaram saber muito sobre o assunto</em>
                </Paragraph>
            </Card>

        </View>
    );
}

export default Mundo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        marginBottom: 10,
        marginLeft: 2,
        marginRight: 2
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
        width:'48%',
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
    cardImg: {
        marginLeft: 5,
        marginRight: 5
    },
    textP: {
        marginLeft: 5,
        marginRight: 5
    },
    border: {
        borderRadius: 10,
        shadowOpacity: 0.6,
        shadowRadius: 4.68,
        elevation: 1,
        marginTop: 8,
        marginBottom: 4,
        backgroundColor: '#F8F9FA'
    }

})