import React, { Dispatch, SetStateAction } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from '..'
import { h1, p } from '../../themes'

interface IPassword {
    state: string | null
    action: Dispatch<SetStateAction<string>> | null
}

export function Password({ state }: IPassword) {
    return (
        <View style={styles.container}>
            <Text style={[h1, { marginTop: 20 }]}>Encryption Key Setup</Text>
            <TextInput
                placeholder="Encryption Key"
                value=""
                onChangeText={() => null}
                icon="key"
            />
            <Text style={[p, { textAlign: 'center' }]}>
                This key will be used to encrypt all your passwords.
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
