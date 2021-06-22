import React, {useContext, useEffect} from 'react'
import {Button, Text, View} from 'react-native'
import {srcPayment} from '../../Common'
import {GlobalContext} from '../../AppState'

export const Cart = ({ navigation }) => {
    const context = useContext(GlobalContext)

    //TODO: Styling here
    return (
        <View>
            {
                context.store.cart.map((value, index) => (
                    <View key={value.product_id}>
                        <Text> {value.name} </Text>
                        <Text> {value.price} </Text>
                        <Text> {value.count} </Text>
                        <Button
                            title = 'Xóa'
                            onPress = {() => {
                                context.removeFromCart(value)
                            }}
                        />
                    </View>
                ))

            }
            <Text> {context.store.total > 0 ? <Text> {context.store.total}</Text> : <Text/>}  </Text>
            <Button
                title = 'Thanh toán'
                onPress = {() => {
                    navigation.navigate(`${srcPayment}`)
                }}
            />

            <Button
                title = 'Hủy'
                onPress = {() => {
                    context.store.remove()
                }}
            />
        </View>
    )
}
