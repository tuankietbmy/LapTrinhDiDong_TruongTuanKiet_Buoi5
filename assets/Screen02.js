import { StatusBar } from 'expo-status-bar';
import { startTransition } from 'react';
import React from 'react';
import {Pressable, StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Screen02({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Image style={styles.img1} source={require('../assets/vs_blue.png')}/>
                <Text style={styles.texttieude}>Điện thoại VSMart Joy3<br/>Hàng chính hãng</Text>
            </View>
            
            <View style={styles.container2}>
                <Text style={styles.chonmau}>Chọn 1 màu bên dưới:</Text>
                <TouchableOpacity style={styles.center}>
                    <Image style={styles.mau} source={require('../assets/Rectangle 4.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.center} onPress={() => navigation.navigate('Screen03')}>
                    <Image style={styles.mau} source={require('../assets/Rectangle 5.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.center}>
                    <Image style={styles.mau} source={require('../assets/Rectangle 6.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.center}>
                    <Image style={styles.mau} source={require('../assets/Rectangle 7.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.done}  onPress={() => navigation.navigate('Screen01')}>
                    <Text style={styles.textdone}>XONG</Text>
                </TouchableOpacity>
            </View>
        </View>
      
    );
  }
  export default Screen02;

  const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    img1:{
        width:112,
        height:132,
        marginLeft:4,
    },
    row:{
        display:'flex',
        flexDirection:'row',
    },
    texttieude:{
        fontSize:17,
        fontWeight:'bold',
        marginLeft:15,
        marginTop:15,
    },
    container2:{
        paddingBottom:10,
        marginTop:15,
        flex:1,
        backgroundColor:'rgba(196, 196, 196, 1)',
    },
    chonmau:{
        margin:13,
        fontSize:20,
    },

    mau:{
        alignItems:'center',
        width:80,
        height:85,
        marginLeft:150,
        marginBottom:14,
    },
    done:{
        marginLeft:20,
        marginRight:20,
        marginTop:15,
        padding:7,
        borderWidth:1,
        borderColor:'red',
        borderRadius:10,
        backgroundColor:'rgba(25, 82, 226, 0.58)'
    },
    textdone:{
        color:'white',
        fontSize:20,
        textAlign:'center'
    }
  })