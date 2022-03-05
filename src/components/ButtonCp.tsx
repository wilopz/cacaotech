import React from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback, TouchableOpacity } from 'react-native';

interface Props {
    title?: string,
    height?: string | number,
    bottom?: string | number
}

export const ButtonCp = ( {height = '7%', bottom = 0, title= 'title'}: Props) => {
  return (
    <TouchableOpacity style={{
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
    },
})