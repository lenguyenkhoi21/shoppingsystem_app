import React, {useState} from 'react'
import {
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'
import axios from 'axios'
import {API_BASE} from '../../App.config'
import {style} from './UserStyle'
import {CommonActions} from '@react-navigation/native'
import {srcProfile} from '../../Common'

export const Account = ({route, navigation }) => {
    const {phone, name, email, token} = route.params
    const [update, setUpdate] = useState({
        name : `${phone}`,
        email : `${email}`
    })
    const [error, setError] = useState(false)
    const [emailError, setEmailError] = useState('Valid')
    const [nameError, setNameError] = useState('Valid')
    const [touchable, setTouchable] = useState(false)
    const [notify, setNotify] = useState(false)

    //TODO: Template, POST API to update account - Method: PATCH (Payload Require) - /api/profile/
    return (
        <SafeAreaView>
            <ScrollView style={style.accountScrollview}>
                <View>
                    <Text style={style.accountText}>Số điện thoại:</Text>
                    <Text style={style.accountTxtInput}>
                        {phone}
                    </Text>
                </View>

                <View>
                    <Text style={style.accountText}>Họ và tên:</Text>
                    <TextInput
                        style={style.accountTxtInput}
                        defaultValue={name}
                        placeholder='Tên'
                        onChangeText={(nameInput)=> {
                            const regex = /^[^\s]+( [^\s]+)+$/
                            if (nameInput.match(regex)){
                                setUpdate({...update, name : nameInput})
                                setNameError('Valid')
                            } else {
                                setNameError('InValid')
                            }

                            if (nameInput.length === 0) {
                                setNameError('Empty')
                            }

                            if (nameError === 'Valid' &&
                                emailError === 'Valid' &&
                                nameInput.length > 0) {
                                setTouchable(false)
                            } else {
                                setTouchable(true)
                            }
                        }}
                    />
                    {nameError === 'InValid' ? <Text style={style.errorText}>Tên không hợp lệ</Text> : null}
                </View>

                <View>
                    <Text style={style.accountText}>Email:</Text>
                    <TextInput
                        style={style.accountTxtInput}
                        defaultValue = {email}
                        placeholder='Email'
                        onChangeText={(emailInput) => {
                            const regex = /^[^\s@]+@[^\s@]+$/
                            if (emailInput.match(regex)){
                                setUpdate({...update, email : emailInput})
                                setEmailError('Valid')
                            } else {
                                setEmailError('InValid')
                            }

                            if (emailInput.length === 0) {
                                setEmailError('Empty')
                            }

                            if (nameError === 'Valid' &&
                                emailError === 'Valid' &&
                                emailInput.length > 0) {
                                setTouchable(false)
                            } else {
                                setTouchable(true)
                            }
                        }}
                    />
                    {emailError === 'InValid' ? <Text style={style.errorText}>Email không hợp lệ</Text> : null}
                </View>

                <TouchableOpacity
                    style={style.accountBtn}
                    disabled = {touchable}
                    onPress= {() => {
                        const payload = {
                            phone : phone,
                            name : update.name,
                            email : update.email
                        }

                        axios.patch(`${API_BASE}/api/profile`, payload, {
                            headers: {
                                Authorization : `Bearer ${token}`
                            }
                        })
                            .then(value => {
                                if (value.data.message === 'Success') {
                                    setNotify(true)
                                    setTimeout(() => {
                                        navigation.dispatch(
                                            CommonActions.reset({
                                                index : 1,
                                                routes : [{name: `${srcProfile}`}]
                                            })
                                        )
                                    }, 1000)
                                } else {
                                    setError(true)
                                }
                            })
                            .catch(reason => {

                            })
                    }}
                >
                    <View style={style.accountBtnContent}>
                        <Text style={style.updateBtnText}>Cập Nhập</Text>
                    </View>
                </TouchableOpacity>
                {error ? <Text style={style.errorText}> Có lỗi xảy ra, vui lòng thử lại !</Text> : null}
                {notify ? <Text style={style.errorText}> Cập nhật thông tin thành công !</Text> : null}
            </ScrollView>
        </SafeAreaView>
    )
}

