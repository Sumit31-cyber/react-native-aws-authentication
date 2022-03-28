
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
} from 'react-native';
import Navigation from './src/Navigation';
import Amplify from 'aws-amplify';
import config from './src/aws-exports';

Amplify.configure(config);

const App = () => {
  // Auth.signOut();

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
