/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Component}from 'react';

 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   Image,
   View,
 } from 'react-native';

 import {estiloMenu,estilosProduto} from '../estilos/stilos.js'
 
 
 export default class Menu extends Component{
   render(){
     return(
       <View style={estiloMenu.componenteView}>
         <Image style={estiloMenu.img} source={require('../img/reactNative1.jpg')}>
         </Image>
         <Text style={estiloMenu.textoMenu}>Home Produto Sobre</Text>
         
      
     </View> 
     )
     
   }
 }
 
 