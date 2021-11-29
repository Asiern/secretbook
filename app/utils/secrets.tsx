import CryptoES from 'crypto-es'

const phrase: string = 'SecretBook' // Phrase used to check if passcode is correct

export interface ISecret {
    name: string //Secret name
    description: string //Secret desciption
    password: string //Password
}

export function createSecret(secret: ISecret): boolean {
    // TODO create secret
    return true
}

/**
 * Generate encrypted phrase using passcode
 * @param passcode 4 digit pin used to enter the app
 * @returns "SecretBook" encrypted using passcode as string
 */
export function generatePhrase(passcode: string): string {
    return CryptoES.AES.encrypt(passcode, phrase).toString()
}

/**
 * Check if passcode is correct
 * @param passcode 4 digit pin used to enter the app
 * @param phrase previously generated phrase using the passcode
 * @returns true if passcode is correct, false otherwise
 */
export function checkPasscode(passcode: string, phrase: string): boolean {
    return phrase === generatePhrase(passcode)
}
