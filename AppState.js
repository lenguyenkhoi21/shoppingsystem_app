import React, {
    useReducer,
    createContext,
    useCallback
} from 'react'
import {
    typeAddToCart,
    typeClear,
    typeChangeNumber,
    typeFetch,
    typeLogin,
    typeLoginAfterSignup,
    typeLogout,
    typeRemoveFromCart,
    typePayment,
    typeIncrement,
    typeDecrement
} from './Common'
import {
    addReducer,
    changeReducer,
    clearReducer,
    decrementReducer,
    fetchDataReducer,
    incrementReducer,
    loginAfterSignupReducer,
    loginReducer,
    logoutReducer,
    paymentReducer,
    removeReducer
} from './Reducer'

export const GlobalContext = createContext()

export const AppState = (props) => {
    const initialState = {
        products : [],
        cart : [],
        total : 0,
        totalItem : 0,
        user : {
            phone : null,
            token : null
        }
    }

    const [store, dispatch] = useReducer(
        useCallback(
        (state, action) => {
            switch (action.type) {
                case `${typeAddToCart}`:
                    return addReducer(action.product, state)

                case `${typeRemoveFromCart}`:
                    return removeReducer(action.product, state)

                case `${typeChangeNumber}`:
                    return changeReducer(action.product, action.count, state)

                case `${typeLogin}`:
                    return loginReducer(action.account, state)

                case `${typeLogout}`:
                    return logoutReducer(action.navigate, state)

                case `${typeFetch}`:
                    return fetchDataReducer(action.data, state)

                case `${typeClear}`:
                    return clearReducer(state)

                case `${typeLoginAfterSignup}`:
                    return loginAfterSignupReducer(action.account, action.navigate, state)

                case `${typePayment}`:
                    return paymentReducer(action.navigate, state)

                case `${typeIncrement}`:
                    return incrementReducer(action.product, state)

                case `${typeDecrement}`:
                    return decrementReducer(action.product, state)

                default:
                    return state
            }
        }, [])
        , initialState
    )

    const increment = (product) => {
        dispatch({type : `${typeIncrement}`,  product : product})
    }

    const decrement = (product) => {
        dispatch({type : `${typeDecrement}`,  product : product})
    }

    const clear = () => {
        dispatch({ type : `${typeClear}` })
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

    const payment = (navigate) => {
        dispatch({ type : `${typePayment}`, navigate : navigate })
    }

    return (
        <GlobalContext.Provider
            value={{
                store : store,
                addToCart,
                removeFromCart,
                changeNumber,
                fetchData,
                login,
                logout,
                clear,
                loginAfterSignup,
                payment,
                increment,
                decrement
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    )
}
