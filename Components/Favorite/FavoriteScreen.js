import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {Favorite} from './Favorite'
import {srcFavorite} from '../../Common'

const FavoriteStack = createStackNavigator()

export const FavoriteScreen = () => {
    return (
        <FavoriteStack.Navigator>
            <FavoriteStack.Screen name={srcFavorite} component={Favorite} />
        </FavoriteStack.Navigator>
    )
}
