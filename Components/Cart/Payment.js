import React, {useContext, useState} from 'react'
import {Button, Text, View} from 'react-native'
import {srcSuccess} from '../../Common'
import {GlobalContext} from "../../AppState";
import axios from "axios";
import {API_BASE} from "../../App.config";

export const Payment = ({ navigation }) => {
    const context = useContext(GlobalContext)
    const [text, setText] = useState('')
    //TODO: Styling here
    return (
        <View>
            <Button
                title='Xác nhận'
                onPress= {() => {
                    //TODO: POST API cart here - Method: POST (Payload require)  - /api/payment
                    const array = []
                    context.store.cart.forEach(value => {
                        array.push({
                            product_id : value.product_id,
                            count : value.count
                        })
                    })
                    const payload = {
                        cart : array,
                        phone : context.store.user.phone,
                        total : context.store.total
                    }

                    axios.post(`${API_BASE}/api/payment`,payload, {
                        headers: {
                            Authorization : `Bearer ${context.store.user.token}`
                        }
                    })
                        .then(value => {
                            if (value==='Success') {
                                navigation.navigate(`${srcSuccess}`)
                            }

                        })
                        .catch(reason => {

                        })


                }}
            />
            <Text> {text} </Text>
        </View>
    )
}
