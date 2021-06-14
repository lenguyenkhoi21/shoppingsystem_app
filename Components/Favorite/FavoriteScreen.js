import React from 'react'
import {View} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import {Favorite} from './Favorite'

const FavoriteStack = createStackNavigator()

export const FavoriteScreen = () => {
    return (
        <FavoriteStack.Navigator>
            <FavoriteStack.Screen name='Sản phẩm yêu thích' component={Favorite} />
        </FavoriteStack.Navigator>
    )
}
