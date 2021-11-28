import { Feather } from '@expo/vector-icons'
import { GLYPHS } from '@expo/vector-icons/createIconSet'
import React from 'react'
import { TextInputIOSProps, View, StyleSheet } from 'react-native'
import { TextInput as TI } from 'react-native-gesture-handler'

import { palette, p } from '../themes'

type onChangeText = (text: string) => void

interface Props {
    placeholder?: string
    value: string
    onChangeText: onChangeText
    icon?: GLYPHS
    secure?: boolean
    textContentType?: TextInputIOSProps
    error?: boolean
}

export const TextInput = ({
    placeholder,
    value,
    onChangeText,
    icon,
    secure,
    textContentType,
    error,
}: Props) => {
    return (
        <View style={[styles.container, error ? styles.errorBorder : null]}>
            <Feather
                name={icon}
                size={18}
                color={error ? palette.error : palette.active}
            />
            <TI
                style={[styles.input, p]}
                autoCapitalize="none"
                placeholder={placeholder}
                onChangeText={(text) => onChangeText(text)}
                value={value}
                placeholderTextColor={palette.inactive}
                secureTextEntry={secure}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 65,
        width: 300,
        backgroundColor: palette.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        margin: 20,
        paddingHorizontal: 10,
        shadowColor: palette.active,
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
        elevation: 1,
    },
    input: {
        flex: 1,
        marginLeft: 10,
        alignSelf: 'center',
    },
    errorBorder: {
        borderColor: palette.error,
        borderWidth: 1,
    },
})
