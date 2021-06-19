import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {Profile} from './Profile'
import {Account} from './Account'
import {Setting} from './Setting'
import {History} from './History'
import {srcAccount, srcDetail, srcHistory, srcProfile, srcSetting} from '../../Common'
import {Detail} from './Detail'


const UserStack = createStackNavigator()

export const UserScreen = () => {
    return (
        <UserStack.Navigator>
            <UserStack.Screen name={srcProfile} component={Profile} />
            <UserStack.Screen name={srcHistory} component={History} />
            <UserStack.Screen name={srcAccount} component={Account} />
            <UserStack.Screen name={srcSetting} component={Setting} />
            <UserStack.Screen name={srcDetail} component={Detail} />
        </UserStack.Navigator>
    )
}
