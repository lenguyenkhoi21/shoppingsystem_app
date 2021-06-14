import {createContext, useState} from 'react'

export const Store = createContext()

export const AppState = () => {
    const [user, setUser] = useState(null)

    const login = () => {
        setUser('lenguyenkhoi21')
    }

    const logout = () => {
        setUser(null)
    }

    return {
        user,
        login,
        logout
    }
}
