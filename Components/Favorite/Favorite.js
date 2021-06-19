import React, {useEffect, useState} from 'react'
import {Text, View} from 'react-native'

export const Favorite = ( ) => {
    const [favorite, setFavorite] = useState([])

    //TODO fetch API to get Favorite here
    useEffect(() => {
        return () => {

        }
    }, [])

    //TODO : Styling App, PUT API to change user favourite
    return (
        <View>
            <Text> Hi </Text>
        </View>
    )
}
