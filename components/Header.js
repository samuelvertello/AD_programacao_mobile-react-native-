import React from 'react'
import {View,Text, Image, StyleSheet} from 'react-native'

import Constants from 'expo-constants'

import logo from '../assets/resort.jpg'

export default () => (  
  <View style={styles.container}>    
    <Image source={logo} style={styles.imagem} />
    <Text style={styles.title}>PUNTA CANA</Text>    
    <Text style = {styles.descricao}>4 hospedes - 2 quartos - 2 camas - 1 banheiro</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    alignItems: "flex-start",

  },
  imagem: {    
    width: 410,
    height: 200,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,

  },
  title: {      
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 10

  },
  descricao: {
    paddingTop: 10,
    paddingLeft: 20,
    color: 'gray',
    
  }

})