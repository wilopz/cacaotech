/* eslint-disable prettier/prettier */
import React from 'react'
import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import { PanelCp } from '../components/PanelCp';
import { InputCp } from '../components/InputCp';
import { ButtonCp } from '../components/ButtonCp';

export const Screen3 = () => {

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
          <Text>Acepto las politicas de tratamiento de datos</Text>
        </View>
        
        <ButtonCp
          title='Crear usuario'
          bottom = {'10%'}
        />
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
      }
})
