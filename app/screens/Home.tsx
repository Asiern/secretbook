import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from '../components'
import { h1 } from '../themes'

export function Home() {
    const navigation = useNavigation()

    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: 'space-between',
                backgroundColor: '#FDF2F8',
                paddingVertical: 20,
            }}
        >
            <Text style={[h1, { alignSelf: 'center' }]}>Secret Book</Text>
            <View>
                <Button
                    label="Add New Secret"
                    name="plus"
                    onPress={() => navigation.navigate('CreateSecret')}
                />
                <Button
                    label="Open Secrets"
                    name="book"
                    onPress={() => navigation.navigate('Book')}
                />
            </View>
        </SafeAreaView>
    )
}
