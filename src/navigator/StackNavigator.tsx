import React from "react";

import { InicioScreen } from '../screens/InicioScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { HistoryScreen } from '../screens/HistoryScreen';
import { RegisterAdvanceScreen } from '../screens/RegisterAdvanceScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export const StackNavigator =() => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
        <Stack.Screen name="InicioScreen" component={ InicioScreen } />
        <Stack.Screen name="LoginScreen" component={ LoginScreen } />
        <Stack.Screen name="RegisterScreen" component={ RegisterScreen } />
        <Stack.Screen name="HistoryScreen" component={ HistoryScreen } />
        <Stack.Screen name="RegisterAdvanceScreen" component={ RegisterAdvanceScreen } />
    </Stack.Navigator>
  );
}

