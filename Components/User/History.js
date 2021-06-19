import React, {useEffect} from 'react'
import {Button, View} from 'react-native'
import {srcDetail} from '../../Common'

export const History = ({ navigation }) => {

    //TODO: Fetch API From Database to show history
    useEffect(() => {
        return () => {

        }
    }, [])

    //TODO: Styling here, passing prop to Detail
    return (
        <View>
            <Button
                title='Chi tiết đơn hàng'
                onPress = {() => {
                    navigation.navigate(`${srcDetail}`)
                }}
            />
        </View>
    )
}
