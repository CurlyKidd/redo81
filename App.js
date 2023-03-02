import *as React from 'react';
import BottomTabNavigator from './navigation/bottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
   <NavigationContainer>
    <BottomTabNavigator/>
   </NavigationContainer>
  );
}


