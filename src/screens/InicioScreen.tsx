import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ButtonCp } from '../components/ButtonCp';
import { InputCp } from '../components/InputCp';
import { PanelCp } from '../components/PanelCp';

export const InicioScreen = () => {
  return (
    <View style = {styles.container}>
        <PanelCp
          height = { '50%' }
          bottom = {0}
        />

        <Text style = {[
                styles.text, 
                styles.textTittle
            ]}>
          Bienvenido de vuelta
        </Text>

        <Text style = {[
                styles.text, 
                styles.text1
            ]}>
          ingresa tus credenciales
        </Text>

        <InputCp
          height = { '6%' }
          width = { '80%' }
          bottom = {'26%'}
          textInput = 'ingresa tu email'
        />

        <ButtonCp
          title='iniciar sesión'
          bottom = {'15%'}
        />

        <TouchableOpacity style = {[
                styles.text, 
                styles.text2
            ]}>
          <Text style = {{
            color: '#2094FE',
          }} >
            ¿No tienes una cuenta? {"\n"}
            {'           '}Registrate
          </Text>
        </TouchableOpacity>
        
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  text: {
    fontFamily: 'Mulish',
    alignSelf: 'center',
    position: 'absolute',
  },
  textTittle:{
    fontSize: 30,
    fontWeight: "bold",
    bottom: '40%',
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
})