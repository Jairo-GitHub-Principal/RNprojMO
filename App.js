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
  TextInput,
} from 'react-native';

{/* abaixo importaremos os componentes que criamos, como instanciar uma classe no c# */}
import Menu from './src/componentes/Menu'; 
import ProdutoBebeYoda from './src/componentes/Produtos';

export default class App extends Component{
 
  render(){
    return(
      
      <View style={{flex:1}}>
         <Menu/>   
      
     <ScrollView>
     <View >
         
          
        <ProdutoBebeYoda 
        imagembabyYoda = {require('./src/img/bebeYoda.jpg')} // atribuimos uma imagen como valor para o props imagembabyYoda
        descricao = 'Grogo'
        preco={100}
        >
        </ProdutoBebeYoda>

        
        <ProdutoBebeYoda 
         imagembabyYoda = {require('./src/img/groot.jpg')} //
         descricao = 'Groot'
        preco={150}
        >
        </ProdutoBebeYoda>

      
       
       
                  
             
    </View>
    </ScrollView>
    </View> 
    
    )
    
  }
}

{/*folhas de estilos */}

const estilos = StyleSheet.create({
  
   
})


