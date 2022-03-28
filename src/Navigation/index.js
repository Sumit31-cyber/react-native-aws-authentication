import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import SigninScreen from '../screens/signinScreen/SigninScreen'
import SignUpScreen from '../screens/signUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import { Auth, Hub } from 'aws-amplify';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Navigation = () => {

    const [user, setUser] = useState(undefined);

    const checkUser = async () => {
        try {
            const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
            setUser(authUser);
        } catch (e) {
            setUser(null)
        }

    }

    useEffect(() => {
        checkUser();
    }, []);

    useEffect(() => {
        const listner = (data) => {
            if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
                checkUser();
            }
        }
        Hub.listen('auth', listner);
        return () => Hub.remove('auth', listner)
    }, [])
    const Stack = createNativeStackNavigator();
    if (user === undefined) {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ActivityIndicator
                />
            </View>
        )
    }
    return (
        <NavigationContainer>

            <Stack.Navigator initialRouteName='SignInScreen' screenOptions={{ headerShown: false }}>
                {user ? (<Stack.Screen name="HomeScreen" component={HomeScreen} />) : (
                    <React.Fragment>
                        <Stack.Screen name="SignInScreen" component={SigninScreen} />
                        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
                        <Stack.Screen name="ConfirmEmailScreen" component={ConfirmEmailScreen} />
                        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
                        <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
                    </React.Fragment>
                )}


            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation