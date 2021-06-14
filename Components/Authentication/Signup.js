import React from 'react'
import {Button, TextInput, View} from 'react-native'
import {srcLogin, srcSignup} from '../../Common'

export const Signup = ({ navigation }) => {
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
                title={srcSignup}
                onPress={()=>{

                }}
            />

            <Button
                title={srcLogin}
                onPress={()=>{
                    navigation.navigate(`${srcLogin}`)
                }}
            />
        </View>
    )
}
