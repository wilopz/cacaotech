/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';

interface Props extends StackScreenProps<any,any>{};

const { width, height } = Dimensions.get('window');

export const RegisterScreen = ( {navigation}:Props ) => {

  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground
          style={styles.imagescreen}
          source={ require('../images/screen3.jpg')}
      />
      <View style={styles.panel}>

        <Text style = {[
                  styles.text, 
                  styles.textTittle
              ]}>
            Registra aqui tus datos
        </Text>

        <Text style = {styles.textPregunta}>
            Nombre completo*
        </Text>
        
        <TextInput
            style={styles.inputNombre}
            placeholder="ingresa tu nombre"
        />

{/*         <Text style = {[
  styles.text, 
  styles.textDocumento
]}>
Documento de identidad
</Text> */}

        <View style={{flexDirection:'row'}}>
          <Text style = {styles.textPreguntaTipo}>
              Tipo *
          </Text>

          <Text style = {styles.textPreguntaDocumento}>
              Número de documento*
          </Text>
        </View>

        <View style={{flexDirection:'row'}}>
          <TextInput
              style={styles.inputTipo}
              placeholder="Tipo"
          />
          <TextInput
              style={styles.inputDocumento}
              placeholder="Número"
              />
        </View>

        <Text style = {styles.textPreguntaEmail}>
            Email*
        </Text>

        <TextInput
            style={styles.inputNombre}
            placeholder="ingresa tu correo electrónico"
        />
        
        <Text style = {styles.textPreguntaEmail}>
          Contraseña*
        </Text>

        <TextInput
            style={styles.inputNombre}
            placeholder="************"
        />

        <Text style = {styles.textPreguntaEmail}>
          Confirmar Contraseña*
        </Text>

        <TextInput
            style={styles.inputNombre}
            placeholder="************"
        />

        <View style={styles.politicas}>
          <View style = {{
            justifyContent:'center',
          }}>
            <Text>Acepto las politicas de tratamiento de datos</Text>
          </View>
          <View>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
          </View>
        </View>

        <TouchableOpacity
            style={styles.buttonCp}
            onPress={ () => navigation.navigate('RegisterAdvanceScreen')}
          > 
            <Text style= { styles.textButton }>{'Crear Usuario'}</Text>
        </TouchableOpacity> 

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    height: height,
    width: width,
  },
  imagescreen: {
    height: height*0.25,
    width: width,
  },
  panel:{
    backgroundColor: 'white',
    height: height*0.80,
    width: width,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  text: {
    fontFamily: 'Mulish',
    alignSelf: 'center',
  },
  textTittle:{
    fontSize: 30,
    fontWeight: "bold",
    color: 'black',
    marginTop: 30, 
  },
  textPregunta:{
    fontFamily: 'Mulish',
    fontSize: 16,
    color: 'black',
    marginTop: 30, 
    paddingLeft: width*0.11
  },
  inputNombre: {
    backgroundColor:'#F5F5F5',
    color: '#9E9E9E',
    alignSelf:'center',
    width: width*0.8,
    height: height*0.06,
    borderRadius: 10,
    padding: 15,
  },
  textDocumento:{
    fontFamily: 'Mulish',
    fontSize: 16,
    fontWeight: "bold",
    color: 'black',
    marginTop: 10, 
    paddingLeft: width*0.11
  },
  inputTipo: {
    backgroundColor:'#F5F5F5',
    color: '#9E9E9E',
    width: width*0.2,
    height: height*0.06,
    borderRadius: 10,
    marginLeft: width*0.10,
    paddingLeft: 15
  },
  textPreguntaTipo:{
    fontFamily: 'Mulish',
    fontSize: 16,
    color: 'black',
    marginTop: 10, 
    paddingLeft: width*0.11
  },
  textPreguntaDocumento:{
    fontFamily: 'Mulish',
    fontSize: 16,
    color: 'black',
    marginTop: 10, 
    paddingLeft: width*0.2
  },
  inputDocumento: {
    backgroundColor:'#F5F5F5',
    color: '#9E9E9E',
    width: width*0.5,
    height: height*0.06,
    borderRadius: 10,
    marginLeft: width*0.10,
    paddingLeft: 15
  },
  textPreguntaEmail:{
    fontFamily: 'Mulish',
    fontSize: 16,
    color: 'black',
    marginTop: 10, 
    paddingLeft: width*0.11
  },
  politicas:{
    flexDirection:'row',
    fontFamily: 'Mulish',
    alignSelf: 'center',
    position: 'absolute',
    bottom: height*0.14,
    justifyContent:'space-between',
  },
  checkbox: {
    alignSelf: "center",
  },
  buttonCp: {
    backgroundColor: '#2094FE',
    width: width*0.8, 
    height: height*0.065,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 60,
  },
  textButton: {
    fontSize: 16,
    color: 'white',
    alignSelf: 'center',
    fontWeight: "bold",
    margin: height*0.015,
  },
})
