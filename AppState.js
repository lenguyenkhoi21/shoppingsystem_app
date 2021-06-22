import React, {useReducer} from 'react'
import {createContext} from 'react'
import {Reducer} from './Reducer'
import {
    typeAddToCart, typeCancel,
    typeChangeNumber,
    typeFetch,
    typeLogin, typeLoginAfterSignup,
    typeLogout,
    typeRemoveFromCart,
    typeSearch
} from './Common'

export const GlobalContext = createContext()

export const AppState = (props) => {
    const initialState = {
        products : [],
        cart : [],
        total : 0,
        totalItem : 0,
        search : [],
        user : {
            phone : null,
            token : null
        }
    }

    const [store, dispatch] = useReducer(Reducer, initialState)

    const cancel = () => {
        dispatch({ type : `${typeCancel}` })
    }

    const addToCart = (product) => {
        dispatch({ type : `${typeAddToCart}`, product : product })
    }

    const removeFromCart = (product) => {
        dispatch({ type : `${typeRemoveFromCart}`, product : product })
    }

    const changeNumber = (product, count) => {
        dispatch({ type : `${typeChangeNumber}`, product : product, count : count })
    }

    const searchProduct = (name) => {
        dispatch({ type : `${typeSearch}`, name : name })
    }

    const fetchData = (data) => {
        dispatch({ type : `${typeFetch}`, data : data })
    }

    const login = (account) => {
        dispatch({ type : `${typeLogin}`, account : account})
    }

    const logout = (navigate) => {
        dispatch({ type : `${typeLogout}`, navigate : navigate })
    }

    const loginAfterSignup = (account, navigate) => {
        dispatch({ type : `${typeLoginAfterSignup}`, account : account , navigate : navigate })
    }

    return (
        <GlobalContext.Provider
            value={{
                store : store,
                addToCart,
                removeFromCart,
                changeNumber,
                searchProduct,
                fetchData,
                login,
                logout,
                cancel,
                loginAfterSignup
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    )
}
