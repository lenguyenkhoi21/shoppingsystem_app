import React, {useContext, useState} from 'react'
import {Button, Text, TextInput, View} from 'react-native'
import {srcLogin, srcSignup, tabHome} from '../../Common'
import axios from 'axios'
import {GlobalContext} from '../../AppState'
import {API_BASE} from "../../App.config";

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
                    //TODO: Fetch API Login Here - Method: POST (Payload require) - /api/login
                    axios.post(`${API_BASE}/api/login`, account)
                        .then(value => {
                            if (value.data.message==='Success') {
                                setFail(false)
                                const user = {
                                    phone : value.data.phone,
                                    token : value.data.token
                                }
                                context.login(user)
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
