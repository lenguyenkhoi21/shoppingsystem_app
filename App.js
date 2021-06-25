import React, {useContext, useEffect} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {HomeScreen} from './Components/Home/HomeScreen'
import {Image, Text, View} from 'react-native'
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

const Tab = createBottomTabNavigator()

const MainScreen = () => {
    const context = useContext(GlobalContext)

    //TODO Fetch API From Here - Method GET - /api/fetch
    useEffect(() => {
        axios.get(`${API_BASE}/api/fetch`)
            .then(value => {
                context.fetchData(value.data.products)
            })
            .catch(reason => {

            })
        return () => {

        }
    }, [])

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
                        <View>
                            <Image
                                source={require('./assets/home.png')}
                                style={{
                                    height: 25,
                                    width: 25,
                                    tintColor: focused ? '#FA4A0C' : '#000000'
                                }}
                            />
                        </View>
                    )
                }}
            />


            <Tab.Screen
                name={tabFavorite}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View>
                            <Image
                                source={require('./assets/heart.png')}
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
                        <View>
                            <Image
                                source={require('./assets/cart.png')}
                                style={{
                                    height: 25,
                                    width: 25,
                                    tintColor: focused ? '#FA4A0C' : '#000000'
                                }}
                            />
                            {
                                context.store.totalItem > 0 ? <Text > {context.store.totalItem} </Text> : <Text> </Text>
                            }
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
                        <View>
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

        ///Hello, this phan man minh hang
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
