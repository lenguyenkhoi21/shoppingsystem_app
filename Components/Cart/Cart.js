import React from 'react'
import {Button, View} from 'react-native'
import {srcPayment} from '../../Common'

export const Cart = ({ navigation }) => {
    return (
        <View>
            <Button
                title={srcPayment}
                onPress= {() => {
                    navigation.navigate(`${srcPayment}`)
                }}
            />
        </View>
    )
}
