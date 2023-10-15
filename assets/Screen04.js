import { StatusBar } from 'expo-status-bar';
import { startTransition } from 'react';
import React from 'react';
import {Pressable, StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
function Screen04({navigation}) {
  return (

    <View style={styles.container}>
        <Image style={styles.img} source={require('../assets/vs_red_a 1.png')}/>
        <Text style={styles.text}>Điện Thoại Vsmart JOY3 - Hàng chính hãng</Text>
        <View style={styles.ngang}>
            <Image style={styles.imgstar} source={require('../assets/star.png')}/>
            <Image style={styles.imgstar} source={require('../assets/star.png')}/>
            <Image style={styles.imgstar} source={require('../assets/star.png')}/>
            <Image style={styles.imgstar} source={require('../assets/star.png')}/>
            <Image style={styles.imgstar} source={require('../assets/star.png')}/>
            <Text style={styles.textdanhgia}>(Xem 828 đánh giá)</Text>
        </View>
        <View style={styles.ngang}>
            <Text style={styles.textgiamoi}>1.790.000 đ</Text>
            <Text style={styles.textgiacu}>1.790.000 đ</Text>
        </View>
        <View style={styles.ngang}>
            <Text style={styles.texthoantien}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
            <Image style={styles.chamhoi} source={require('../assets/Group 1.png')}/>
        </View>
        <View style={styles.chonmau}>
            <TouchableOpacity style={styles.ngang}  onPress={() => navigation.navigate('Screen02')}>
                <text style={styles.textchonmau}>4 MÀU-CHỌN MẪU</text>
                <Image style={styles.imgchonmau} source={require('../assets/Vector.png')}/>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.mua}>
            <Text style={styles.textmua}>CHỌN MUA</Text>
        </TouchableOpacity>
    </View>
  );
}

export default Screen04;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    img:{
        marginLeft:45,
        width:300,
        height:361,
      
    },
    text:{
        fontSize:17,
        fontFamily:'Roboto',
        fontWeight:'bold',
        lineHeight:17.58,
        marginLeft:12,
        marginTop:10,
    },
    imgstar:{
        height:30,
        width:30,
    },
    ngang:{
        marginTop:10,
        marginLeft:10,
        display:'flex',
        flexDirection:'row',
       // alignItems: 'center',
        //justifyContent:'space-between'
    },
    
    textdanhgia:{
        fontSize:18,
        marginTop:5,
        marginLeft:10
    },
    textgiamoi:{
        fontSize:20,
        fontWeight:'bold',
        margin:5
    },
    textgiacu:{
        textDecorationLine: 'line-through',
        borderBottomWidth: -1,
        borderBottomColor: '#000000', // Mã hex cho màu đỏ, thay đổi thành mã hex tương ứng với màu bạn muốn
        fontSize: 17,
        fontWeight:'bold',
        marginLeft:50,
        marginTop:7,
        color:'#414854'
    },
    texthoantien:{
        marginTop:5,
        color:'red',
        fontSize:13,
        fontWeight:800,
        marginLeft:5,
    },
    chamhoi:{
        marginLeft:10,
        width:25,
        height:25,
    },
  
    chonmau:{
        borderWidth:2,
        borderColor: 'black',
        margin:20,
        paddingBottom:10,
        display:'flex',
        flexDirection:'row',
        borderRadius:10,
    },
    textchonmau:{
        marginLeft:100,
        color: 'rgba(0, 0, 0, 1)',
    },
    imgchonmau:{
        height:20,
        width:20,
        marginLeft:60,
    },
    mua:{
        padding:2,
        marginLeft:20,
        marginRight:20,
        marginTop:10,
        backgroundColor:'red',
        borderWidth:2,
        borderColor:'red',
        borderRadius:10,
    },
    textmua:{
        fontSize:20,
        color:'white',
        textAlign:'center',
    }
});