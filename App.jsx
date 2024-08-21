/* eslint-disable react-native/no-inline-styles */


import {  Button, Text, View } from 'react-native';
import React from 'react';


const App = () => {
  return (
    <View>
  <Text style={{fontSize: 30 , backgroundColor: 'red' ,color: 'white', textAlign:'center' }} >App</Text>
  <Button title="Login Here" />
    </View>
  );
};

export default App;
