import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { PanelCp } from '../components/PanelCp';
import { ButtonCp } from '../components/ButtonCp';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any,any>{};

export const LoginScreen = ( {navigation}:Props ) => {
  return (
    <View style={styles.container}>
        <ImageBackground
        style={styles.imagescreen}
        source={ require('../images/screen2.jpg')}
        />

        <View style={styles.panelCp}>
        </View> 

        <View style={styles.textos}>
          <Text style = {[
                  styles.text, 
                  styles.textTittle,    
              ]}>
            Hola, David Olarte
          </Text>

          <Text style = {[
                  styles.text, 
                  styles.text3
              ]}>
            Adjunta aqui las fotografias de tus frutos para que podamos identificarlas
          </Text>
        </View>

        <TouchableOpacity style={styles.red}>
          <ImageBackground
          style={styles.cameraIcon}
          source={ require('../images/camera_icon.png')}
          />
        </TouchableOpacity>

        

        <TouchableOpacity style={styles.red}>
          <Text style = {[
                styles.text, 
                styles.textGray
              ]}>
            Adjunta aqui las fotografias de tus frutos para que podamos identificarlas
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <ImageBackground
          style={styles.imagesIcon}
          source={ require('../images/images_icon.png')}
          />
        </TouchableOpacity>
        
        <View style={ styles.botones }>
          <TouchableOpacity 
            style={styles.buttonCp}
            onPress={ () => navigation.navigate('LoginScreen')}
          > 
            <Text style= { styles.textButton }>{'Enviar imagenes'}</Text>
          </TouchableOpacity> 

          <TouchableOpacity 
            style={styles.buttonCp}
            onPress={ () => navigation.navigate('HistoryScreen')}
          > 
            <Text style= { styles.textButton }>{'Historial de envios'}</Text>
          </TouchableOpacity> 

          <TouchableOpacity 
            style={styles.buttonCp}
            onPress={ () => navigation.navigate('LoginScreen')}
          > 
            <Text style= { styles.textButton }>{'Ver resultados'}</Text>
          </TouchableOpacity>  

        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
  red: {
    backgroundColor: 'red'
  },
  container:{
    flex: 1,
    alignSelf: 'flex-start'
  },
  imagescreen: {
    width: 428,
    height: 224,
  },
  panelCp: {
    height:'78%',
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    bottom: 50,
    width: 410,
    alignContent: 'center',
  },
  textos: {
    height: 200, 
    bottom: '84%',
  },
  text: {
    fontFamily: 'Mulish',
    alignSelf: 'center',
  },
  textTittle:{
    fontSize: 30,
    fontWeight: "bold",
    bottom: -10,
    color: 'black',
  },
  text3:{
      fontSize: 16,
      bottom: -20,
      color: 'black',
      textAlign: 'center',
      width: 350
  },
  cameraIcon: {
      width: 150,
      height: 150,
      bottom: 735,
      alignSelf: 'center',
  },
  imagesIcon: {
      width: 70,
      height: 70,
      bottom: 725,
      alignSelf: 'center',
  },
  textGray: {
    fontSize: 16,
    bottom: -150,
    color: 'black',
    textAlign: 'center',
    width: 350,
    position:'absolute'
  },
  botones: {
    flex: 1,
    width: '100%',
    height: '30%',
    position: 'absolute',
    bottom: 5,
    justifyContent: 'space-evenly'

  },
  textButton: {
    fontSize: 16,
    margin: '4.5%',
    alignSelf: 'center',
    color: 'white',
    fontWeight: "bold",
    textAlign: 'center',
  },
  buttonCp: {
    width: '80%', 
    height: '22%',
    backgroundColor: '#2094FE',
    alignSelf: 'center',
    borderRadius: 10,
  },

})