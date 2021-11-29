import React, { useCallback, useState } from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { Button, ISlide, Slide } from '../components'
import Animated, {
    scrollTo,
    useAnimatedRef,
    useDerivedValue,
    useSharedValue,
} from 'react-native-reanimated'

import { palette } from '../themes'
import { useNavigation } from '@react-navigation/core'
import { ISettings, setSettings, generatePhrase, hasBiometric } from '../utils'

const { width } = Dimensions.get('screen')

export function Onboarding() {
    const [passcode, setPasscode] = useState<string>('1234')
    const wrapperSetPasscode = useCallback(
        (value) => {
            setPasscode(value)
        },
        [setPasscode]
    )
    const [password, setPassword] = useState<string>('passwordasd')
    const [path, setPath] = useState<string>('path')
    const [index, setIndex] = useState<number>(0)

    function actionPasscode(value: string) {
        setPasscode(value)
    }
    const slides: ISlide[] = [
        { id: 0 },
        { id: 1, state: passcode, action: actionPasscode },
        { id: 2, state: password, action: actionPasscode },
        { id: 3, state: path, action: actionPasscode },
    ]
    const navigation = useNavigation()
    const scroll = useAnimatedRef<Animated.ScrollView>()
    const x = useSharedValue(0)

    /**
     * Save settings and redirect to Home screen
     */
    async function send() {
        const settings: ISettings = {
            path,
            phrase: generatePhrase(passcode),
            biometric: await hasBiometric(),
        }
        await setSettings(settings)
        navigation.navigate('Home')
    }

    useDerivedValue(() => {
        scrollTo(scroll, x.value, 0, true)
    })

    function canContinue(): boolean {
        switch (index) {
            case 0:
                return true
            case 1:
                return passcode.length === 4
            case 2:
                return password.length > 8 && password.length < 16
            case 3:
                return path !== ''
            default:
                return false
        }
    }

    return (
        <Animated.View style={styles.container}>
            <Animated.View style={styles.slides}>
                <Animated.ScrollView
                    ref={scroll}
                    horizontal
                    pagingEnabled
                    bounces={false}
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={width}
                    decelerationRate="fast"
                    scrollEventThrottle={16}
                    scrollEnabled={false}
                >
                    {slides.map((item, i) => {
                        return <Slide key={i} id={i} state={item.state}></Slide>
                    })}
                </Animated.ScrollView>
            </Animated.View>
            <Animated.View style={styles.footer}>
                <Button
                    label={'Back'}
                    name={'arrow-left'}
                    onPress={() => {
                        if (x.value - width >= 0) {
                            x.value = x.value - width
                            setIndex(index - 1)
                        }
                    }}
                    disable={index === 0}
                />
                <Button
                    label={index === slides.length - 1 ? 'Finish' : 'Next'}
                    name={index === slides.length - 1 ? 'check' : 'arrow-right'}
                    onPress={async () => {
                        if (x.value + width < slides.length * width) {
                            x.value = x.value + width
                            setIndex(index + 1)
                        } else await send()
                    }}
                    right
                    disable={!canContinue()}
                />
            </Animated.View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.secondary,
    },
    slides: {
        flex: 1,
        backgroundColor: palette.primary,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        shadowColor: '#2e2e2e',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
        elevation: 1,
    },
    footer: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})
