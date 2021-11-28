import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from '..'
import { h1, p } from '../../themes'

export function Passcode() {
    return (
        <View style={styles.container}>
            <Text style={[h1, { marginTop: 20 }]}>Passcode setup</Text>
            <TextInput
                placeholder="Passcode"
                value=""
                onChangeText={() => null}
                icon="lock"
            />
            <Text style={[p, { textAlign: 'center' }]}>
                Passcode will be used to unlock the secret book.{'\n'}
                Passcode is composed by 4 digits.
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
