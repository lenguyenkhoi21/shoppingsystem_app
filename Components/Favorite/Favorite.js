import React, {useContext, useEffect, useState} from 'react'
import {Button, FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import axios from "axios"
import {API_BASE} from "../../App.config"
import {GlobalContext} from "../../AppState"
import {useIsFocused} from "@react-navigation/native"
import {style} from "./FavoriteStyle"

export const Favorite = () => {
    const [favorite, setFavorite] = useState([])
    const context = useContext(GlobalContext)
    const isFocused = useIsFocused()

    //TODO Fetch API to get Favorite here - Method: GET - /api/favorite/:phone
    useEffect(() => {
        if (isFocused) {
            axios.get(`${API_BASE}/api/favorite/${context.store.user.phone}`, {
                headers: {
                    Authorization : `Bearer ${context.store.user.token}`
                }
            })
                .then(value => {
                    if (value.data.message === 'Success') {
                        setFavorite(value.data.favorite)
                    }
                })
                .catch(reason => {

                })
        }
        return () => {

        }
    }, [isFocused])

    if (favorite.length === 0) {
        return (
            <View style={[style.center, style.sadFacePosition]}>
                <Image
                    style={style.sadFace}
                    source = {require('../../assets/sad_face.png')}
                />
                <Text> Xin lỗi bạn chưa có sản phẩm yêu thích nào ! </Text>
            </View>
        )
    }

    const Item = ({item}) => {
        return (
            <View style={style.itemWrapper}>
                <View style={style.item}>
                    <Image
                        style = {style.productImage}
                        source={{ uri : item.product_image }}
                    />

                    <View style={style.midContent}>
                        <Text> Mã sản phẩm: {item.product_id} </Text>
                        <Text> Sản phẩm: {item.product_name} </Text>
                    </View>

                    <TouchableOpacity
                        style={style.rightContent}
                        onPress = {() => {
                            const payload = {
                                phone: context.store.user.phone,
                                product_id: item.product_id,
                                status: false
                            }
                            axios.patch(`${API_BASE}/api/favorite`, payload, {
                                headers: {
                                    Authorization : `Bearer ${context.store.user.token}`
                                }
                            })
                                .then(value => {
                                    if (value.data.message === 'Success') {
                                        axios.get(`${API_BASE}/api/favorite/${context.store.user.phone}`, {
                                            headers: {
                                                Authorization : `Bearer ${context.store.user.token}`
                                            }
                                        })
                                            .then(value1 => {
                                                if (value1.data.message === 'Success') {
                                                    setFavorite(value1.data.favorite)
                                                }
                                            })
                                            .catch(reason => {

                                            })
                                    }
                                })
                                .catch(reason => {

                                })
                        }}
                    >
                        <Image
                            style = {style.removeIcon}
                            source={require('../../assets/close.png')}
                        />
                    </TouchableOpacity>

                </View>
            </View>
        )
    }

    //TODO : Styling App, PUT API to change user favourite - Method: PATCH (Payload require) - /api/favorite
    return (
        <SafeAreaView style={style.safeView}>
            <ScrollView>
                <View  style={{flex : 1}} >
                    <View style={{flex : 1}} />

                    <View style={{flex : 8}}>
                        <SafeAreaView>
                            <FlatList
                                data={favorite}
                                renderItem={Item}
                            />
                        </SafeAreaView>

                    </View>
                    <View style={{flex : 1}} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
