import React,{Component} from "react"
import{StyleSheet} from 'react-native';
import { Colors } from "react-native/Libraries/NewAppScreen";



{/*folhas de estilos Menu */}
 
const estiloMenu = StyleSheet.create({
    componenteView:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      margin:10,
      backgroundColor:'#000000'
  
    },
    
    img:{

      height:60,width:60
    },
    
    textoMenu:{
      fontSize:20,
      color:'#00BFFF',
      margin:10,
      
    }
     
  })
  
  
  {/*folhas de estilos  produtos*/}
 
 const estilosProduto = StyleSheet.create({
    produtos:{
      
      alignItems:'center',
      backgroundColor:'lightblue',
      margin:10,
      padding:15,
      borderRadius:10,
      borderWidth:2,
      borderColor:'grey'
        
  
    },
    
    img:{height:200,width:300 },
    
    textoProduto:{
      fontSize:15,
      color:'green',
      margin:3,
      fontWeight:'600',
      alignItems:'flex-end',
      
      
    },
    textoReserva:{
        fontSize:15,
        color:'green',     
      margin:3,
      fontWeight:'600',
      alignItems:'flex-end',
    }
     
  })

  const estiloButtonProd = StyleSheet.create({
    viewButtonProd:{
        flexDirection:'row',
        justifyContent:'center',
       

    },
    botaoReservarProd:{
        fontSize:20,
        fontWeight:'bold',
        backgroundColor:'darkorange',
        borderRadius:10,
        borderWidth:1,
        borderColor:'red',
        padding:5,
        color:'green',
        margin:10
        
        
         },
    botaoLimparProd:{
        fontSize:20,
        fontWeight:'bold',
        backgroundColor:'darkorange',
        borderRadius:10,
        color:'red',
        margin:10,     
      
    }
  })
  

  export{estiloMenu,estilosProduto,estiloButtonProd}