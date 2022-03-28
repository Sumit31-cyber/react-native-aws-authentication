import { StyleSheet, Text, View, ScrollView, Image, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import logo from '../../../assets/images/reset_pass.png'
import CustomInput from '../../components/customInput/CustomInput'
import CustomButton from '../../components/customButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { Auth } from 'aws-amplify'
import { Alert } from 'react-native'




const NewPasswordScreen = () => {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const { height } = useWindowDimensions();

    // const [code, setCode] = useState('')
    // const [newPasseord, setNewPasseord] = useState('')

    const navigation = useNavigation()
    const onSignInPressed = () => {
        navigation.navigate('SignInScreen')
    }
    const onSubmitPressed = async (data) => {
        try {
            await Auth.forgotPasswordSubmit(data.username, data.code, data.password)
            navigation.navigate('SignInScreen')
        } catch (e) {
            Alert.alert('opps...', e.message)
        }
    }
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <View style={{
                marginTop: 5,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image style={[styles.logo, { height: height * 0.3 }]}
                    resizeMode='contain'
                    source={logo}
                />
            </View>

            <View style={styles.root}>
                <Text style={styles.title}>Reset Your Password</Text>
                {/* <CustomInput
                    placeholder={'Code*'}
                    value={code}
                    setValue={setCode}
                /> */}
                <CustomInput
                    rules={{ required: 'Please Enter Username' }}
                    name="username"
                    placeholder={'UserName'}
                    control={control}
                />
                <CustomInput
                    rules={{ required: 'Please Enter Verification Code' }}
                    name="code"
                    placeholder={'Code'}
                    control={control}
                />
                {/* <CustomInput
                    placeholder={'Enter Your New Password*'}
                    value={newPasseord}
                    setValue={setNewPasseord}
                /> */}
                <CustomInput
                    rules={{ required: 'Please Enter password to continue*' }}
                    name="password"
                    secureTextEntry={true}
                    placeholder={'password'}
                    control={control}
                />

                <CustomButton
                    text={"Submit"}
                    onPress={handleSubmit(onSubmitPressed)}
                />

                <CustomButton
                    text={"Back to Sign in"}
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
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    }
})
export default NewPasswordScreen
