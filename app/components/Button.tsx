import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { h2, palette } from '../themes'
import { Feather } from '@expo/vector-icons'

interface IButton {
    label: string // Button label
    name?: string // Icon name
    onPress: () => void // On press action
    right?: boolean // Icon position
    disable?: boolean // Button status
}

export function Button({ label, name, onPress, right, disable }: IButton) {
    return (
        <TouchableOpacity
            disabled={disable}
            onPress={() => onPress()}
            style={[
                styles.container,
                disable ? styles.containerDisable : styles.containerEnable,
            ]}
        >
            {right || name === undefined ? null : (
                <Feather name={name} size={25} style={{ marginRight: 10 }} />
            )}
            <Text style={h2}>{label}</Text>
            {!right || name === undefined ? null : (
                <Feather name={name} size={25} style={{ marginLeft: 10 }} />
            )}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 25,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerDisable: {
        backgroundColor: palette.secondary,
    },
    containerEnable: {
        backgroundColor: palette.primary,
        shadowColor: '#2e2e2e',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
        elevation: 1,
    },
})
