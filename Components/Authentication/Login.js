import React, {useContext, useState} from 'react'
import {Button, Text, TextInput, View} from 'react-native'
import {srcLogin, srcSignup, tabHome} from '../../Common'
import axios from 'axios'
import {GlobalContext} from '../../AppState'

export const Login = ({ navigation }) => {
    const [account, setAccount] = useState({
        phone : '',
        password : ''
    })

    const [fail, setFail] = useState(null)

    const context = useContext(GlobalContext)

    //TODO: Styling here
    return (
        <View>
            <TextInput
                style={{height: 40, borderWidth: 1, width : 200}}
                onChangeText = {(phone) => {
                    setAccount({...account, phone: phone})
                }}
                placeholder='Số điện thoại'
            />

            <TextInput
                style={{height: 40, borderWidth: 1, width : 200}}
                onChangeText = {(password) => {
                    setAccount({...account, password: password})
                }}
                secureTextEntry={true}
                placeholder='Mật Khẩu'
            />

            <Button
                title='Đăng nhập'
                onPress={()=>{
                    //TODO: Fetch API Login Here
                    axios.post('http://192.168.1.9:3001/auth', account)
                        .then(value => {
                            if (value.data.message==='Success') {
                                setFail(false)
                                context.login(account)
                            } else {
                                setFail(true)
                            }
                        })
                        .catch(reason => {

                        })
                }}
            />

            <Button
                title='Đăng ký'
                onPress= {() => {
                    navigation.navigate(`${srcSignup}`)
                }}
            />

            {fail === null ? <Text> </Text> : <Text> Đăng nhập thất bại </Text> }
        </View>
    )
}
