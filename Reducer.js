import {
    typeAddToCart,
    typeClear,
    typeChangeNumber,
    typeFetch,
    typeLogin,
    typeLoginAfterSignup,
    typeLogout,
    typeRemoveFromCart,
    typePayment
} from './Common'

const increment = (product, state) => {

}

const decrement = (product, state) => {
    
}

const add = (product, state) => {
    const array = state.cart
    const exist = array.find(item => {
        return product.product_id === item.product_id
    })

    if (exist === undefined) {
        array.push({...product, count : 1 })
        let total = 0
        array.forEach(item => {
            total += item.count*item.price
        })
        const totalItem = state.totalItem + 1
        return {...state, cart : array, total : total, totalItem : totalItem}
    } else {
        let total = 0
        array.forEach(item => {
            if (item.product_id === exist.product_id) {
                item.count++
            }
            total += item.count * item.price
        })
        const totalItem = state.totalItem + 1
        return {...state, cart : array, total : total, totalItem : totalItem}
    }
}

const clear = (state) => {
    return {...state, total : 0, cart: [], totalItem : 0}
}

const remove = (product, state) => {
    const total = state.total - (product.price * product.count)
    const totalItem = state.totalItem - product.count
    const array = state.cart.filter(value => value.product_id !== product.product_id)
    return {...state, cart : array, total : total, totalItem : totalItem}
}

const change = (product, number, state) => {

}

const login = (account, state) => {
    return {...state, user : {phone : account.phone, token : account.token}}
}

const logout = (navigate, state) => {
    navigate()
    return {...state, user : { phone : null, password : null }}
}

const fetchData = (data, state) => {
    return {...state, products: data}
}

const loginAfterSignup = (account, navigate, state) => {
    navigate()
    return {...state, user : {phone : account.phone, token : account.token}}
}

const payment = (navigate, state) => {
    navigate()
    return {...state, cart : [], total : 0, totalItem: 0}
}

export const Reducer = (state, action) => {

    switch (action.type) {
        case `${typeAddToCart}`:
            return add(action.product, state)

        case `${typeRemoveFromCart}`:
            return remove(action.product, state)

        case `${typeChangeNumber}`:
            return change(action.product, action.count, state)

        case `${typeLogin}`:
            return login(action.account, state)

        case `${typeLogout}`:
            return logout(action.navigate, state)

        case `${typeFetch}`:
            return fetchData(action.data, state)

        case `${typeClear}`:
            return clear(state)

        case `${typeLoginAfterSignup}`:
            return loginAfterSignup(action.account, action.navigate, state)

        case `${typePayment}`:
            return payment(action.navigate, state)

        default:
            return state
    }
}


