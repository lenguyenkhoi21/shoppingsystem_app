import {
    FlatList,
    Image,
    Pressable,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'
import React, {useContext} from 'react'
import {GlobalContext} from '../../AppState'
import {srcProduct, srcSearch} from '../../Common'
import {style} from './HomeStyle'

export const Shop = ({ navigation }) => {
    const context = useContext(GlobalContext)
    const data = context.store.products

    //TODO: Styling here
    const Item = ( {item} ) => {
        return (
            <View style={style.viewItem} >
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate(`${srcProduct}`, {
                            item : item
                        })
                    }}
                    key={item.product_id}
                    style={style.center}
                >
                    <Image
                        style={style.imageProduct}
                        source={{
                            uri: `${item.image}`
                        }}
                    />
                    <Text style={style.textProduct} > {item.name} </Text>
                </TouchableOpacity>
            </View>
        )
    }

    //TODO: Styling here
    return (
        <View style={style.viewContainer}>
            <View style={style.viewChildren1}>
                <Pressable onPress={() => {
                    navigation.navigate(`${srcSearch}`)
                }}>
                    <TextInput
                        style={style.textSearch}
                        editable={false}
                        selectTextOnFocus={false}
                        placeholder='Tìm kiếm ...'
                    />
                </Pressable>
            </View>

            <View style={style.viewChildren9}>
                <SafeAreaView>
                    <ScrollView>
                        <FlatList
                            data={data}
                            renderItem={Item}
                            keyExtractor={item => item.product_id}
                            contentContainerStyle={style.center}
                        />
                    </ScrollView>
                </SafeAreaView>
            </View>

        </View>
    )
}
