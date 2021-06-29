import React, {useContext} from 'react'
import {Button, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import {srcPayment} from '../../Common'
import {GlobalContext} from '../../AppState'
import {style} from "./CartStyle"

export const Cart = ({ navigation }) => {
    const context = useContext(GlobalContext)

    //TODO: Styling here
    return (
        <SafeAreaView>
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

                    <View
                        style={style.bottomBtn}>
                        <Button
                            title = 'Thanh toán'
                            onPress = {() => {
                                navigation.navigate(`${srcPayment}`)
                            }}
                        />

                        <Button
                            title = 'Hủy'
                            onPress = {() => {
                                context.store.remove()
                            }}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}
