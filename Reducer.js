export const incrementReducer = (product, state) => {
    const array = state.cart
    const exist = array.find(item => {
        return product.product_id === item.product_id
    })

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

export const decrementReducer = (product, state) => {
    const array = state.cart
    const exist = array.find(item => {
        return product.product_id === item.product_id
    })

    let total = 0
    let isMinus = false
    array.forEach(item => {
        if (item.product_id === exist.product_id && item.count - 1 > 0) {
            item.count--
            isMinus = true
        }
        total += item.count * item.price
    })
    let totalItem
    if (isMinus) {
        totalItem = state.totalItem - 1
    } else {
        totalItem = state.totalItem
    }

    return {...state, cart : array, total : total, totalItem : totalItem}
}

export const addReducer = (product, state) => {
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

export const clearReducer = (state) => {
    return {...state, total : 0, cart: [], totalItem : 0}
}

export const removeReducer = (product, state) => {
    const total = state.total - (product.price * product.count)
    const totalItem = state.totalItem - product.count
    const array = state.cart.filter(value => value.product_id !== product.product_id)
    return {...state, cart : array, total : total, totalItem : totalItem}
}

export const changeReducer = (product, number, state) => {

}

export const loginReducer = (account, state) => {
    return {...state, user : {phone : account.phone, token : account.token}}
}

export const logoutReducer = (navigate, state) => {
    navigate()
    return {...state, user : { phone : null, password : null }}
}

export const fetchDataReducer = (data, state) => {
    return {...state, products: data}
}

export const loginAfterSignupReducer = (account, navigate, state) => {
    navigate()
    return {...state, user : {phone : account.phone, token : account.token}}
}

export const paymentReducer = (navigate, state) => {
    navigate()
    return {...state, cart : [], total : 0, totalItem: 0}
}




