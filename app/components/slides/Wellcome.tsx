import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { h1, p } from '../../themes'

export function Wellcome() {
    return (
        <View style={styles.container}>
            <Text style={[h1, { marginVertical: 20 }]}>
                Wellcome to Secret Book
            </Text>
            <Text style={p}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
