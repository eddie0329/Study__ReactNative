import React from 'react';
import CatDog from './components/CatDog';
import InputTest from './components/InputTest';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <CatDog />
      <InputTest />
    </View>
  );
};

export default App;
