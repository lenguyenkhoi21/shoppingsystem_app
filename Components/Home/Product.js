import {Button, Image, Text, View} from 'react-native'
import React, {useContext} from 'react'
import {GlobalContext} from '../../AppState'
import {srcFavorite, srcLogin, tabCart, tabFavorite} from '../../Common'
import axios from "axios";
import {API_BASE} from "../../App.config";


export const Product = ( { route, navigation } ) => {
    const context = useContext(GlobalContext)
    const { item } = route.params

    //TODO: Styling here
    return (
        <View>
            <Text>  {item.name}  </Text>
            <Image
                style={{ height : 200, width : 200 }}
                source={{
                    uri: `${item.image}`
                }}
            />

            <Button
                title='Thêm vào danh sách yêu thích'
                onPress={() => {
                    if (context.store.user.phone === null) {
                        navigation.navigate(`${tabFavorite}`)
                    } else {
                        const payload = {
                            phone: context.store.user.phone,
                            product_id: item.product_id,
                            status: true
                        }

                        axios.patch(`${API_BASE}/api/favorite`, payload, {
                            headers: {
                                Authorization : `Bearer ${context.store.user.token}`
                            }
                        })
                            .then(value => {
                                if (value.data.message === 'Success') {
                                    navigation.navigate(`${tabFavorite}`)
                                }
                            })
                            .catch(reason => {

                            })

                    }
                }}
            />

            <Text> {item.price} </Text>
            <Button
                title='Thêm vào giỏ hàng'
                onPress={() => {
                    const product = {
                        product_id : item.product_id,
                        name : item.name,
                        price : item.price
                    }
                    context.addToCart(product)
                    navigation.navigate(`${tabCart}`)
                }}
            />

        </View>
    )
}
