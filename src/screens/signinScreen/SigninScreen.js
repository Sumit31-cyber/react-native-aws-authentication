import { StyleSheet, Text, View, Image, useWindowDimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/customInput/CustomInput'
import logo from '../../../assets/images/Logo_1.png'
import CustomButton from '../../components/customButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'



const SigninScreen = () => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation();

    const { height } = useWindowDimensions();

    const onSignInPressed = () => {
        navigation.navigate('HomeScreen')
    }
    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPasswordScreen')
    }
    const onSignUpPressed = () => {
        navigation.navigate('SignUpScreen')
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.root}>
                <Image style={[styles.logo, { height: height * 0.2 }]}
                    resizeMode='contain'
                    source={logo}
                />
                <CustomInput
                    placeholder={'UserName'}
                    value={userName}
                    setValue={setUserName}
                />
                <CustomInput
                    secureTextEntry={true}
                    placeholder={'Password'}
                    value={password}
                    setValue={setPassword}
                />
                <CustomButton
                    text={"Sign In"}
                    onPress={onSignInPressed}
                />
                <CustomButton
                    text={"Forgot password"}
                    onPress={onForgotPasswordPressed}
                    type='TERTIARY'
                />
                <SocialSignInButtons />
                <CustomButton
                    text={"Don't have an account ? Create One"}
                    onPress={onSignUpPressed}
                    type='TERTIARY'
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    }
})
export default SigninScreen
