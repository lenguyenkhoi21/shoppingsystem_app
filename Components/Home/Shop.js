import {image1, image2, image3, image4} from './DummyData'
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
import React from 'react'

export const Shop = ({ navigation }) => {

    const DATA = [
        {
            id: '1',
            name: 'Trà sữa chân châu',
            price : 19000,
            image : `${image1}`
        },
        {
            id: '2',
            name: 'Trà sữa truyền thống',
            price : 29000,
            image : `${image2}`
        },
        {
            id: '3',
            name: 'Trà đào',
            price : 26000,
            image : `${image3}`
        },
        {
            id: '4',
            name: 'Nước cam',
            price : 29000,
            image : `${image4}`
        }
    ]

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

    return (
        <View style={{flex : 1}}>
            <View style={{flex : 1}}>
                {/*<TouchableOpacity*/}
                {/*    onPress={() => {*/}
                {/*        navigation.navigate('Tìm kiếm')*/}
                {/*    }}*/}
                {/*>*/}
                {/*    */}
                {/*</TouchableOpacity>*/}
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
                            data={DATA}
                            renderItem={Item}
                            keyExtractor={item => item.id}
                        />

                    </ScrollView>
                </SafeAreaView>
            </View>
        </View>
    )
}
