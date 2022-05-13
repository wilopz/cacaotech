import React, { useContext, useState } from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';



interface Props extends StackScreenProps<any,any>{};

const { width, height } = Dimensions.get('window');


export const LoginScreen = ( {navigation}:Props ) => {
  
  const [ tempUri, setTempUri ] = useState<string>()
  
  const img = '../images/camera_icon.png'
  
  const takePhoto = () => {
    launchCamera({
      mediaType: 'photo',
    }, ( respuesta ) => {
      if ( respuesta.didCancel ) return;
      if ( !respuesta.uri ) return;

      setTempUri( respuesta.uri );
      console.log( respuesta);
    });
  }

  const takePhotoFromGallery = () => {
    launchImageLibrary({
      mediaType: 'photo',
    }, ( respuesta ) => {
      if ( respuesta.didCancel ) return;
      if ( !respuesta.uri ) return;

      setTempUri( respuesta.uri );
      console.log( respuesta);
    });
  }



  return (
    <View style={styles.container}>

        <ImageBackground
        style={styles.imagescreen}
        source={ require('../images/screen2.jpg')}
        />

        <View style={styles.panelCp}>
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

          <TouchableOpacity
            onPress={ takePhoto }
          >
            <ImageBackground
            style={styles.cameraIcon}
            source={ require('../images/camera_icon.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={ takePhotoFromGallery }
          >
            <ImageBackground
            style={styles.imagesIcon}
            source={ require('../images/images_icon.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.buttonCp}
            onPress={ () => navigation.navigate('LoginScreen')}
          > 
            <Text style= { styles.textButton }>{'Enviar imagenes'}</Text>
          </TouchableOpacity> 

          <TouchableOpacity 
            style={styles.buttonCp}
            onPress={ () => navigation.navigate('LoginScreen')}
          > 
            <Text style= { styles.textButton }>{'Ver resultados'}</Text>
          </TouchableOpacity> 

          <TouchableOpacity 
            style={styles.buttonCp}
            onPress={ () => navigation.navigate('HistoryScreen')}
          > 
            <Text style= { styles.textButton }>{'Historial de envios'}</Text>
          </TouchableOpacity>  
        
          {
            ( tempUri ) && (
              <Image
                source={{ uri: tempUri }}
                style={{
                  width: 80,
                  height: 100,
                  bottom: 300,
                  left: 50,
                }}
              />
            )
          }
          

        </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignSelf: 'flex-start'
  },
  imagescreen: {
    width: 428,
    height: 224,
  },
  panelCp:{
    backgroundColor: 'white',
    height: height*0.75,
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
    marginTop: 20,
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
    alignSelf: 'center',
    marginTop: 40,
  },
  imagesIcon: {
    width: 70,
    height: 70,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  buttonCp: {
    width: width*0.8, 
    height: height*0.06,
    backgroundColor: '#2094FE',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 10
  },
  textButton: {
    fontSize: 16,
    margin: '4.5%',
    alignSelf: 'center',
    color: 'white',
    fontWeight: "bold",
    textAlign: 'center',
  },
})