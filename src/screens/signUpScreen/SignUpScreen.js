import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/customInput/CustomInput'
import CustomButton from '../../components/customButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'






const SignUpScreen = () => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [confirmPass, setConfirmPass] = useState('')

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
                    placeholder={'UserName'}
                    value={userName}
                    setValue={setUserName}
                />
                <CustomInput
                    placeholder={'email'}
                    value={email}
                    setValue={setEmail}
                />
                <CustomInput
                    secureTextEntry={true}
                    placeholder={'Password'}
                    value={password}
                    setValue={setPassword}
                />
                <CustomInput
                    secureTextEntry={true}
                    placeholder={'Confirm Password'}
                    value={confirmPass}
                    setValue={setConfirmPass}
                />
                <CustomButton
                    text={"Register"}
                    onPress={onRegisterPressed}
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
