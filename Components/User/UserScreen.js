import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {Profile} from './Profile'
import {Account} from './Account'
import {Setting} from './Setting'
import {History} from './History'


const UserStack = createStackNavigator()

export const UserScreen = () => {
    return (
        <UserStack.Navigator>
            <UserStack.Screen name='Hồ sơ cá nhân' component={Profile} />
            <UserStack.Screen name='Lịch sử mua hàng' component={History} />
            <UserStack.Screen name='Tài khoản' component={Account} />
            <UserStack.Screen name='Cài đặt' component={Setting} />
        </UserStack.Navigator>
    )
}
