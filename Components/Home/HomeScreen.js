import React, {useContext, useState} from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {Shop} from './Shop'
import {Search} from './Search'
import {Product} from './Product'
import {srcProduct, srcSearch, srcShop, tabFavorite} from '../../Common'
import {Image, TouchableOpacity} from 'react-native'
import axios from 'axios'
import {GlobalContext} from '../../AppState'
import {API_BASE} from '../../App.config'

const HomeStack = createStackNavigator()

export const HomeScreen = ({navigation}) => {
    const context = useContext(GlobalContext)
    const [product, setProduct] = useState(null)
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name={srcShop} component={Shop} />
            <HomeStack.Screen name={srcSearch} component={Search} />
            <HomeStack.Screen
                name={srcProduct}
                component={Product}
                options={{
                    headerRight: () => (
                        <TouchableOpacity
                            style={{ marginRight : 20 }}
                            onPress={() => {
                                if (context.store.user.phone === null) {
                                    navigation.navigate(`${tabFavorite}`)
                                } else {
                                    const payload = {
                                        phone: context.store.user.phone,
                                        product_id: product,
                                        status: true
                                    }

                                    axios.patch(`${API_BASE}/api/favorite`, payload, {
                                        headers: {
                                            Authorization : `Bearer ${context.store.user.token}`
                                        }
                                    })
                                        .then(value => {
                                            if (value.data.message === 'Success') {
                                                console.log('here')
                                                navigation.navigate(`${tabFavorite}`)
                                            }
                                        })
                                        .catch(reason => {

                                        })

                                }
                            }}
                        >
                            <Image
                                source={require('../../assets/heart.png')}
                                style={{
                                    height: 25,
                                    width: 25,
                                    tintColor: '#000000'
                                }}
                            />
                        </TouchableOpacity>
                    )
                }}
                initialParams = { {setProduct : setProduct}  }
            />
        </HomeStack.Navigator>
    )
}
