import { StyleSheet, Text, View, Image, useWindowDimensions, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/customInput/CustomInput'
import logo from '../../../assets/images/Logo_1.png'
import CustomButton from '../../components/customButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'



const SigninScreen = () => {

    // const [userName, setUserName] = useState('')
    // const [password, setPassword] = useState('')

    const { control, handleSubmit, formState: { errors } } = useForm();

    const navigation = useNavigation();

    const { height } = useWindowDimensions();

    console.log(errors);
    const onSignInPressed = (data) => {
        console.log(data)
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
                    rules={{ required: 'User Name is required' }}
                    name="username"
                    placeholder={'UserName'}
                    control={control}
                />
                <CustomInput
                    rules={{ required: 'Password is required', minLength: { value: 4, message: 'Password shoult be minimum 4 character long' } }}
                    name="password"
                    secureTextEntry={true}
                    placeholder={'Password'}
                    control={control}
                />



                <CustomButton
                    text={"Sign In"}
                    onPress={handleSubmit(onSignInPressed)}
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
