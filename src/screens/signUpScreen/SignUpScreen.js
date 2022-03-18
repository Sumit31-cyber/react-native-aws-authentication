import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/customInput/CustomInput'
import CustomButton from '../../components/customButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const SignUpScreen = () => {

    const { control, handleSubmit, watch } = useForm();
    const pwd = watch('password')
    // const [userName, setUserName] = useState('')
    // const [password, setPassword] = useState('')
    // const [email, setEmail] = useState('')
    // const [confirmPass, setConfirmPass] = useState('')

    const navigation = useNavigation();

    const onRegisterPressed = () => {
        navigation.navigate('ConfirmEmailScreen')
    }
    const onSignInPressed = () => {
        navigation.navigate('SignInScreen')
    }
    const onTermOfUsePressed = () => {
        console.warn("On Term of use Pressed");
    }
    const onPrivecyPressed = () => {
        console.warn("Privecy ");
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.root}>
                <Text style={styles.title}>Create an account</Text>
                <CustomInput
                    rules={{ required: 'Please Enter User name to continue*' }}
                    name="username"
                    placeholder={'UserName'}
                    control={control}
                />
                <CustomInput
                    rules={{
                        required: 'Email is required',
                        pattern: { value: EMAIL_REGEX, message: 'Email is invalid' }
                    }}
                    name="email"
                    placeholder={'Email'}
                    control={control}
                />
                <CustomInput
                    rules={{
                        required: 'Please Enter password to continue*',
                        minLength: {
                            value: 8,
                            message: 'Password shuold be at leasr 8 characters long'
                        }
                    }}
                    name="password"
                    secureTextEntry={true}
                    placeholder={'Password is required'}
                    control={control}
                />
                <CustomInput
                    rules={{
                        validate: value => value === pwd || 'password do not match',
                    }}
                    name="confirmPassword"
                    secureTextEntry={true}
                    placeholder={'Enter your confirmation code'}
                    control={control}
                />
                <CustomButton
                    text={"Register"}
                    onPress={handleSubmit(onRegisterPressed)}
                />
                <Text style={styles.text} >By Registering confirms that you accept out<Text style={styles.link} onPress={onTermOfUsePressed}> Terms of Use</Text>
                    {' and '}
                    <Text style={styles.link} onPress={onPrivecyPressed}>Privecy Policy</Text></Text>

                <SocialSignInButtons />

                <CustomButton
                    text={"Have an account ? Sign In"}
                    onPress={onSignInPressed}
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
    title: {
        fontSize: 24,
        color: '#051C60',
        margin: 10,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginVertical: 10
    },
    link: {
        color: '#FDB075'
    }
})
export default SignUpScreen
