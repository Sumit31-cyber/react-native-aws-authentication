import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
    return (
        <View>
            <Text>Home Sweet Home</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    contianer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
})

export default HomeScreen
