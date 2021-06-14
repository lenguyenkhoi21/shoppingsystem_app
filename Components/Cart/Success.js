import React from 'react'
import {Button, View} from 'react-native'

export const Success = ({ navigation }) => {
    return (
        <View>
            <Button
                title='Về trang chủ'
                onPress= {() => {
                    navigation.navigate('Trang chủ')
                }}
            />
        </View>
    )
}
