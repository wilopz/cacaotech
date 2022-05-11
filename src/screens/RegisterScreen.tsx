/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { PanelCp } from '../components/PanelCp';
import { InputCp } from '../components/InputCp';
import CheckBox from '@react-native-community/checkbox';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any,any>{};

export const RegisterScreen = ( {navigation}:Props ) => {

  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
        <ImageBackground
          style={styles.imagescreen3}
          source={ require('../images/screen3.jpg')}
        />

        <PanelCp
          height = { '85%' }
          bottom = {0}
        />

        <Text style = {[
                styles.text, 
                styles.textTittle
            ]}>
          Registra aqui tus datos
        </Text>

        <InputCp
          height = { '6%' }
          width = { '80%' }
          bottom = {'65%'}
          textInput = 'Nombre completo'
        />

        <View style={{
          bottom:'13%',
        }}>
          <Text style={{
            fontFamily: 'Mulish',
            alignSelf: 'center',
            position: 'absolute',
            fontWeight: 'bold',
            fontSize:20,
            color: 'black',
          }}>Documento de identidad</Text>
        </View>

        <View style = {styles.docum}>
            <View style={
              {
                width:'30%'
              }
            }>
              <InputCp
                height = { '100%' }
                width = { '100%' }
                /*bottom = {'58%'}*/
                textInput = 'tipo'
              />
            </View>
            <View style={{
              width:'60%'
            }}>
              <InputCp
                height = { '100%' }
                width = { '100%' }
                /*bottom = {'58%'}*/
                textInput = 'Numero'
		          />
            </View>
        </View>


        <InputCp
          height = { '6%' }
          width = { '80%' }
          bottom = {'40%'}
          textInput = 'Nombre de la finca'
        />

        <InputCp
          height = { '6%' }
          width = { '80%' }
          bottom = {'30%'}
          textInput = 'Email'
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
            onPress={ () => navigation.navigate('LoginScreen')}
          > 
            <Text style= { styles.textButton }>{'Crear usuario'}</Text>
        </TouchableOpacity> 
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
  },
  imagescreen3: {
    width: '100%',
    height: '50%',
  },
  text: {
    fontFamily: 'Mulish',
    alignSelf: 'center',
    position: 'absolute',
  },
  textTittle:{
    fontSize: 30,
    fontWeight: "bold",
    bottom: '75%',
    color: 'black',
  },
  docum:{
    flexDirection:'row',
    alignSelf:'center',
    height: '6%',
    width: '80%',
    bottom: '15%',
    justifyContent:'space-between',
  },
  politicas:{
    flexDirection:'row',
    /*width:'100%'*/
    fontFamily: 'Mulish',
    alignSelf: 'center',
    position: 'absolute',
    bottom: '23%',
    justifyContent:'space-between',
  },
  checkbox: {
    alignSelf: "center",
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
    height: '7%',
    bottom: '10%',
    backgroundColor: '#2094FE',
    alignSelf: 'center',
    borderRadius: 10,
    position: 'absolute'
  },
})
