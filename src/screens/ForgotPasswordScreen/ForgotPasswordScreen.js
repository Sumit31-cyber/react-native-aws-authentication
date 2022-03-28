import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/customInput/CustomInput'
import CustomButton from '../../components/customButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { Auth } from 'aws-amplify'
import { Alert } from 'react-native'



const ForgotPassword = () => {
    const { control, handleSubmit, formState: { errors } } = useForm();


    // const [userName, setUserName] = useState('')

    const navigation = useNavigation();


    const onSendPressed = async (data) => {
        try {
            await Auth.forgotPassword(data.username)
            navigation.navigate('NewPasswordScreen')

        } catch (e) {
            Alert.alert('opps...', e.message)
        }

    }

    const onSignInPressed = () => {
        navigation.navigate('SignInScreen')
    }


    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.root}>
                <Text style={styles.title}>Reset Your Password</Text>

                <CustomInput
                    rules={{ required: 'Please Enter User name to continue*' }}
                    name="username"
                    placeholder={'UserName'}
                    control={control}
                />

                <CustomButton
                    text={"Send"}
                    onPress={handleSubmit(onSendPressed)}
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
