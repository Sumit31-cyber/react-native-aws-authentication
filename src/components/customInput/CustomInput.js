import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { Controller } from 'react-hook-form'

const CustomInput = ({ control, name, rules = {}, placeholder, secureTextEntry }) => {
    return (

        <Controller
            rules={rules}
            control={control}
            name={name}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <React.Fragment>

                    <View style={[styles.container, { borderColor: error ? 'red' : '#E8E8E8' }]}>
                        <TextInput
                            style={[styles.input]}
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            secureTextEntry={secureTextEntry}
                            placeholder={placeholder} />
                    </View>
                    {error && (
                        <Text style={{ color: 'red', alignSelf: 'stretch' }}>{error.message || 'Error'}</Text>
                    )}
                </React.Fragment>
            )}
        />
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
