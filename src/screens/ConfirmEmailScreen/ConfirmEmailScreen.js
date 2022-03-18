import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/customInput/CustomInput'
import CustomButton from '../../components/customButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'

import { useForm } from 'react-hook-form'





const ConfirmEmailScreen = () => {
    const { control, handleSubmit, formState: { errors } } = useForm();

    // const [code, setCode] = useState('')

    const navigation = useNavigation();

    const onConfirmPressed = () => {
        navigation.navigate('HomeScreen')
    }
    const onSignInPressed = () => {
        navigation.navigate('SignInScreen')
    }
    const onResendPressed = () => {
        console.warn("Resend");
    }
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.root}>
                <Text style={styles.title}>Confirm Your Email</Text>
                {/* <CustomInput
                    placeholder={'Enter your confirmation code'}
                    value={code}
                    setValue={setCode}
                /> */}
                <CustomInput
                    rules={{ required: 'Please Enter code to continue' }}
                    name="username"
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
