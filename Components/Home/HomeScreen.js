import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {Shop} from './Shop'
import {Search} from './Search'
import {Product} from './Product'
import {srcProduct, srcSearch, srcShop} from "../../Common";

const HomeStack = createStackNavigator()

export const HomeScreen = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name={srcShop} component={Shop} />
            <HomeStack.Screen name={srcSearch} component={Search} />
            <HomeStack.Screen name={srcProduct} component={Product} />
        </HomeStack.Navigator>
    )
}
