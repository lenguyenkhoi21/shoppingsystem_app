import React, {useContext, useState} from 'react'
import {FlatList, Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native'
import {GlobalContext} from '../../AppState'

export const Search = ({ navigation }) => {
    const context = useContext(GlobalContext)

    const Item = ( {item}) => {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Sản phẩm', {
                            item : item
                        })
                    }}
                >
                    <Text>  {item.name}  </Text>
                    <Image
                        style={{ height : 200, width : 200 }}
                        source={{
                            uri: `${item.image}`
                        }}
                    />
                    <Text> {item.price} </Text>
                </TouchableOpacity>
            </View>
        )
    }

    //TODO: Styling here
    return (
        <View style={{flex : 1}}>
            <View style={{flex : 1}}>
                <TextInput
                    style={{height: 40, borderWidth: 1, width : 200, marginLeft :130, marginTop : 10}}
                    placeholder='Tìm kiếm ...'
                    onChangeText = {(text) => {
                        setTimeout(() => {
                            context.searchProduct(text)
                        }, 1000)
                    }}
                />
            </View>
            <View style={{flex : 9}}>
                <SafeAreaView>
                    <ScrollView>
                        <FlatList
                            data={context.store.search}
                            renderItem={Item}
                            keyExtractor={item => item.product_id}
                        />
                    </ScrollView>
                </SafeAreaView>


            </View>
        </View>
    )
}
