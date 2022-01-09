import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React from 'react';


import Home from './src/pages/home'

export default function App() {
  return (
    <>
      <StatusBar hidden={true}/>
      <Home/>
    </>
  );
}

