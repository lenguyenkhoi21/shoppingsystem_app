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

export const Shop = ({ navigation }) => {

    const context = useContext(GlobalContext)
    const data = context.store.products

    //TODO: Styling here
    const Item = ( {item} ) => {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Sản phẩm', {
                            item : item
                        })
                    }}
                    key={item.product_id}
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
                <Pressable onPress={() => {
                    navigation.navigate('Tìm kiếm')
                }}>
                    <TextInput
                        style={{height: 40, borderWidth: 1, width : 200, marginLeft :130, marginTop : 10}}
                        editable={false}
                        selectTextOnFocus={false}
                        placeholder='Tìm kiếm ...'
                    />
                </Pressable>
            </View>

            <View style={{flex : 9}}>
                <SafeAreaView>
                    <ScrollView>
                        <FlatList
                            data={data}
                            renderItem={Item}
                            keyExtractor={item => item.product_id}
                        />
                    </ScrollView>
                </SafeAreaView>
            </View>
        </View>
    )
}
