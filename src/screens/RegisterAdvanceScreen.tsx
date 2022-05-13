/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { View, Dimensions, StyleSheet, ImageBackground, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any,any>{};

const { width, height } = Dimensions.get('window');


export const RegisterAdvanceScreen = ( {}:Props ) => {

    const [] = useState(false);

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
            Actualiza tus datos 
        </Text>

        <Text style = {styles.textPregunta}>
            Nombre de tu finca
        </Text>
        
        <TextInput
            style={styles.inputNombre}
            placeholder="ingresa el nombre de tu finca"
        />

        <View style={{flexDirection:'row'}}>
          <Text style = {styles.textPreguntaAreaTotal}>
              Tamaño del predio
          </Text>

          <Text style = {styles.textPreguntaUnidades}>
              Unidades
          </Text>
        </View>

        <View style={{flexDirection:'row'}}>
          <TextInput
              style={styles.inputAreaTotal}
              placeholder="100"
          />
          <TextInput
              style={styles.inputUnidades}
              placeholder="Hectareas"
              />
        </View>

        <View style={{flexDirection:'row'}}>
          <Text style = {styles.textPreguntaAreaTotal}>
              Tamaño del cultivo de cacao
          </Text>

          <Text style = {styles.textPreguntaUnidadesCultivo}>
              Unidades
          </Text>
        </View>

        <View style={{flexDirection:'row'}}>
          <TextInput
              style={styles.inputAreaTotal}
              placeholder="100"
          />
          <TextInput
              style={styles.inputUnidades}
              placeholder="Hectareas"
              />
        </View>

        <View style={{flexDirection:'row'}}>
          <Text style = {styles.textPreguntaAreaTotal}>
              Tamaño de cultivo criollo
          </Text>

          <Text style = {styles.textPreguntaUnidadesCultivo}>
              Unidades
          </Text>
        </View>

        <View style={{flexDirection:'row'}}>
          <TextInput
              style={styles.inputAreaTotal}
              placeholder="100"
          />
          <TextInput
              style={styles.inputUnidades}
              placeholder="Hectareas"
              />
        </View>
        
        <Text style = {styles.textPregunta}>
            Clones de cacao 
        </Text>
        
        <TextInput
            style={styles.inputNombre}
            placeholder="ingresa los clones que considere"
        />
     
        <Text style = {styles.textPreguntaAreaTotal}>
            Altura del predio estimada
        </Text>

        <View style={{flexDirection:'row'}}>
          <TextInput
              style={styles.inputAreaTotal}
              placeholder="Altura min"
          />
          <TextInput
              style={styles.inputUnidades}
              placeholder="Altura Max"
              />
        </View>


        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
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
    inputAreaTotal: {
        backgroundColor:'#F5F5F5',
        color: '#9E9E9E',
        width: width*0.5,
        height: height*0.06,
        borderRadius: 10,
        marginLeft: width*0.10,
        paddingLeft: 15
    },
    textPreguntaAreaTotal:{
        fontFamily: 'Mulish',
        fontSize: 16,
        color: 'black',
        marginTop: 10, 
        paddingLeft: width*0.11
    },
    textPreguntaUnidades:{
        fontFamily: 'Mulish',
        fontSize: 16,
        color: 'black',
        marginTop: 10, 
        paddingLeft: width*0.3
    },
    inputUnidades: {
        backgroundColor:'#F5F5F5',
        color: '#9E9E9E',
        width: width*0.25,
        height: height*0.06,
        borderRadius: 10,
        marginLeft: width*0.05,
        paddingLeft: 15
    },
    textPreguntaUnidadesCultivo:{
        fontFamily: 'Mulish',
        fontSize: 16,
        color: 'black',
        marginTop: 10, 
        paddingLeft: width*0.13
    },
})