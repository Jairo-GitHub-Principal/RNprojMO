

import React, { Component } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Image,
  View,
  Button,
  TouchableOpacity,
  
} from 'react-native';

import { estilosProduto,estiloButtonProd } from '../estilos/stilos';


export default class ProdutoBebeYoda extends Component {
  constructor(props){ // 
    super(props)
    this.state= {
      reservado:0,
      totalPrecoProd:0,
      corTextoReserva:'green',  
      textoBotaoLimpar:<Text></Text>
    }
  }
  
  
  reservar(){
    this.setState({
      reservado:this.state.reservado + 1, // a palavra reervada this, 
      totalPrecoProd: this.state.totalPrecoProd + this.props.preco,                              // chama o state reservado
      corTextoReserva:'red',
      textoBotaoLimpar:'Limpar'
    })
    
  }
  limpar(){
     this.setState({
      reservado:0,
      totalPrecoProd:0,
      corTextoReserva:'green',
      textoBotaoLimpar:''
     })
  }
  render() {
    return ( 
      <View style={estilosProduto.produtos}>
          <View>
                  <Image style={estilosProduto.img} 
                  source={this.props.imagembabyYoda}>
                  </Image>
                  
                <View >                                                       
                    <Text style={estilosProduto.textoProduto}>Descrição : {this.props.descricao}</Text>
                    <Text style={estilosProduto.textoProduto}>Preço : {this.props.preco}</Text>
                    
                    <Text style={{color:this.state.corTextoReserva,
                      fontSize:15,margin:3,fontWeight:'600',alignItems:'flex-end',}}>Reservas : {this.state.reservado}</Text>


                    <Text style={estilosProduto.textoProduto}>Total : {this.state.totalPrecoProd}</Text>
                </View>
                
                {/*abaixo temos os botões */}
                <View style={estiloButtonProd.viewButtonProd}>
                  <TouchableOpacity  onPress={() => this.reservar()}>
                  <Text style={estiloButtonProd.botaoReservarProd} >Reservar</Text>
                  </TouchableOpacity>
                  
                  
                  <TouchableOpacity style={{padding:5}}
                  onPress={() =>this.limpar()}>
                  <Text style={estiloButtonProd.botaoLimparProd}>{this.state.textoBotaoLimpar}</Text>
                  </TouchableOpacity>


                  <Button testID='b1' onPress={()=> this.reservar()} title='reservado'></Button>
                  
                  
                 

                </View>
                
            </View>
     </View>
    )

  }
}



