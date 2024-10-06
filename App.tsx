import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from './assets/screens/TelaInicial';
import ProdutosScreen from './assets/screens/ProdutosScreen';
import AvaliacaoScreen from './assets/screens/AvaliacaoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen
          name="Tela Inicial"
          component={TelaInicial}
          options={{
            title: 'Tela Inicial',
            headerStyle: {
              backgroundColor: '#8a5cb3',
            },
          }}
        />
        <Stack.Screen
          name="ProdutosScreen"
          component={ProdutosScreen}
          options={{
            title: 'Produtos',
            headerStyle: {
              backgroundColor: '#8a5cb3',
            },
          }}
        />
        <Stack.Screen
          name="AvaliacaoScreen"
          component={AvaliacaoScreen}
          options={{
            title: 'Feedback',
            headerStyle: {
              backgroundColor: '#8a5cb3',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
