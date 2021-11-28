import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, TextInput } from '..'
import { h1, p } from '../../themes'

export function Path() {
    return (
        <View style={styles.container}>
            <Text style={[h1, { marginTop: 20 }]}>Secret Book Location</Text>
            <TextInput
                placeholder="Folder path"
                value=""
                onChangeText={() => null}
                icon="folder"
            />
            <Text style={[p, { textAlign: 'center' }]}>
                Determine where your encrypted passwords will be stored.
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
