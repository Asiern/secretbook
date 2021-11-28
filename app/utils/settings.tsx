import AsyncStorage from '@react-native-async-storage/async-storage'

export interface ISettings {}

export async function setSettings(settings: ISettings) {
    try {
        await AsyncStorage.setItem('@settings', JSON.stringify(settings))
    } catch (e) {
        console.log(e)
    }
}

export async function getSettings() {
    try {
        const s = await AsyncStorage.getItem('@settings')
        if (s === null) throw 'NULL Settings'
        return JSON.parse(s)
    } catch (e) {
        console.log(e)
    }
}
