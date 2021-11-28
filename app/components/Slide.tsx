import React from 'react'
import { View, Dimensions } from 'react-native'
import { Wellcome, Passcode, Password, Path } from './slides'
import Constants from 'expo-constants'

const { width } = Dimensions.get('screen')

export interface ISlide {
    id: number
}

function getSlide(id: number): React.ReactNode {
    switch (id) {
        case 0:
            return <Wellcome />
        case 1:
            return <Passcode />
        case 2:
            return <Password />
        case 3:
            return <Path />
        default:
            return null
    }
}

export function Slide({ id }: ISlide) {
    return (
        <View
            style={{
                flex: 1,
                width,
                marginTop: Constants.statusBarHeight,
            }}
        >
            {getSlide(id)}
        </View>
    )
}
