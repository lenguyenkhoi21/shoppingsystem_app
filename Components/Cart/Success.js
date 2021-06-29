import React from 'react'
import {Text, View} from 'react-native'
import { CommonActions } from '@react-navigation/native'
import {srcCart} from "../../Common"

export const Success = ({ navigation }) => {
    setTimeout(() => {
        navigation.dispatch(
            CommonActions.reset({
                index : 1,
                routes : [{name : `${srcCart}`}]
            })
        )
    }, 2000)

    //TODO: Styling here
    return (
        <View>
            <Text> Bạn đã đặt hàng thành công </Text>
            <Text> Chúc bạn một ngày may mắn </Text>
        </View>
    )
}
