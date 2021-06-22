import {Button, Image, Text, View} from 'react-native'
import React, {useContext} from 'react'
import {GlobalContext} from '../../AppState'
import {tabCart} from '../../Common'


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
                    //navigation.navigate('Yêu thích')
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
