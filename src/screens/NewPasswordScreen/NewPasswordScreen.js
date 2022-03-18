import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/customInput/CustomInput'
import CustomButton from '../../components/customButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'





const NewPasswordScreen = () => {
    const { control, handleSubmit, formState: { errors } } = useForm();

    // const [code, setCode] = useState('')
    // const [newPasseord, setNewPasseord] = useState('')

    const navigation = useNavigation()
    const onSignInPressed = () => {
        navigation.navigate('SignInScreen')
    }
    const onSubmitPressed = () => {
        navigation.navigate('HomeScreen')
    }
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.root}>
                <Text style={styles.title}>Reset Your Password</Text>
                {/* <CustomInput
                    placeholder={'Code*'}
                    value={code}
                    setValue={setCode}
                /> */}
                <CustomInput
                    rules={{ required: 'Please Enter Verification Code' }}
                    name="Code"
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
    }
})
export default NewPasswordScreen
