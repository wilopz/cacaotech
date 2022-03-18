/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import { ButtonCp } from '../components/ButtonCp';
import { PanelCp } from '../components/PanelCp';

export const Screen4 = () => {
  return (
    <View style={styles.container}>
        <ImageBackground
          style={styles.imagescreen4}
          source={ require('../images/screen4.jpg')}
        />

        <PanelCp
          height = { '85%' }
          bottom = {0}
        />

        <Text style = {[
              styles.text, 
              styles.textTittle
            ]}>
          Historial de análisis
        </Text>

        <View style = {styles.consultas}>
          <View style = {styles.izquierdo}>
            <View style = {{
              width:'100%',
              height:'50%',
            }}>
              <Text style = {styles.fechas}>Análisis --/--/--</Text>
            </View>
            <View  style = {{
              width:'100%',
              height:'50%',
            }}>
              <Text style = {styles.textanalisis}>Fotos cargadas:</Text>
            </View>
          </View>
          <View style = {styles.derecho}>
            <Text style = {styles.textanalisis}>Estado:</Text>
          </View>
        </View>

        <View style = {styles.consultas}>
          <View style = {styles.izquierdo}>
            <View style = {{
              width:'100%',
              height:'50%',
            }}>
              <Text style = {styles.fechas}>Análisis --/--/--</Text>
            </View>
            <View  style = {{
              width:'100%',
              height:'50%',
            }}>
              <Text style = {styles.textanalisis}>Fotos cargadas:</Text>
            </View>
          </View>
          <View style = {styles.derecho}>
            <Text style = {styles.textanalisis}>Estado:</Text>
          </View>
        </View>

        <View style = {styles.consultas}>
          <View style = {styles.izquierdo}>
            <View style = {{
              width:'100%',
              height:'50%',
            }}>
              <Text style = {styles.fechas}>Análisis --/--/--</Text>
            </View>
            <View  style = {{
              width:'100%',
              height:'50%',
            }}>
              <Text style = {styles.textanalisis}>Fotos cargadas:</Text>
            </View>
          </View>
          <View style = {styles.derecho}>
            <Text style = {styles.textanalisis}>Estado:</Text>
          </View>
        </View>

        <View style = {styles.consultas}>
          <View style = {styles.izquierdo}>
            <View style = {{
              width:'100%',
              height:'50%',
            }}>
              <Text style = {styles.fechas}>Análisis --/--/--</Text>
            </View>
            <View  style = {{
              width:'100%',
              height:'50%',
            }}>
              <Text style = {styles.textanalisis}>Fotos cargadas:</Text>
            </View>
          </View>
          <View style = {styles.derecho}>
            <Text style = {styles.textanalisis}>Estado:</Text>
          </View>
        </View>
        <ButtonCp
          title='Borrar selección'
          bottom = {'15%'}
        />

        <ButtonCp
          title='Borrar historial'
          bottom = {'5%'}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
      },
    imagescreen4: {
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
      fechas:{
        fontFamily: 'Mulish',
        alignSelf: 'center',
        fontWeight:'bold',
        color:'#2094FE',
      },
      textanalisis: {
        fontFamily: 'Mulish',
        fontWeight:'bold',
        alignSelf: 'center',
        position: 'absolute',
      },
      consultas:{
        flexDirection:'row',
        alignSelf:'center',
        justifyContent:'space-between',
        width:'80%',
        height:'7%',
        margin:'2.5%',
        padding:'1%',
        backgroundColor:'#F5F5F5',
        borderWidth: 1,
        borderRadius:10,
        bottom:'40%',
      },
      derecho:{
        width:'45%',
        height:'100%',
        justifyContent:'center',
      },
      izquierdo:{
        width:'45%',
        height:'100%',
        justifyContent:'space-between',
        alignItems:'center',
      },
})