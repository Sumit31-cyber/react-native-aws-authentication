import { StyleSheet, Text, View, Image, useWindowDimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/customInput/CustomInput'
import logo from '../../../assets/images/Logo_1.png'
import CustomButton from '../../components/customButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'

const onSignInPressed = () => {
    console.warn("You Just Pressed me");
}
const onForgotPasswordPressed = () => {
    console.warn("You Forgot to Press me");
}
const onSignUpPressed = () => {
    console.warn("You just Signed me to Cum inside");
}



const SigninScreen = () => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const { height } = useWindowDimensions();
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.root}>
                <Image style={[styles.logo, { height: height * 0.3 }]}
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
