import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import foto from '../assets/cliente.jpg';
import Contato from './Contato';

 
 const listaComentarios = [
   {id: 1,
    foto: foto,
    nome: 'Milena',
    data: 'Fevereiro de 2021',
    comentario: 'Excelente localizacão e estrutura, Funcionários muito atenciosos e prestativo.'
    },

    {id: 2,
    foto: foto,
    nome: 'Steffany',
    data: 'Janeiro de 2021',
    comentario: 'Ótima localizacão, próximo aos principais pontos de interesse em Punta Cana, comodidade no flat. Os funcionários também se mostraram dispostos a resolver imprevistos.'
    },

    {id: 3,
    foto: foto,
    nome: 'Maria Luiza',
    data: 'Dezembro de 2020',
    comentario: 'Super recomendo, atendimento maravilhoso, flat super organizado bem localizado, aconchegante!'
    },
 ]

export default() => { 
  
  const itemLista = ({item}) => {
    return(
      <Contato
        foto={item.foto}
        nome={item.nome}
        data={item.data}
        comentario={item.comentario}

        />

    )
  }

  return (

  <View>  
    <View style = {styles.avaliacao}>       
      <Text style = {[styles.texto, {color: 'red'}, {paddingLeft: 20}]}>★</Text>
      <Text style = {styles.texto}> 4,70(61comentarios)</Text>
    </View>
    
    <FlatList
      data = {listaComentarios}
      renderItem = {itemLista}
      keyExtractor = {(comentario) => comentario.id}

      />
    
  </View>
  )
}

const styles = StyleSheet.create({
  texto: {
    paddingTop: 15,    
    fontSize: 13,
    fontWeight: 'bold'
  },
  avaliacao: {
    flexDirection: 'row'
  }
})

