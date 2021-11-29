import React from 'react'
import { Feather } from '@expo/vector-icons'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ToastAndroid,
} from 'react-native'
import * as Clipboard from 'expo-clipboard'
import { palette } from '../themes'
import { decryptPassword, ISecret } from '../utils'

function copyToClipboard(password: string) {
    Clipboard.setString(decryptPassword(password))
    ToastAndroid.showWithGravity('Password copied!', 5, ToastAndroid.CENTER)
}

export function ListItem({ name, description, password }: ISecret) {
    return (
        <View style={styles.container}>
            <View style={styles.name}>
                <Text style={{ fontFamily: 'Regular' }}>{name}</Text>
            </View>
            <TouchableOpacity
                style={styles.icon}
                onPress={() => copyToClipboard(password)}
            >
                <Feather name="clipboard" size={25} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: 'center',
        marginHorizontal: 20,
        marginVertical: 10,
        backgroundColor: palette.primary,
        borderRadius: 15,
        flexDirection: 'row',
    },
    name: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
