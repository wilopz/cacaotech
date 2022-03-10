/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';

interface Props {
    height?: string | number,
    border_radius?: number,
    bottom?: string | number
}

export const PanelCp = ( {height = '50%', bottom = 0}: Props) => {
  return (
    <View style={{
      width: '100%', 
      height: height,
      backgroundColor: 'white',
      alignSelf: 'center',
      position: 'absolute',
      bottom: bottom,
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
    }}/> 
  )
}
