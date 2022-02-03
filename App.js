import { React } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Svg, { Path, Defs, Pattern, Use, Image, LinearGradient, Stop} from 'react-native-svg';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import home from './screens/home';
import register from './screens/register';
import analize from './screens/analize';
import historic from './screens/historic';

const Stack = createNativeStackNavigator();

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="register" component={register} />
      <Stack.Screen name="home" component={home} />
      <Stack.Screen name="analize" component={analize} />
      <Stack.Screen name="historic" component={historic} />
    </Stack.Navigator>
  );
}

export default function App() {

  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
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
  }
});
