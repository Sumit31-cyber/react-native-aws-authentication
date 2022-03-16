import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, text, type = 'PRIMARY', bgColor, fgColor }) => {
    return (
        <Pressable style={[
            styles.container,
            styles[`container_${type}`],
            bgColor ? { backgroundColor: bgColor } : {}]}
            onPress={onPress}
        >
            <Text style={[
                styles.text,
                styles[`text_${type}`],
                fgColor ? { color: fgColor } : {}
            ]}>{text}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 18,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 12,
    },
    container_PRIMARY: {
        backgroundColor: '#bd8aff',
    },
    container_TERTIARY: {
    },
    container_SECONDARY: {
        borderColor: "#bd8aff",
        borderWidth: 2
    },
    text: {
        fontWeight: 'bold',
        color: '#ffff',

        textTransform: 'uppercase',
        letterSpacing: 1.5
    },
    text_TERTIARY: {
        color: 'grey',
        textTransform: 'capitalize',

    },
    text_SECONDARY: {
        color: '#bd8aff',

    },
})

export default CustomButton 
