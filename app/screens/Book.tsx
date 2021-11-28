import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Button } from '../components'

export function Book() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <ScrollView style={styles.list}>
                {/* TODO map secrets */}
            </ScrollView>
            <Button
                label="Add New Secret"
                name="plus"
                onPress={() => navigation.navigate('CreateSecret')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
    },
    list: {
        flex: 1,
    },
})
