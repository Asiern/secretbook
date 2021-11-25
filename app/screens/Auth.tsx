import { LocalAuthenticationOptions } from 'expo-local-authentication'
import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { biometricAuth } from '../utils'
export function Auth() {
    useEffect(() => {
        const authenticate = async () => {
            try {
                const result = biometricAuth()
                console.log(result)
            } catch (err) {
                console.log(err)
            }
        }
    }, [])

    return (
        <View>
            <Text>Auth</Text>
        </View>
    )
}
