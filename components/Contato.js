import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'


export default ({foto, nome, data, comentario}) => (
  <View style = {styles.containerGeral}>
    <View style = {styles.container}>
      <Image source = {foto} style = {styles.foto}/>   
      <View style = {styles.text}>   
        <Text style = {styles.nome} >{nome}</Text>
        <Text style = {styles.data}>{data}</Text>
      </View>
      
    </View>

    <Text style = {styles.comentario}>{comentario}</Text>

  </View>
)

const styles = StyleSheet.create({

  containerGeral: {
    justifyContent: 'flex-start'

  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  }, 
  foto: {
    height: 80,
    width: 80,    
    borderRadius: 90,
    
  },
  text: {
    paddingLeft: 10,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    
  },

  data: {
    fontSize: 10,
    color: 'gray'
    
  },

  comentario: {
    padding: 5,
    



  }
})