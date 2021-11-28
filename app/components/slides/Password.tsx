import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from '..'
import { h1, p } from '../../themes'

export function Password() {
    return (
        <View style={styles.container}>
            <Text style={[h1, { marginTop: 20 }]}>Password setup</Text>
            <TextInput
                placeholder="Password"
                value=""
                onChangeText={() => null}
                icon="key"
            />
            <Text style={[p, { textAlign: 'center' }]}>
                Password will be used to encrypt all your passwords.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
})
