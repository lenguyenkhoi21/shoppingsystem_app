import React, {useEffect, useRef, useState} from 'react'
import {
    FlatList,
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
}
from 'react-native'
import {srcProduct} from "../../Common";
import {style} from './HomeStyle'
import axios from 'axios'
import {API_BASE, NEXT_API} from '../../App.config'

const usePrevious = (value) => {
    const ref = useRef(value)
    useEffect(() => {
        setTimeout(()=> {
            ref.current = value
        }, 1200)

    })
    return ref.current
}

export const Search = ({ navigation }) => {
    const [text, setText] = useState('')
    const [data, setData] = useState([])

    const prevText = usePrevious(text)

    useEffect(() => {
        //axios.get(`${API_BASE}/api/search/${text}`)
        console.log('Previous State ' + prevText.length)
        console.log('Current State ' + text.length)
        if (Math.abs(prevText.length - text.length) > 3 || prevText.length === text.length) {
            axios.get(`${API_BASE}/api/search/${text}`)
            //axios.get(`${NEXT_API}/react-native`)
                .then(value => {
                    if (value.data.message==='Success') {
                        setData(value.data.products)
                    }
                })
                .catch(reason => {

                })
        }

        return () => {
        }
    }, [text])


    const Item = ( {item}) => {
        return (
            <View style={style.viewItem} >
                <TouchableOpacity
                    onPress={() => {
                        // const draft = {
                        //     price : item.price,
                        //     name : item.name,
                        //     product_id : item.product_id
                        // }
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
        <View style={style.viewChildren1}>
            <View style={style.viewChildren1}>
                <TextInput
                    style={style.textSearch}
                    placeholder='Tìm kiếm ...'
                    onChangeText = {(textInput) => {
                        setText(textInput)
                    }}
                />
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
