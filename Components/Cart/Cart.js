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
                                            <Text style={style.textSpace}> {value.name} </Text>
                                            <Text style={style.textSpace}> {value.price} </Text>
                                            <View style={{flexDirection: 'row'}}>
                                                <TouchableOpacity>
                                                    <Image
                                                        style={style.changeIcon}
                                                        source={require('../../assets/minus.png')}
                                                    />
                                                </TouchableOpacity>
                                                <Text
                                                    style={{
                                                        marginRight: 7,
                                                        marginLeft: 7
                                                    }}
                                                > {value.count} </Text>
                                                <TouchableOpacity>
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
                    {/*<Text> {context.store.total > 0 ? <Text> {context.store.total}</Text> : <Text/>}  </Text>*/}
                    <View
                        style={{
                            marginTop: 200,
                            marginBottom : 50
                        }}>
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
