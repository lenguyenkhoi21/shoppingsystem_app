import {
    Image, ScrollView,
    Text,
    TouchableOpacity,
    SafeAreaView,
    View
}
from 'react-native'
import React, {useContext} from 'react'
import {GlobalContext} from '../../AppState'
import {tabCart} from '../../Common'
import {style} from './HomeStyle'

export const Product = ( { route, navigation } ) => {
    const context = useContext(GlobalContext)
    const { item } = route.params
    const setProduct = route.params.setProduct
    setProduct(item.product_id)

    //TODO: Styling here
    return (
        <ScrollView>
            <SafeAreaView style={{marginBottom : 50}}>
                <View style={[style.center, style.viewProduct]} >
                    <View style={style.center}>

                        <Image
                            style={[style.imageProduct, style.viewItem]}
                            source={{
                                uri: `${item.image}`
                            }}
                        />

                        <Text style={style.nameProduct}> {item.name}  </Text>
                        <Text style={[style.nameProduct, style.priceProduct]}> {item.price} VNĐ </Text>

                        <Text style={style.desProduct}> Mô tả: <Text style={style.desNormalProduct}> {item.description} </Text> </Text>
                    </View>

                    <TouchableOpacity
                        title=''
                        style={style.btn}
                        onPress={() => {
                            const product = {
                                product_id : item.product_id,
                                image : item.image,
                                name : item.name,
                                price : item.price
                            }
                            context.addToCart(product)
                            navigation.navigate(`${tabCart}`)
                        }}
                    >
                        <Text style={style.btnText}> Thêm vào giỏ hàng </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ScrollView>

    )
}
