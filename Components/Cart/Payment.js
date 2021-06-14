import React from 'react'
import {Button, View} from 'react-native'
import {srcSuccess} from '../../Common'

export const Payment = ({ navigation }) => {
    return (
        <View>
            <Button
                title='Xác nhận'
                onPress= {() => {
                    navigation.navigate(`${srcSuccess}`)
                }}
            />
        </View>
    )
}
