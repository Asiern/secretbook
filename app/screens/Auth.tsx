import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    Vibration,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { h1, palette } from '../themes'
import { biometricAuth } from '../utils'
import { Feather } from '@expo/vector-icons'

const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, 'delete']
const width = Dimensions.get('screen').width / 3 - 15
const dotSize = 20

export function Auth() {
    const [pass, setPass] = useState<string[]>(['', '', '', ''])
    const [pos, setPos] = useState<number>(-1)
    useEffect(() => {
        const authenticate = async () => {
            try {
                const result = biometricAuth()
                console.log(result)
            } catch (err) {
                console.log(err)
            }
        }
    }, [])

    function onBtnPress(value: string) {
        const p = pass
        switch (value) {
            case 'delete':
                if (pos === -1) break
                p[pos] = ''
                setPos(pos - 1)
                setPass(p)
                break
            default:
                p[pos] = value
                setPass(p)
                setPos(pos + 1)
                if (pos + 1 === pass.length - 1) console.log('authenticate')
                break
        }
        Vibration.vibrate(20)
    }

    return (
        <SafeAreaView
            style={{
                justifyContent: 'space-between',
                flex: 1,
                backgroundColor: palette.secondary,
                alignItems: 'center',
            }}
        >
            <View
                style={{
                    flex: 1,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Text style={[h1, { paddingVertical: 20, marginTop: 30 }]}>
                    Setup PIN
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        paddingHorizontal: 20,
                        justifyContent: 'flex-end',
                    }}
                >
                    {pass.map((_, i) => {
                        return (
                            <View
                                key={i}
                                style={{
                                    height: dotSize,
                                    width: dotSize,
                                    backgroundColor:
                                        i <= pos
                                            ? palette.active
                                            : palette.primary,
                                    borderRadius: 20,
                                    marginHorizontal: 15,
                                }}
                            ></View>
                        )
                    })}
                </View>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    paddingHorizontal: 20,
                    justifyContent: 'center',
                }}
            >
                {buttons.map((item, i) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                item === '' ? null : onBtnPress(item.toString())
                            }
                            key={i}
                            style={{
                                width,
                                height: width,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            {item === '' || item === 'delete' ? (
                                <Feather name={item} size={25} />
                            ) : (
                                <Text style={h1}>{item}</Text>
                            )}
                        </TouchableOpacity>
                    )
                })}
            </View>
        </SafeAreaView>
    )
}
