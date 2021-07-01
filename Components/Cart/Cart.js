import React, {useContext} from 'react'
import {
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import {srcPayment} from '../../Common'
import {GlobalContext} from '../../AppState'
import {style} from './CartStyle'

export const Cart = ({ navigation }) => {
    const context = useContext(GlobalContext)

    if (context.store.cart.length === 0) {
        return (
            <View style={[style.sadFacePosition, style.center]}>
                <Image
                    style={style.sadFace}
                    source = {require('../../assets/sad_face.png')}
                />
                <Text> Xin lỗi bạn chưa có sản phẩm nào trong giỏ hàng ! </Text>
            </View>
        )
    }

    //TODO: Styling here
    return (
        <SafeAreaView style={style.safeView}>
            <ScrollView>
                <View>
                    {
                        context.store.cart.map((value, index) => (
                            <View
                                key={value.product_id}
                                style={[style.wrapper, style.containerMargin]}
                            >
                                <View style={style.containerCart}>
                                    <View>
                                        <Image
                                            style={style.productImage}
                                            source={{
                                                uri: value.image
                                            }}
                                        />
                                    </View>

                                    <View style={style.contentWrapper}>
                                        <View style={style.cartInfoWrapper}>
                                            <Text style={[style.textSpace, style.nameProduct]}> Sản phẩm: {value.name} </Text>
                                            <Text style={style.textSpace}> Đơn giá: {value.price} </Text>
                                            <View style={style.viewProductCart}>
                                                <Text style={style.textCount} > Số lượng: </Text>
                                                <TouchableOpacity
                                                    onPress={() => {
                                                        const product = {
                                                            product_id : value.product_id,
                                                            image : value.image,
                                                            name : value.name,
                                                            price : value.price
                                                        }

                                                        context.decrement(product)
                                                    }}
                                                >
                                                    <Image
                                                        style={style.changeIcon}
                                                        source={require('../../assets/minus.png')}
                                                    />
                                                </TouchableOpacity>
                                                <Text
                                                    style={style.titleTextCount}
                                                > {value.count} </Text>
                                                <TouchableOpacity
                                                    onPress={() => {
                                                        const product = {
                                                            product_id : value.product_id,
                                                            image : value.image,
                                                            name : value.name,
                                                            price : value.price
                                                        }

                                                        context.increment(product)
                                                    }}
                                                >
                                                    <Image
                                                        style={style.changeIcon}
                                                        source={require('../../assets/plus.png')}
                                                    />
                                                </TouchableOpacity>
                                            </View>

                                        </View>

                                        <View style={style.btnWrapper}>
                                            <TouchableOpacity
                                                style={style.btnPosition}
                                                onPress = {() => {
                                                    context.removeFromCart(value)
                                                }}
                                            >
                                                <Image
                                                    style={style.removeIcon}
                                                    source={require('../../assets/close.png')}
                                                />
                                            </TouchableOpacity>
                                        </View>

                                    </View>

                                </View>
                            </View>
                        ))
                    }

                    <View style={style.bottomBtn}>
                        <View
                            style={style.buttons}
                        >
                            <TouchableOpacity
                                style={[style.orderButton, style.buttonLeft]}
                                onPress = {() => {
                                    context.clear()
                                }}
                            >
                                <Text style={style.orderButtonText}> Hủy </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[style.orderButton, style.buttonRight]}
                                onPress = {() => {
                                    navigation.navigate(`${srcPayment}`)
                                }}
                            >
                                <Text style={style.orderButtonText}> Thanh toán </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}
