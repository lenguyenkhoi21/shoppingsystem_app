import React, {useContext, useState} from 'react'
import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native'
import {srcSignup} from '../../Common'
import axios from 'axios'
import {GlobalContext} from '../../AppState'
import {API_BASE} from '../../App.config'
import {style} from './AuthenticationStyle'

export const Login = ({ navigation }) => {
    const [account, setAccount] = useState({
        phone : '',
        password : ''
    })

    const [fail, setFail] = useState(null)

    const context = useContext(GlobalContext)

    //TODO: Styling here
    return (
        <View style={[style.center, style.viewWrapper]}>
            <View style={style.txtWrapper}>
                <TextInput
                    style={style.txtInput}
                    onChangeText = {(phone) => {
                        setAccount({...account, phone: phone})
                    }}
                    placeholder='Số điện thoại'
                />

                <TextInput
                    style={style.txtInput}
                    onChangeText = {(password) => {
                        setAccount({...account, password: password})
                    }}
                    secureTextEntry={true}
                    placeholder='Mật Khẩu'
                />
            </View>

            <View style={style.funcWrapper}>
                <View style={style.txtFunc}>
                    <TouchableOpacity
                        style={style.loginBtn}
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
                    >
                        <Text style={style.txtColorBtn}> Đăng nhập </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={style.signupBtn}
                        onPress= {() => {
                            navigation.navigate(`${srcSignup}`)
                        }}
                    >
                        <Text style={style.txtColorBtn}> Đăng ký </Text>
                    </TouchableOpacity>
                </View>
            </View>


            {fail === null ? <Text> </Text> : <Text> Đăng nhập thất bại </Text> }
        </View>
    )
}
