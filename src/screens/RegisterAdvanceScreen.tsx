import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native';

export const RegisterAdvanceScreen = () => {

    const [matriz, setMatriz] = useState([
        { name: 'hola', key:'1', action: <Text style={{fontSize:110}}>holibro1</Text>},
        { name: 'hola2', key:'2', action: <Text style={{fontSize:110}}>holibro2</Text>},
        { name: 'hola3', key:'3', action: <Text style={{fontSize:110}}>holibro3</Text>},
        { name: 'hola', key:'4', action: <Text style={{fontSize:110}}>holibro1</Text>},
        { name: 'hola2', key:'5', action: <Text style={{fontSize:110}}>holibro2</Text>},
        { name: 'hola3', key:'6', action: <Text style={{fontSize:110}}>holibro3</Text>},
        { name: 'hola', key:'7', action: <Text style={{fontSize:110}}>holibro1</Text>},
        { name: 'hola2', key:'8', action: <Text style={{fontSize:110}}>holibro2</Text>},
        { name: 'hola3', key:'9', action: <Text style={{fontSize:110}}>holibro3</Text>},
        { name: 'hola', key:'10', action: <Text style={{fontSize:110}}>holibro1</Text>},
        { name: 'hola2', key:'11', action: <Text style={{fontSize:110}}>holibro2</Text>},
        { name: 'hola3', key:'12', action: <Text style={{fontSize:110}}>holibro3</Text>},
    ]);

    return (
    <View>
        <ScrollView>
            { matriz.map((item) => {
                return (
                    <View key = {item.key}>
                    {item.action}
                    </View>
                    )
                })
            }
        </ScrollView>
    </View>
    );
}
