import React, { useContext, useState } from 'react'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'

import AuthContext from './app/context/AuthContext'
import Router from './app/router/Router'

export default function App() {
    const [isAuth, setAuth] = useState(useContext(AuthContext))
    const [loaded, error] = useFonts({
        Regular: require('./assets/fonts/Poppins-Regular.ttf'),
        Medium: require('./assets/fonts/Poppins-Medium.ttf'),
    })
    if (error) console.log('Could not load fonts')

    if (!loaded) {
        return <AppLoading />
    }
    return (
        <AuthContext.Provider value={[isAuth, setAuth]}>
            <Router initialRouteName={'Home'} />
        </AuthContext.Provider>
    )
}
