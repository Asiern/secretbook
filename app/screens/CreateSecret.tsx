import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { View, Text, StyleSheet, ToastAndroid } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, TextInput } from '../components'
import { h1, palette } from '../themes'
import { createSecret, ISecret } from '../utils'

export function CreateSecret() {
    const [name, setName] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const navigation = useNavigation()

    function addSecret() {
        const secret: ISecret = {
            name,
            description,
            password,
        }
        if (!createSecret(secret)) {
            // Could not create secret
            return
        }
        // Secret created
        // Show feedback
        ToastAndroid.showWithGravity(
            'New Secret Added',
            100,
            ToastAndroid.CENTER
        )
        // Return
        if (navigation.canGoBack()) navigation.goBack()
        else navigation.navigate('Home')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={h1}>Add new Secret</Text>
            <TextInput
                placeholder="Title"
                value={name}
                onChangeText={(text) => setName(text)}
                icon="tag"
            ></TextInput>
            <TextInput
                placeholder="Description"
                value={description}
                onChangeText={(text) => setDescription(text)}
                icon="info"
            ></TextInput>
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secure
                icon="lock"
            ></TextInput>
            <Button
                label="Add new Secret"
                name="plus"
                onPress={() => addSecret()}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.secondary,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
