import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/customInput/CustomInput'
import CustomButton from '../../components/customButton'
import { useNavigation, useRoute } from '@react-navigation/native'

import { useForm } from 'react-hook-form'
import { Auth } from 'aws-amplify'





const ConfirmEmailScreen = () => {
    const route = useRoute();
    const { control, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: { username: route?.params?.username }
    });

    const username = watch('username')

    const navigation = useNavigation();

    const onConfirmPressed = async (data) => {
        try {
            const response = await Auth.confirmSignUp(data.username, data.code)
            navigation.navigate('SignInScreen')

        } catch (e) {
            Alert.alert('opps...', e.message)
        }
    }
    const onSignInPressed = () => {
        navigation.navigate('SignInScreen')
    }
    const onResendPressed = async () => {
        try {
            await Auth.resendSignUp(username)
            Alert.alert('SUCCESS', 'Code is resend to your email')

        } catch (e) {
            Alert.alert('opps...', e.message)
        }
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Confirm Your Email</Text>
                {/* <CustomInput
                    placeholder={'Enter your confirmation code'}
                    value={code}
                    setValue={setCode}
                /> */}
                <CustomInput
                    rules={{ required: 'Please Enter username to continue' }}
                    name="username"
                    placeholder={'Enter your User Name'}
                    control={control}
                />
                <CustomInput
                    rules={{ required: 'Please Enter code to continue' }}
                    name="code"
                    placeholder={'Enter your confirmation code'}
                    control={control}
                />
                <CustomButton
                    text={"Confirm"}
                    onPress={handleSubmit(onConfirmPressed)}
                />
                <CustomButton
                    text={"Resend Code"}
                    onPress={onResendPressed}
                    type='SECONDARY'
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
    }
})
export default ConfirmEmailScreen
