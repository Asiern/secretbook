import AsyncStorage from '@react-native-async-storage/async-storage'

export interface ISettings {
    path: string // Secret Book file path
    phrase: string // Phrase encrypted using passcode
    biometric: boolean // true if device supports biometric auth
}

export async function setSettings(settings: ISettings) {
    try {
        console.log(settings)
        await AsyncStorage.setItem('@settings', JSON.stringify(settings))
    } catch (e) {
        console.log(e)
    }
}

export async function getSettings(): Promise<ISettings | undefined> {
    try {
        const s = await AsyncStorage.getItem('@settings')
        if (s === null) throw 'NULL Settings'
        return JSON.parse(s)
    } catch (e) {
        console.log(e)
    }
}
