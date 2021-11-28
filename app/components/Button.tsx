import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { h2 } from '../themes'
import { Feather } from '@expo/vector-icons'

interface IButton {
    label: string
    name: string
    onPress: () => void
    right?: boolean
}

export function Button({ label, name, onPress, right }: IButton) {
    return (
        <TouchableOpacity
            onPress={() => onPress()}
            style={{
                padding: 25,
                backgroundColor: '#FCE7F3',
                marginHorizontal: 20,
                marginVertical: 10,
                borderRadius: 15,
                shadowColor: '#2e2e2e',
                shadowOffset: { width: 5, height: 5 },
                shadowOpacity: 1,
                elevation: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {right ? null : (
                <Feather name={name} size={25} style={{ marginRight: 10 }} />
            )}
            <Text style={h2}>{label}</Text>
            {right ? (
                <Feather name={name} size={25} style={{ marginLeft: 10 }} />
            ) : null}
        </TouchableOpacity>
    )
}
