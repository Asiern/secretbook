import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface IListItem {
    name: string
}
export function ListItem({ name }: IListItem) {
    return (
        <View style={styles.container}>
            <Text style={{ fontFamily: 'Regular' }}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        justifyContent: 'center',
        margin: 10,
        backgroundColor: '#f2f2f2',
        borderRadius: 15,
    },
})
