import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../customButton/CustomButton'

const SocialSignInButtons = () => {
    const onSignInFacebook = () => {
        console.warn("I found you on Facebook");
    }
    const onSignInGoogle = () => {
        console.warn("You just Googled me");
    }
    const onSignInApple = () => {
        console.warn("You just Pressed my Apple");
    }
    return (
        <>
            <CustomButton
                text={"Sign In with Facebook"}
                onPress={onSignInFacebook}
                bgColor='#E7EAF4'
                fgColor='#4765A9'
            />
            <CustomButton
                text={"Sign In with Google"}
                onPress={onSignInGoogle}
                bgColor='#FAE9EA'
                fgColor='#DD4D44'
            />
            <CustomButton
                text={"Sign In with Apple"}
                onPress={onSignInApple}
                bgColor='#E3E3E3'
                fgColor='#363636'
            />
        </>
    )
}

export default SocialSignInButtons