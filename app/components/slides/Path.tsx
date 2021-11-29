import React, { Dispatch, SetStateAction } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from '..'
import { h1, p } from '../../themes'

interface IPath {
    state: string
    action: Dispatch<SetStateAction<string>>
}

export function Path({ state }: IPath) {
    return (
        <View style={styles.container}>
            <Text style={[h1, { marginTop: 20 }]}>Secret Book Location</Text>
            <TextInput
                placeholder="Folder path"
                value={state}
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
