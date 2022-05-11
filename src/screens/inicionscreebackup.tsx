/* eslint-disable prettier/prettier */
import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { InputCp } from '../components/InputCp';
import { PanelCp } from '../components/PanelCp';
import { StackScreenProps } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any,any>{};

export const InicioScreen = ( {navigation}:Props ) => {
  return (
    <View style = {styles.container}>

        <ImageBackground
          style={styles.imagescreen1}
          source={ require('../images/screen2.jpg')}
        />

        <PanelCp
          height = { '50%' }
          bottom = {0}
        />

        <View
        style={styles.panelCp1}
        >
        </View>
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
        
        <View style={{
          flexDirection: 'column',
          margin: 30,
        }}>
          <TextInput
            style={{backgroundColor:'red'}}
            placeholder="ingresa tu email"
          />

          <TextInput
            style={{backgroundColor:'red'}}
            placeholder="contraseña"
          />

          <TouchableOpacity 
            style={styles.buttonCp}
            onPress={ () => navigation.navigate('LoginScreen')}
          > 
            <Text style= { styles.textButton }>{'iniciar sesión'}</Text>
          </TouchableOpacity> 
          
          <TouchableOpacity style = {[
                  styles.text, 
                  styles.text2
              ]}
              onPress={ () => navigation.navigate('RegisterScreen') }
              >
            <Text style = {{
              color: '#2094FE',
            }} >
              ¿No tienes una cuenta? {"\n"}
              {'            '}Registrate
            </Text>
          </TouchableOpacity>
        </View>
        
        
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  imagescreen1: {
    width: '100%',
    height: '75%',
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
    backgroundColor: '#2094FE',
    alignSelf: 'center',
    position: 'absolute',
    borderRadius: 10,
    bottom: '15%',
  },
  input1: {
    backgroundColor: 'red',
      width: '80%',
      height: 60,
      padding: 15,
      alignSelf:'center',
      borderRadius: 10,

  },
  input2: {
      backgroundColor: 'red',
        width: '80%',
        height: 60,
        padding: 15,
        alignSelf:'center',
        borderRadius: 10,
  
  },
  panelCp1:{
    width: '100%', 
    height: '50%',
    backgroundColor: 'white',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
})