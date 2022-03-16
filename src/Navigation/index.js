import { View, Text } from 'react-native'
import React from 'react'
import SigninScreen from '../screens/signinScreen/SigninScreen'
import SignUpScreen from '../screens/signUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Navigation = () => {

    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>

            <Stack.Navigator initialRouteName='SignInScreen' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="SignInScreen" component={SigninScreen} />
                <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
                <Stack.Screen name="ConfirmEmailScreen" component={ConfirmEmailScreen} />
                <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
                <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation