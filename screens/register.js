import { React } from 'react'
import {StyleSheet, View, Text, ImageBackground } from 'react-native'

const image = { uri: "https://reactjs.org/logo-og.png" };

const register = () => {
    return(
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text style={styles.titulo}>Register</Text>
        </ImageBackground>  
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      /*backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',*/
    },
    titulo: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#fff'
    },
    texto1: {
      fontSize: 24,
      color: '#9E9E9E',
    },
    textInput: {
      fontSize: 16,
      color: '#9E9E9E',
      padding: 10,
      paddingStart: 10,
      marginTop: 30,
      width: '80%',
      height: 50,
      borderRadius: 10,
      backgroundColor: '#F5F5F5'
    },
    image: {
      flex: 1,
      justifyContent: "center"
    }
  });


export default register