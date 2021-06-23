import React from 'react'
import {FlatList, SafeAreaView, Text, View} from 'react-native'


export const Detail = ({route}) => {
    const { detail, total } = route.params

    const Item = ({item}) => {
        console.log(item)
        return (
            <View>
                <Text> Tên sản phẩm: {item.product_name} </Text>
                <Text> Số lượng: {item.count} </Text>
                <Text> Thành tiền: {item.sum} </Text>
            </View>
        )
    }

    //TODO: Styling here, This is only show
    return (
        <View  style={{flex : 1}} >
            <View style={{flex : 1}} />

            <View style={{flex : 8}}>
                <SafeAreaView>
                    <FlatList
                        data={detail}
                        renderItem={Item}
                    />
                    <Text> Tổng:  {total} </Text>
                </SafeAreaView>
            </View>

            <View style={{flex : 1}} />
        </View>
    )
}
