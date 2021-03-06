/* eslint-disable prettier/prettier */
import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { InputCp } from './InputCp';
import { useNavigation } from '@react-navigation/native';


interface Props {
    title?: string,
    height?: string | number,
    bottom?: string | number,
    onPress?: () => void,
}

export const ButtonCp = ( {height = '7%', bottom = 0, title= 'title', onPress} : Props) => {


  return (
    <TouchableOpacity 
        style={{
        width: '80%', 
        height: height,
        backgroundColor: '#2094FE',
        alignSelf: 'center',
        position: 'absolute',
        borderRadius: 10,
        bottom: bottom,
        }}
    > 
      <Text style= { styles.textButton }>{ title }</Text>
    </TouchableOpacity> 
  )
}

const styles = StyleSheet.create({
    textButton: {
        fontSize: 16,
        margin: '4.5%',
        alignSelf: 'center',
        color: 'white',
        fontWeight: "bold",
        textAlign: 'center',
    },
})