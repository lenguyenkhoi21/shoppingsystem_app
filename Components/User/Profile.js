import React, {useContext, useEffect, useState} from 'react'
import {
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import {
    srcAccount,
    srcHistory,
    srcSetting,
    tabHome
} from '../../Common'
import {GlobalContext} from '../../AppState'
import {useIsFocused} from '@react-navigation/native'
import axios from 'axios'
import {API_BASE} from '../../App.config'
import {style} from './UserStyle'

export const Profile = ({ navigation }) => {
    const context = useContext(GlobalContext)
    const isFocused = useIsFocused()

    const [profile, setProfile] = useState({
        name : null,
        email : null,
        avatar : null
    })

    //TODO: Fetch API Account - Method: GET - /api/profile/:phone
    useEffect(() => {
        if (isFocused) {
            axios.get(`${API_BASE}/api/profile/${context.store.user.phone}`, {
                headers: {
                    Authorization : `Bearer ${context.store.user.token}`
                }
            })
                .then(value => {
                    if (value.data.message === 'Success') {

                        setProfile({
                            name : value.data.name,
                            email : value.data.email,
                            avatar : value.data.avatar
                        })
                    }
                })
                .catch(reason => {

                })
        }

        return () => {

        }
    }, [isFocused])



    //TODO: Styling here
    return (
        <SafeAreaView style={style.profileSafeAreaView}>
            <ScrollView>
                <View style={style.profileWrapper}>
                    <Image
                        style = {style.profileImage}
                        source={{ uri : profile.avatar }}
                    />

                    <View style={style.profileInfo}>
                        <Text style={style.profileInfoText}> Tên:  {profile.name} </Text>
                        <Text style={style.profileInfoText}> SĐT: {context.store.user.phone} </Text>
                        <Text style={style.profileInfoText}> Email: {profile.email} </Text>
                    </View>

                </View>

                <View style={style.profileBtnWrapper}>
                    <TouchableOpacity
                        style={style.profileBtn}
                        onPress = {() => {
                            navigation.navigate(`${srcAccount}`, {
                                name : profile.name,
                                email : profile.email,
                                phone : context.store.user.phone,
                                token : context.store.user.token
                            })
                        }}
                    >

                        <View style={style.profileBtnContent}>
                            <Text style={style.profileBtnText}>Cập Nhập Hồ Sơ</Text>
                            <Image
                                style={style.profileImage2}
                                source={require('../../assets/arrow.png')}
                            />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={style.profileBtn}
                        onPress= {() => {
                            navigation.navigate(`${srcHistory}`)
                        }}
                    >
                        <View style={style.profileBtnContent}>
                            <Text style={style.profileBtnText}>Lịch sử mua hàng</Text>
                            <Image
                                style={style.profileImage2}
                                source={require('../../assets/arrow.png')}
                            />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={style.profileBtn}
                        onPress= {() => {
                            navigation.navigate(`${srcSetting}`)
                        }}
                    >
                        <View style={style.profileBtnContent}>
                            <Text style={style.profileBtnText}>Cài đặt</Text>
                            <Image
                                style={style.profileImage2}
                                source={require('../../assets/arrow.png')}
                            />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={style.profileBtn}
                        onPress= {() => {
                            const navigate = () => {
                                navigation.navigate(`${tabHome}`)
                            }

                            context.logout(navigate)
                        }}
                    >
                        <View style={style.profileBtnContent}>
                            <Text style={style.profileBtnText}>Đăng xuất</Text>
                            <Image
                                style={style.profileImage2}
                                source={require('../../assets/arrow.png')}
                            />
                        </View>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}
