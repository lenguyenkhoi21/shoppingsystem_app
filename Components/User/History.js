import React, {useContext, useEffect, useState} from 'react'
import {Button, FlatList, SafeAreaView, Text, View} from 'react-native'
import {srcDetail} from '../../Common'
import axios from "axios";
import {API_BASE} from "../../App.config";
import {GlobalContext} from "../../AppState";

export const History = ({ navigation }) => {
    const [history, setHistory] = useState({
        data : null
    })

    const context = useContext(GlobalContext)

    //TODO: Fetch API From Database to show history - Method : GET - /api/history/:phone
    useEffect(() => {
        axios.get(`${API_BASE}/api/history/${context.store.user.phone}`, {
            headers: {
                Authorization : `Bearer ${context.store.user.token}`
            }
        })
            .then(value => {

                if (value.data.message === 'Success') {
                    setHistory({
                        data: value.data.history
                    })

                }

            })
            .catch(reason => {

            })

        return () => {

        }
    }, [])

    const Item = ({item}) => {
        return (
            <View>
                <Text> {item.bill_id} </Text>
                <Text> {item.date} </Text>
                <Text> {item.time} </Text>
                <Button
                    title='Chi tiết hóa đơn'
                    onPress = {() => {
                        navigation.navigate(`${srcDetail}`, {
                            detail : item.detail,
                            total : item.total
                        })
                    }}
                />
            </View>
        )
    }

    //TODO: Styling here, passing prop to Detail
    return (
        <View  style={{flex : 1}} >
            <View style={{flex : 1}} />

            <View style={{flex : 8}}>
                <SafeAreaView>
                    <FlatList
                        data={history.data}
                        renderItem={Item}
                    />
                </SafeAreaView>

            </View>

            <View style={{flex : 1}} />
        </View>
    )
}
