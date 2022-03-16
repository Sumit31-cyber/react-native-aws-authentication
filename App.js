
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
} from 'react-native';
import SigninScreen from './src/screens/signinScreen/SigninScreen';
import SignUpScreen from './src/screens/signUpScreen';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen';

const App = () => {

  return (

    <SafeAreaView style={styles.root}>
      <StatusBar backgroundColor='#F9FBFC'
        barStyle={'dark-content'}
      />
      <NewPasswordScreen />
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
