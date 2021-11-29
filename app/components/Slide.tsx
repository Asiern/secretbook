import React, { Dispatch, SetStateAction } from 'react'
import { View, Dimensions } from 'react-native'
import { Wellcome, Passcode, Password, Path } from './slides'
import Constants from 'expo-constants'

const { width } = Dimensions.get('screen')

export interface ISlide {
    id: number
    state?: string
    action?: (value: string) => void
}

function getSlide({ id, state, action }: ISlide): React.ReactNode {
    switch (id) {
        case 0:
            return <Wellcome />
        case 1:
            return <Passcode state={state} action={action} />
        case 2:
            return <Password state={state} action={action} />
        case 3:
            return <Path state={state} action={action} />
        default:
            return null
    }
}

export function Slide(slide: ISlide) {
    return (
        <View
            style={{
                flex: 1,
                width,
                marginTop: Constants.statusBarHeight,
            }}
        >
            {getSlide(slide)}
        </View>
    )
}
