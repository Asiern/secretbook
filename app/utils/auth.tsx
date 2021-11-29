import {
    hasHardwareAsync,
    isEnrolledAsync,
    authenticateAsync,
} from 'expo-local-authentication'

/**
 * Authenticate using biometrics
 * @returns
 */
export async function biometricAuth() {
    console.log('BIOME')
    const compatible = await hasHardwareAsync()
    if (!compatible) throw 'This device is not compatible for biometric auth'

    const enrolled = await isEnrolledAsync()
    if (!enrolled)
        throw `This device doesn't have biometric authentication enabled`

    const result = await authenticateAsync()
    if (!result.success) throw `${result.error} - Authentication unsuccessful`
    return 'OK'
}

/**
 * Check if device supports biometric authentication
 * @returns true if device supports biometric auth
 */
export async function hasBiometric(): Promise<boolean> {
    return await hasHardwareAsync()
}
