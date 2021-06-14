import {Button, Image, Text, View} from 'react-native'
import React from 'react'

export const Product = ( { route, navigation } ) => {


    const {item} = route.params

    return (
        <View>
            <Text>  {item.name}  </Text>
            <Image
                style={{ height : 200, width : 200 }}
                source={{
                    uri: `${item.image}`
                }}
            />
            <Text> {item.price} </Text>
            <Button
                title='Thêm vào giỏ hàng'
                onPress={() => {
                    navigation.navigate('Mua sắm')
                }}
            />
            <Button
                title='Thêm vào danh sách yêu thích'
                onPress={() => {
                    navigation.navigate('Yêu thích')
                }}
            />
        </View>
    )
}
