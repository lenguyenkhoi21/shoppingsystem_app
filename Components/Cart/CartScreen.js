import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {Cart} from './Cart'
import {Payment} from './Payment'
import {Success} from './Success'
import {srcCart, srcPayment, srcSuccess} from '../../Common'

const CartStack = createStackNavigator()

export const CartScreen = () => {
    return (
        <CartStack.Navigator>
            <CartStack.Screen name={srcCart} component={Cart} />
            <CartStack.Screen name={srcPayment} component={Payment} />
            <CartStack.Screen name={srcSuccess} component={Success} />
        </CartStack.Navigator>
    )
}
