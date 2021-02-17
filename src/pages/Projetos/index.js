// Libraries

import React from 'react';
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
import { poly } from 'react-native/Libraries/Animated/src/Easing';


const menu = <IO name="menu" size={30} color="#fff" />;

const home = <IO name="home" size={30} color="#fff" />;
const rocket = <FA name="rocket" size={30} color="#fff" />;
const book = <IO name="ios-book" size={30} color="#fff" />;
const person = <IO name="person" size={30} color="#fff" />;





const Projetos = ({navigation}) =>{
    return(
        <View style={styles.container}>

            <View style={styles.menu}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>{menu}</TouchableOpacity>
            </View>

            <View style={styles.main}>
                    {/* <Text style={styles.h1}>Projetos</Text> */}

                    <View style={styles.block1}>
                   
                    <View style= {styles.img1}>
                    <Image source={require('../../../assets/2.png')}
                    style={styles.p1}>
                    </Image>
                    </View>
                    <View style={styles.txt}>
                    <Text style={styles.h1}>
                            <center><h3>Nossa Objetivo</h3></center>
                        </Text >
                        <Text style={styles.txt2}>
                        Reverter materias reciclados 
                        em benefícios para a comunidade.
                    

                        </Text>
                    </View>
                    
            </View>
                    <View style={styles.block2}>
                    <View style= {styles.img1}>
                    <Image source={require('../../../assets/1.png')}
                    style={styles.p1}>
                    </Image>
                    </View>
                    <View style={styles.txt}>
                        <Text style={styles.h1}>
                        <center><h3>Resultado</h3></center>
                        </Text>
                        
                            <Text style={styles.txt2}>
                                Com o recurso convertidos pela ação de reciclar, todos serão befeficiados.


                        </Text>
                    </View>

             </View>
                    <View style={styles.block3}>
                    <View style= {styles.img1}>
                    <Image source={require('../../../assets/3.png')}
                    style={styles.p1}>
                    </Image>
                    </View>
                    <View style={styles.txt}>
                    <Text style={styles.h1}>
                        <center><h3>Assim</h3></center>
                        </Text>

                        <Text style={styles.txt2}>
                        Conscietizando a impôrtancia de
                        adotar estilos sustentáveis de vida.
                        </Text>
                    </View>

             </View>
                    
                    
                    
                    
                    
                    
            </View>


            

            {/* <View style={styles.footer}>

            <View style={styles.box4}><TouchableOpacity onPress={() => navigation.navigate('Projetos')}>{home}</TouchableOpacity></View>
                    <View style={styles.box1}><TouchableOpacity onPress={() => navigation.navigate('Informativo')}>{rocket}</TouchableOpacity></View>
                    <View style={styles.box2}><TouchableOpacity onPress={() => navigation.navigate('AReciclo')}>{book}</TouchableOpacity></View>
                    <View style={styles.box3}><TouchableOpacity onPress={() => navigation.navigate('Contatos')}>{person}</TouchableOpacity></View>
            </View> */}

        </View>
    );
}

export default Projetos;

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
    h1:{
        fontSize:32
    },
    main:{
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '580px'
    },
    block1:{
        
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        height:'30%',
        backgroundColor:'#F8F9FA',
        flexDirection:'row',
        justifyContent:'space-around'

    },
    block2:{
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        height:'30%',
        backgroundColor:'#F8F9FA',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    block3:{
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        height:'30%',
        backgroundColor:'#F8F9FA',
        flexDirection:'row',
        justifyContent:'space-around'
        

    },

    
    p1: {
        width: 140,
        height: 140,
        borderRadius: 100,
        position:'absolute',
        marginLeft:5,
        left:0
    },

    p2:{
        fontSize: 20,
        textAlign:"left",
        },


    img1:{
        width:180,
        height:170,
        //backgroundColor:'red'
       

    },

    txt: {
        width:180,
        height:160,
       // backgroundColor:'red'
    },

    txt2: {
        fontSize: 16,
        justifyContent: 'center',
        //alignItems: 'center',
        color: '#003',
        height: 118,
        marginLeft: 3,
        marginRight:3,
        display: 'flex',
        textAlign:"center"
        
    },

    h1:{
        textAlign:"auto",
        fontFamily:"arial",
        fontStyle:"italic",
        marginTop:3
    

        
        
    
    
   
         },
    
})
    
   
    

        
        
        




