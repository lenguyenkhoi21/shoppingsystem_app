import React, {useCallback, useContext, useEffect, useState} from 'react'
import {Button, FlatList, Image, SafeAreaView, Text, View} from 'react-native'
import axios from "axios";
import {API_BASE, NEXT_API} from "../../App.config";
import {GlobalContext} from "../../AppState";
import {srcDetail} from "../../Common";
import {useFocusEffect, useIsFocused} from "@react-navigation/native";

export const Favorite = () => {
    const [favorite, setFavorite] = useState([])
    const context = useContext(GlobalContext)
    const [hello, setHello] = useState('')
    const isFocused = useIsFocused()


    //TODO Fetch API to get Favorite here - Method: GET - /api/favorite/:phone
    useEffect(() => {
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
        return () => {

        }
    }, [isFocused])

    const Item = ({item}) => {
        return (
            <View>
                <Text> {item.product_name} </Text>
                <Image
                    style = {{  width: 100, height: 100 }}
                    source={{ uri : item.product_image }}
                />
                <Button
                    title='Bỏ thích'
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
                />

            </View>
        )
    }

    //TODO : Styling App, PUT API to change user favourite - Method: PATCH (Payload require) - /api/favorite
    return (
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
            <Text> {hello} </Text>
            <View style={{flex : 1}} />
        </View>
    )
}
