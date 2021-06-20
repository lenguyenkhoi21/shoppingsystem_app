import React, {useEffect, useState} from 'react'
import {Text, View} from 'react-native'

export const Favorite = ( ) => {
    const [favorite, setFavorite] = useState([])

    //TODO Fetch API to get Favorite here - Method: GET - /api/favorite/:phone
    useEffect(() => {
        return () => {

        }
    }, [])

    //TODO : Styling App, PUT API to change user favourite - Method: PATCH (Payload require) - /api/favorite
    return (
        <View>
            <Text> Hi </Text>
        </View>
    )
}
