import React, {useState} from 'react'
import {image1, image2, image3, image4} from './DummyData'
import {FlatList, Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native'

export const Search = ({ navigation }) => {
    const [text, setText] = useState('')

    const [state, setState] = useState([
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
    ])

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
                <TextInput
                    style={{height: 40, borderWidth: 1, width : 200, marginLeft :130, marginTop : 10}}
                    placeholder='Tìm kiếm ...'
                    onChangeText = {setText}
                />
            </View>
            <View style={{flex : 9}}>
                <SafeAreaView>
                    <ScrollView>
                        {
                            text === '' ?
                                <View>
                                    <Text> {text} </Text>
                                </View> :
                                <FlatList
                                    data={state}
                                    renderItem={Item}
                                    keyExtractor={item => item.id}
                                />
                        }
                    </ScrollView>
                </SafeAreaView>


            </View>
        </View>
    )
}
