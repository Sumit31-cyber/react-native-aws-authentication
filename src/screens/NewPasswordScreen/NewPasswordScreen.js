import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/customInput/CustomInput'
import CustomButton from '../../components/customButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'


const onSignInPressed = () => {
    console.warn("You just Pressed SignIn");
}
const onSubmitPressed = () => {
    console.warn("Submitting....");
}


const NewPasswordScreen = () => {

    const [code, setCode] = useState('')
    const [newPasseord, setNewPasseord] = useState('')
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.root}>
                <Text style={styles.title}>Reset Your Password</Text>
                <CustomInput
                    placeholder={'Code*'}
                    value={code}
                    setValue={setCode}
                />
                <CustomInput
                    placeholder={'Enter Your New Password*'}
                    value={newPasseord}
                    setValue={setNewPasseord}
                />

                <CustomButton
                    text={"Submit"}
                    onPress={onSubmitPressed}
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
export default NewPasswordScreen
