import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Auth } from 'aws-amplify'

const HomeScreen = () => {
    const signOut = () => {
        Auth.signOut();
    }
    return (
        <View style={styles.contianer}>
            <Text
                style={{
                    fontSize: 25,
                    color: 'black',
                    letterSpacing: 3,
                    textTransform: 'uppercase'
                }}
            >Home Sweet Home-- </Text>
            <Text style={{
                width: '100%',
                textAlign: 'center',
                color: 'red',
                marginTop: 100,
                marginVertical: 20,
                fontSize: 20,
                letterSpacing: 1.2,
                textTransform: 'capitalize'
            }}
                onPress={signOut}
            >sign out</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    contianer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default HomeScreen
