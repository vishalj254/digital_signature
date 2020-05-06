/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Main from './components/Main';


const App= ()=> {
  console.disableYellowBox=true
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Main />
    </>
  );
};

export default App;
