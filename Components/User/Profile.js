import React, {useContext} from 'react'
import {Button, View} from 'react-native'
import {srcAccount, srcHistory, srcSetting, tabHome} from '../../Common'
import {GlobalContext} from '../../AppState'

export const Profile = ({ navigation }) => {

    const context = useContext(GlobalContext)

    //TODO: Styling here
    return (
        <View>
            <Button
                title='Tài khoản'
                onPress = {() => {
                    navigation.navigate(`${srcAccount}`)
                }}
            />

            <Button
                title='Lịch sử mua hàng'
                onPress= {() => {
                    navigation.navigate(`${srcHistory}`)
                }}
            />

            <Button
                title='Cài đặt'
                onPress= {() => {
                    navigation.navigate(`${srcSetting}`)
                }}
            />

            <Button
                title='Đăng xuất'
                onPress= {() => {
                    const navigate = () => {
                        navigation.navigate(`${tabHome}`)
                    }

                    context.logout(navigate)
                }}
            />
        </View>
    )
}
