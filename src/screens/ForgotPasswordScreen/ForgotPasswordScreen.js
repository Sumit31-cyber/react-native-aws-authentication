import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/customInput/CustomInput'
import CustomButton from '../../components/customButton'
import { useNavigation } from '@react-navigation/native'



const ForgotPassword = () => {


    const [userName, setUserName] = useState('')

    const navigation = useNavigation();

    const onSignInPressed = () => {
        navigation.navigate('SignInScreen')
    }
    const onSendPressed = () => {
        navigation.navigate('NewPasswordScreen')
    }


    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.root}>
                <Text style={styles.title}>Reset Your Password</Text>
                <CustomInput
                    placeholder={'User Name*'}
                    value={userName}
                    setValue={setUserName}
                />

                <CustomButton
                    text={"Send"}
                    onPress={onSendPressed}
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
export default ForgotPassword
