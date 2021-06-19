import {
    typeAddToCart, typeCancel,
    typeChangeNumber,
    typeFetch,
    typeLogin,
    typeLogout,
    typeRemoveFromCart,
    typeSearch
} from './Common'

const add = (product, state) => {
    const array = state.cart
    const exist = array.find(item => {
        return product.id === item.id
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
            if (item.id === exist.id) {
                item.count++
            }
            total += item.count * item.price
        })
        const totalItem = state.totalItem + 1
        return {...state, cart : array, total : total, totalItem : totalItem}
    }
}

const cancel = (state) => {
    return {...state, total : 0, cart: [], totalItem : 0}
}

const remove = (product, state) => {
    const total = state.total - (product.price * product.count)
    const totalItem = state.totalItem - product.count
    const array = state.cart.filter(value => value.id !== product.id)
    return {...state, cart : array, total : total, totalItem : totalItem}
}

const change = (product, number, state) => {

}

const search = (name, state) => {
    const array = state.products

    array.forEach(value => {
        value.name = value.name.toLowerCase()
    })

    const findArray = array.filter(array => array.name.includes(name.toLowerCase()))

    let result = []

    for (let i = 0; i < findArray.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (findArray[i].id === array[j].id) {
                result.push(array[j])
                break
            }
        }
    }

    return {...state, search : result}

}

const login = (account, state) => {
    return {...state, user : {...state.user, phone : account.phone}}
}

const logout = (navigate, state) => {
    navigate()
    return {...state, user : { phone : null, password : null }}
}

const fetchData = (data, state) => {
    return {...state, products: data}
}

export const Reducer = (state, action) => {

    switch (action.type) {
        case `${typeAddToCart}`:
            return add(action.product, state)

        case `${typeRemoveFromCart}`:
            return remove(action.product, state)

        case `${typeChangeNumber}`:
            return change(action.product, action.count, state)

        case `${typeSearch}`:
            return search(action.name, state)

        case `${typeLogin}`:
            return login(action.account, state)

        case `${typeLogout}`:
            return logout(action.navigate, state)

        case `${typeFetch}`:
            return fetchData(action.data, state)

        case `${typeCancel}`:
            return cancel(state)

        default:
            return state
    }
}


