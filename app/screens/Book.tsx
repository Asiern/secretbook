import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Button, ListItem } from '../components'
import { secrets } from '../data/secrets'
import { ISecret } from '../utils'

export function Book() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <ScrollView style={styles.list}>
                {/* TODO map secrets */}
                {secrets.map(({ name, description, password }: ISecret) => {
                    return (
                        <ListItem
                            name={name}
                            description={description}
                            password={password}
                        />
                    )
                })}
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
