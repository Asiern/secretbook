import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { Button, Slide } from '../components'
import Animated, {
    scrollTo,
    useAnimatedRef,
    useDerivedValue,
    useSharedValue,
} from 'react-native-reanimated'

import { palette } from '../themes'
import { useNavigation } from '@react-navigation/core'
import { ISettings, setSettings } from '../utils'

const { width } = Dimensions.get('screen')

const slides = ['1', '2', '3', '4']
export function Onboarding() {
    const navigation = useNavigation()
    const scroll = useAnimatedRef<Animated.ScrollView>()
    const x = useSharedValue(0)

    /**
     * Save settings and redirect to Home screen
     */
    async function send() {
        const settings: ISettings = {}
        await setSettings(settings)
        navigation.navigate('Home')
    }

    useDerivedValue(() => {
        scrollTo(scroll, x.value, 0, true)
    })

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
                        return <Slide key={i} id={i}></Slide>
                    })}
                </Animated.ScrollView>
            </Animated.View>
            <Animated.View style={styles.footer}>
                <Button
                    label={'Back'}
                    name={'arrow-left'}
                    onPress={() => {
                        if (x.value - width >= 0) x.value = x.value - width
                    }}
                />
                <Button
                    label={'Next'}
                    name={'arrow-right'}
                    onPress={async () => {
                        if (x.value + width < slides.length * width)
                            x.value = x.value + width
                        else await send()
                    }}
                    right
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
