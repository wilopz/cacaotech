import React from "react";

import { InicioScreen } from '../screens/InicioScreen';
import { Screen2 } from '../screens/Screen2';
import { Screen3 } from '../screens/Screen3';
import { Screen4 } from '../screens/Screen4';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const StackNavigator =() => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }
      }
    >
        <Stack.Screen name="InicioScreen" component={ InicioScreen } />
        <Stack.Screen name="Screen2" component={ Screen2 } />
        <Stack.Screen name="Screen3" component={ Screen3 } />
        <Stack.Screen name="Screen4" component={ Screen4 } />
    </Stack.Navigator>
  );
}

