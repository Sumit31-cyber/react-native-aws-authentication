
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
} from 'react-native';
import Navigation from './src/Navigation';

const App = () => {

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar backgroundColor='#F9FBFC'
        barStyle={'dark-content'}
      />
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#F9FBFC',
    flex: 1
  }
});

export default App;
