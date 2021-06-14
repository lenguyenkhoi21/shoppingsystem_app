import React from 'react'
import {Login} from './Login'
import {Signup} from './Signup'
import {createStackNavigator} from '@react-navigation/stack'
import {srcLogin, srcSignup} from '../../Common'

const AuthenticationStack = createStackNavigator()

export const AuthenticationScreen = () => {
    return(
        <AuthenticationStack.Navigator>
            <AuthenticationStack.Screen name={srcLogin} component={Login} />
            <AuthenticationStack.Screen name={srcSignup} component={Signup} />
        </AuthenticationStack.Navigator>
    )
}
