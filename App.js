import React, {useContext, useEffect, useState} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {HomeScreen} from './Components/Home/HomeScreen'
import {Image, ImageBackground, Text, View} from 'react-native'
import {FavoriteScreen} from './Components/Favorite/FavoriteScreen'
import {CartScreen} from './Components/Cart/CartScreen'
import {UserScreen} from './Components/User/UserScreen'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {AuthenticationScreen} from './Components/Authentication/AuthenticationScreen'
import {style} from './AppStyle'
import {
    tabCart,
    tabFavorite,
    tabHome,
    tabUser}
from './Common'
import {AppState, GlobalContext} from './AppState'
import {API_BASE} from "./App.config";
import axios from "axios";
import {LoadingScreen} from './LoadingScreen'

const Tab = createBottomTabNavigator()

const MainScreen = () => {
    const context = useContext(GlobalContext)
    const [loading, setLoading] = useState(true)

    //TODO Fetch API From Here - Method GET - /api/fetch
    useEffect(() => {

        axios.get(`${API_BASE}/api/fetch`)
            .then(value => {
                context.fetchData(value.data.products)
                setTimeout(() => {
                    setLoading(false)
                }, 2000)

            })
            .catch(reason => {

            })
        return () => {

        }



    }, [])

    if (loading) {
        return (
            <Tab.Navigator>
                <Tab.Screen
                    name='Loading Screen'
                    options={{tabBarVisible : false}}
                    component={LoadingScreen}
                >
                </Tab.Screen>
            </Tab.Navigator>
        )
    }

    //TODO: Styling here if need
    return (
        <Tab.Navigator
            initialRouteName={tabHome}
            tabBarOptions={{
                showLabel: false,
                style: style.container
            }}
        >
            <Tab.Screen
                name={tabHome}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={style.tabScreen}>
                            <View>
                                <ImageBackground
                                    style={style.backgroundCart}
                                >
                                    <Text style={ style.textCart }>  </Text>
                                </ImageBackground>
                            </View>

                            <Image
                                source={require('./assets/home.png')}
                                style={{
                                    height: 25,
                                    width: 25,
                                    tintColor: focused ? '#FA4A0C' : '#000000'
                                }}
                            />
                            {

                            }
                        </View>
                    )
                }}
            />


            <Tab.Screen
                name={tabFavorite}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={style.tabScreen}>
                            <View>
                                <ImageBackground
                                    style={style.backgroundCart}
                                >
                                    <Text style={ style.textCart }>  </Text>
                                </ImageBackground>
                            </View>
                            <Image
                                source={require('./assets/star.png')}
                                style={{
                                    height: 25,
                                    width: 25,
                                    tintColor: focused ? '#FA4A0C' : '#000000'
                                }}
                            />
                        </View>
                    )
                }}
            >
                {() => (
                    context.store.user.phone === null ? <AuthenticationScreen/> : <FavoriteScreen/>
                )}
            </Tab.Screen>


            <Tab.Screen
                name={tabCart}
                options={{
                    tabBarIcon: ({focused}) => (
                        // style={{position: 'absolute', justifyContent: 'center', alignItems: 'center'}}
                        <View style={[style.tabScreen, style.tabCartStyle]}>
                            {
                                context.store.totalItem > 0 ?
                                    <View style={style.viewCart} >
                                        <ImageBackground
                                            style={style.backgroundCart}
                                            source = {require('./assets/circle_red.png')}
                                        >
                                            <Text style={ style.textCart }> {context.store.totalItem} </Text>
                                        </ImageBackground>
                                    </View>
                                    :
                                    <View>
                                        <ImageBackground
                                            style={style.backgroundCart}
                                        >
                                            <Text style={ style.textCart }>  </Text>
                                        </ImageBackground>
                                    </View>
                            }
                            <Image
                                source={require('./assets/cart.png')}
                                style={{
                                    position : 'relative',
                                    height: 25,
                                    width: 25,
                                    tintColor: focused ? '#FA4A0C' : '#000000'
                                }}
                            />
                        </View>
                    )
                }}
            >
                {() => (
                    context.store.user.phone === null ? <AuthenticationScreen/> : <CartScreen/>
                )}
            </Tab.Screen>


            <Tab.Screen
                name={tabUser}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={style.tabScreen} >
                            <View>
                                <ImageBackground
                                    style={style.backgroundCart}
                                >
                                    <Text style={ style.textCart}>  </Text>
                                </ImageBackground>
                            </View>
                            <Image
                                source={require('./assets/user.png')}
                                style={{
                                    height: 25,
                                    width: 25,
                                    tintColor: focused ? '#FA4A0C' : '#000000'
                                }}
                            />
                        </View>
                    )
                }}
            >
                {() => (
                    context.store.user.phone === null ? <AuthenticationScreen/> : <UserScreen/>
                )}
            </Tab.Screen>
        </Tab.Navigator>
    )
}

const App = () => {
    return (
        <NavigationContainer>
            <AppState>
                <MainScreen />
            </AppState>
        </NavigationContainer>
    )
}

export default App
