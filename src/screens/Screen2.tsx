import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { PanelCp } from '../components/PanelCp';
import { ButtonCp } from '../components/ButtonCp';

export const Screen2 = () => {
  return (
    <View>
        <ImageBackground
        style={styles.imagescreen1}
        source={ require('../images/screen2.jpg')}
        />
        <PanelCp
          height = { '80%' }
          bottom = {0}
        />

        <TouchableOpacity
            
        />

        <Text style = {[
                styles.text, 
                styles.textTittle
            ]}>
          Hola, David Olarte
        </Text>
        <Text style = {[
                styles.text, 
                styles.text3
            ]}>
          Adjunta aqui las fotografias de tus frutos para que podamos identificarlas
        </Text>
        <ButtonCp
          title='Enviar imagenes'
          bottom = {-20}
          height = {'9%'}
        />

        <ButtonCp
          title='Historial de envios'
          bottom = {-90}
          height = {'9%'}
        />

        <ButtonCp
          title='Ver resultados'
          bottom = {-160}
          height = {'9%'}
        />

        
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
      fontFamily: 'Mulish',
      alignSelf: 'center',
      position: 'absolute',
    },
    textTittle:{
      fontSize: 30,
      fontWeight: "bold",
      bottom: '70%',
      color: 'black'
    },
    text1:{
      fontSize: 24,
      bottom: '35%',
      color: '#9E9E9E',
    },
    text2:{
      fontSize: 16,
      bottom: '7%',
      color: '#2094FE',
    },
    imagescreen1: {
      width: '100%',
      height: '75%',
    },
    text3:{
        fontSize: 16,
        bottom: '55%',
        color: 'black',
        textAlign: 'center',
      },
    camera_icon: {
        width: '70%',
        height: '50%',
        bottom: 410,
        alignSelf: 'center',
      },

  })