import React from 'react'
import {
    Image,
    Text,
    View
} from 'react-native'
import { CommonActions } from '@react-navigation/native'
import {srcCart} from '../../Common'
import {style} from './CartStyle'

export const Success = ({ navigation }) => {
    setTimeout(() => {
        navigation.dispatch(
            CommonActions.reset({
                index : 1,
                routes : [{name : `${srcCart}`}]
            })
        )
    }, 3000)

    //TODO: Styling here
    return (
        <View style={[style.sadFacePosition, style.center]}>
            <Image
                style={style.sadFace}
                source = {require('../../assets/success.png')}
            />
            <Text> Bạn đã đặt hàng thành công </Text>
            <Text> Chúc bạn một ngày may mắn </Text>
        </View>
    )
}
