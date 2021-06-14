import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {Shop} from './Shop'
import {Search} from './Search'
import {Product} from './Product'

const HomeStack = createStackNavigator()

export const HomeScreen = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name='Cửa hàng' component={Shop} />
            <HomeStack.Screen name='Tìm kiếm' component={Search} />
            <HomeStack.Screen name='Sản phẩm' component={Product} />
        </HomeStack.Navigator>
    )
}
