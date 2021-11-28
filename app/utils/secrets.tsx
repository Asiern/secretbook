export interface ISecret {
    name: string
    description: string
    password: string
}

export function createSecret(secret: ISecret): boolean {
    // TODO create secret
    return true
}
