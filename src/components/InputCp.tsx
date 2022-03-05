import React, { useState } from "react";
import { TextInput } from "react-native";

interface Props {
  width?: string | number,
  height?: string | number,
  bottom?: string | number,
  textInput?: string,
}


export const InputCp = ({width = '50%', height = '50%', bottom = 0, textInput = 'Text'}: Props) => {
  const [text, onChangeText] = useState(textInput);

  return (
   
    <TextInput
      style={{
        height: height,
        width: width,
        padding: 10,
        bottom: bottom,
        alignSelf: 'center',
        position: 'absolute',
        backgroundColor: '#F5F5F5',
        color: '#9E9E9E',
        borderRadius: 10,
      }}
      onChangeText={onChangeText}
      value={text}
    />
  );
};
