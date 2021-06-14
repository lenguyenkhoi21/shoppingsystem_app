import {Store} from '../../Store'
import React, {useContext} from 'react'
import {Button, TextInput, View} from 'react-native'
import {srcLogin, srcSignup} from '../../Common'

export const Login = ({ navigation }) => {
    const app = useContext(Store)

    return (
        <View>
            <TextInput
                style={{height: 40, borderWidth: 1, width : 200}}
                placeholder='Số điện thoại'
            />

            <TextInput
                style={{height: 40, borderWidth: 1, width : 200}}
                placeholder='Mật Khẩu'
            />

            <Button
                title={srcLogin}
                onPress={()=>{
                    app.login()
                }}
            />

            <Button
                title={srcSignup}
                onPress= {() => {
                    navigation.navigate(`${srcSignup}`)
                }}
            />

        </View>
    )
}
