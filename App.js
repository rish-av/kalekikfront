import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Navigation';
import { Provider } from 'react-redux';
import { Store } from './.expo/screen/components/redux/Store';

const App = () => {
  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>
  );
}

const styles = StyleSheet.create({

});


export default App;