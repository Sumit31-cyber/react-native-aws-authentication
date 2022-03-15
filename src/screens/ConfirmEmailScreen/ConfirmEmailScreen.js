import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/customInput/CustomInput'
import CustomButton from '../../components/customButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'


const onConfirmPressed = () => {
    console.warn("Confirmed");
}
const onSignInPressed = () => {
    console.warn("You just Pressed SignIn");
}
const onResendPressed = () => {
    console.warn("Resend");
}


const ConfirmEmailScreen = () => {

    const [code, setCode] = useState('')
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.root}>
                <Text style={styles.title}>Confirm Your Email</Text>
                <CustomInput
                    placeholder={'Enter your confirmation code'}
                    value={code}
                    setValue={setCode}
                />

                <CustomButton
                    text={"Confirm"}
                    onPress={onConfirmPressed}
                />

                <CustomButton
                    text={"Resend Code"}
                    onPress={onSignInPressed}
                    type='SECONDARY'
                />
                <CustomButton
                    text={"Back to Sign in"}
                    onPress={onResendPressed}
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
