import React, {useContext, useState} from 'react'
import {Button, TextInput, View} from 'react-native'
import {srcLogin, srcSignup, tabHome} from '../../Common'
import axios from 'axios'
import {GlobalContext} from '../../AppState'

export const Signup = ({ navigation }) => {
    const context = useContext(GlobalContext)
    const [account, setAccount] = useState({
        phone : '',
        name : '',
        email : '',
        password : '',
        verifiedPassword : ''
    })
    const [samePassword, setSamePassword] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passWord, setPassWord] = useState(false)
    const [error, setError] = useState(false)

    //TODO: Styling here
    return (
        <View>
            <TextInput
                style={{height: 40, borderWidth: 1, width : 200}}
                placeholder='Số điện thoại'
                onChangeText={(phone) => {
                    setAccount({...account, phone : phone})
                }}
            />

            <TextInput
                style={{height: 40, borderWidth: 1, width : 200}}
                placeholder='Tên'
                onChangeText={(name) => {
                    setAccount({...account, name : name})
                }}
            />

            <TextInput
                style={{height: 40, borderWidth: 1, width : 200}}
                placeholder='Email'
                onChangeText={(email) => {
                    setAccount({...account, email : email})
                }}
            />

            <TextInput
                style={{height: 40, borderWidth: 1, width : 200}}
                placeholder='Mật Khẩu'
                onChangeText={(password) => {
                    setAccount({...account, password : password})
                }}
            />

            <TextInput
                style={{height: 40, borderWidth: 1, width : 200}}
                placeholder='Nhập lại mật khẩu'
                onChangeText={(verifiedPassword) => {
                    setAccount({...account, verifiedPassword : verifiedPassword})
                }}
            />

            <Button
                title='Đăng ký'
                onPress={()=>{

                    if (account.phone.length===10 &&
                        account.email.length > 0 &&
                        account.name.length > 0 &&
                        account.password.length > 0 &&
                        account.password === account.verifiedPassword
                    ) {
                        //TODO: Fetch API Signup Here - Method: POST (Payload require) - /api/signup
                        axios.post('', account)
                            .then(value => {
                                //TODO: Fetch API Login Here - Method: POST (Payload require) - /api/login
                                if (value.data.message === 'Success') {
                                    const payload = {
                                        phone : account.phone,
                                        password : account.password
                                    }
                                    axios.post('', payload)
                                        .then(data => {
                                            context.login(payload)
                                        })
                                        .catch(reason => {

                                        })
                                } else if (value.data.message === 'Error') {

                                }
                            })
                            .catch(reason => {

                            })
                    } else if (account.password !== account.verifiedPassword) {

                    } else if (account.phone.length === 0) {

                    } else if (account.name.length === 0) {

                    } else if (account.email.length === 0) {

                    } else if (account.password.length === 0) {

                    }



                }}
            />

        </View>
    )
}
