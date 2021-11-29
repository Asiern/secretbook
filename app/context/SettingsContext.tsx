import { createContext } from 'react'
import { ISettings } from '../utils'

export default createContext<ISettings | null>(null)
