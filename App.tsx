import React, { useState } from 'react'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'

import AuthContext from './app/context/AuthContext'
import SettingsContext from './app/context/SettingsContext'
import Router from './app/router/Router'
import { ISettings } from './app/utils'

export default function App() {
    const [isAuth, setAuth] = useState<boolean>(false)
    const [settings, setSettings] = useState<ISettings>()
    const [loaded, error] = useFonts({
        Regular: require('./assets/fonts/Poppins-Regular.ttf'),
        Medium: require('./assets/fonts/Poppins-Medium.ttf'),
    })
    if (error) console.log('Could not load fonts')

    if (!loaded) {
        return <AppLoading />
    }
    return (
        <SettingsContext.Provider value={[settings, setSettings]}>
            <AuthContext.Provider value={[isAuth, setAuth]}>
                <Router initialRouteName={'Home'} />
            </AuthContext.Provider>
        </SettingsContext.Provider>
    )
}
