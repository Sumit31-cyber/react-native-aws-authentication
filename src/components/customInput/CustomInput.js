import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <TextInput
                secureTextEntry={secureTextEntry}
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={setValue}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#E8E8E8',
        borderRadius: 12,
        borderWidth: 1,
        paddingHorizontal: 10,
        marginVertical: 5
    },
    input: {

    },

})
export default CustomInput
