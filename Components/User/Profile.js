import React, {useContext} from 'react'
import {Button, View} from 'react-native'
import {Store} from '../../Store'

export const Profile = ({ navigation }) => {
    const app = useContext(Store)

    return (
        <View>
            <Button
                title='Tài khoản'
                onPress= {() => {
                    navigation.navigate('Tài khoản')
                }}
            />

            <Button
                title='Lịch sử mua hàng'
                onPress= {() => {
                    navigation.navigate('Lịch sử mua hàng')
                }}
            />

            <Button
                title='Cài đặt'
                onPress= {() => {
                    navigation.navigate('Cài đặt')
                }}
            />

            <Button
                title='Đăng xuất'
                onPress= {() => {
                    app.logout()
                }}
            />
        </View>
    )
}
