import React, {useContext, useState} from 'react'
import {
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'
import {tabHome} from '../../Common'
import axios from 'axios'
import {GlobalContext} from '../../AppState'
import {API_BASE} from '../../App.config'
import {style} from './AuthenticationStyle'


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
    const [phoneError, setPhoneError] = useState('Empty')
    const [nameError, setNameError] = useState('Empty')
    const [emailError, setEmailError] = useState('Empty')
    const [error, setError] = useState(false)
    const [touchable, setTouchable] = useState(true)
    const [success, setSuccess] = useState(false)
    //TODO: Styling here
    return (
        <View style={[style.center, style.viewWrapper]}>
            <View>
                <TextInput
                    style={style.txtInput}
                    placeholder='Số điện thoại'
                    onChangeText={(phone) => {
                        const regex = /^[0-9]{10}$/
                        if (phone.match(regex)) {
                            setAccount({...account, phone : phone})
                            setPhoneError('Valid')
                        } else if (!phone.match(regex)) {
                            setPhoneError('InValid')
                        }

                        if (phone.length === 0) {
                            setPhoneError('Empty')
                        }

                        if (account.password === account.verifiedPassword &&
                            account.password.length > 0 &&
                            account.verifiedPassword.length > 0) {
                            setSamePassword(false)
                        } else {
                            setSamePassword(true)
                        }

                        if (phone.match(regex) &&
                            emailError === 'Valid' &&
                            nameError === 'Valid' &&
                            phone.length > 0 &&
                            account.password === account.verifiedPassword &&
                            account.password.length > 0 &&
                            account.verifiedPassword.length > 0
                        ) {
                            setTouchable(false)
                        } else {
                            setTouchable(true)
                        }
                    }}
                />

                {phoneError === 'InValid' ? <Text style={style.errorText}>Số điện thoại phải đủ 10 số !</Text> : null }
            </View>

            <View>
                <TextInput
                    style={style.txtInput}
                    placeholder='Tên'
                    onChangeText={(name) => {
                        const regex = /^[^\s]+( [^\s]+)+$/
                        if (name.match(regex)) {
                            setAccount({...account, name : name})
                            setNameError('Valid')
                        } else {
                            setNameError('InValid')
                        }

                        if (name.length === 0) {
                            setNameError('Empty')
                        }

                        if (account.password === account.verifiedPassword &&
                            account.password.length > 0 &&
                            account.verifiedPassword.length > 0) {
                            setSamePassword(false)
                        } else {
                            setSamePassword(true)
                        }

                        if (phoneError === 'Valid' &&
                            emailError === 'Valid' &&
                            name.match(regex) &&
                            name.length > 0 &&
                            account.password === account.verifiedPassword &&
                            account.password.length > 0 &&
                            account.verifiedPassword.length > 0
                        ) {
                            setTouchable(false)
                        } else {
                            setTouchable(true)
                        }
                    }}
                />

                {nameError === 'InValid' ? <Text style={style.errorText}>Tên không hợp lệ !</Text> : null}
            </View>

            <View>
                <TextInput
                    style={style.txtInput}
                    placeholder='Email'
                    onChangeText={(email) => {
                        const regex = /^[^\s@]+@[^\s@]+$/
                        if (email.match(regex)){
                            setAccount({...account, email : email})
                            setEmailError('Valid')
                        } else {
                            setEmailError('InValid')
                        }

                        if (email.length === 0) {
                            setEmailError('Empty')
                        }

                        if (account.password === account.verifiedPassword &&
                            account.password.length > 0 &&
                            account.verifiedPassword.length > 0) {
                            setSamePassword(false)
                        } else {
                            setSamePassword(true)
                        }

                        if (phoneError === 'Valid' &&
                            email.match(regex) &&
                            nameError === 'Valid' &&
                            email.length > 0 &&
                            account.password === account.verifiedPassword &&
                            account.password.length > 0 &&
                            account.verifiedPassword.length > 0
                        ) {
                            setTouchable(false)
                        } else {
                            setTouchable(true)
                        }

                    }}
                />

                {emailError === 'InValid' ? <Text style={style.errorText}>Email không hợp lệ !</Text> : null}
            </View>

            <View>
                <TextInput
                    style={style.txtInput}
                    placeholder='Mật Khẩu'
                    onChangeText={(password) => {
                        setAccount({...account, password : password})

                        if (password === account.verifiedPassword &&
                            password > 0 &&
                            account.verifiedPassword.length > 0) {
                            setSamePassword(false)
                        } else {
                            setSamePassword(true)
                        }

                        if (phoneError === 'Valid' &&
                            emailError === 'Valid' &&
                            nameError === 'Valid' &&
                            password === account.verifiedPassword &&
                            password.length > 0 &&
                            account.verifiedPassword.length > 0
                        ) {
                            setTouchable(false)
                        } else {
                            setTouchable(true)
                        }
                    }}
                    secureTextEntry={true}
                />
            </View>

            <View>
                <TextInput
                    style={style.txtInput}
                    placeholder='Nhập lại mật khẩu'
                    onChangeText={(verifiedPassword) => {
                        setAccount({...account, verifiedPassword : verifiedPassword})

                        if (account.password === verifiedPassword &&
                            account.verifiedPassword.length > 0 &&
                            verifiedPassword > 0) {
                            setSamePassword(false)
                        } else {
                            setSamePassword(true)
                        }

                        if (phoneError === 'Valid' &&
                            emailError === 'Valid' &&
                            nameError === 'Valid' &&
                            account.password === verifiedPassword &&
                            account.password.length > 0 &&
                            verifiedPassword > 0
                        ) {
                            setTouchable(false)
                        } else {
                            setTouchable(true)
                        }
                    }}
                    secureTextEntry={true}
                />
            </View>

            <View>
                { samePassword ? <Text style={style.errorText}> Mật khẩu không được để trống và khớp với mật phẩu !</Text> : null}
                { error ? <Text style={style.errorText}> Đã có lỗi xảy ra, vui lòng thử lại ! </Text> : null }
                { success ? <Text style={style.errorText}> Đăng ký thành công ! </Text> : null }
            </View>

            <TouchableOpacity
                style={style.signupBtn2}
                disabled={touchable}
                onPress={() => {
                    const information = {
                        phone: account.phone,
                        password: account.password,
                        email: account.email,
                        name: account.name
                    }

                    //TODO: Fetch API Signup Here - Method: POST (Payload require) - /api/signup
                    axios.post(`${API_BASE}/api/signup`, information)
                        .then(value => {
                            //TODO: Fetch API Login Here - Method: POST (Payload require) - /api/login
                            if (value.data.message === 'Success') {

                                setError(false)
                                setSuccess(true)

                                const payload = {
                                    phone : account.phone,
                                    password : account.password
                                }

                                axios.post(`${API_BASE}/api/login`, payload)
                                    .then(data => {

                                        if (data.data.message === 'Success') {
                                            const navigate = () => {
                                                navigation.navigate(`${tabHome}`)
                                            }
                                            const next = {
                                                phone : payload.phone,
                                                token : data.data.token
                                            }
                                            context.loginAfterSignup(next, navigate);
                                        } else if (data.data.message === 'Error') {
                                            setError(true)
                                        }
                                    })
                                    .catch(reason => {
                                        setError(true)
                                    })
                            } else if (value.data.message === 'Error') {
                                setError(true)
                            }
                        })
                        .catch(reason => {
                            setError(true)
                        })
                }}
            >
                <Text style={style.txtColorBtn} >Đăng Ký</Text>
            </TouchableOpacity>

        </View>
    )
}
