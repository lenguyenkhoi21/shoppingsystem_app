import React, {useContext} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {HomeScreen} from './Components/Home/HomeScreen'
import {Image, View} from 'react-native'
import {FavoriteScreen} from './Components/Favorite/FavoriteScreen'
import {CartScreen} from './Components/Cart/CartScreen'
import {UserScreen} from './Components/User/UserScreen'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {AppState, Store} from './Store'
import {AuthenticationScreen} from './Components/Authentication/AuthenticationScreen'
import {style} from './AppStyle'
import {tabCart, tabFavorite, tabHome, tabUser} from './Common'

const Tab = createBottomTabNavigator()

const MainScreen = () => {
    const app = useContext(Store)

    return (
        <Tab.Navigator
            initialRouteName={tabHome}
            tabBarOptions={{
                showLabel : false,
                style : style.container
            }}
        >
            <Tab.Screen
                name={tabHome}
                component={HomeScreen}
                options={{
                    tabBarIcon : ({focused}) => (
                        <View>
                            <Image
                                source={require('./assets/home.png')}
                                style={{
                                    height : 25,
                                    width : 25,
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
                    tabBarIcon : ({focused}) => (
                        <View>
                            <Image
                                source={require('./assets/heart.png')}
                                style={{
                                    height : 25,
                                    width : 25,
                                    tintColor: focused ? '#FA4A0C' : '#000000'
                                }}
                            />
                        </View>
                    )
                }}
            >
                {() => (
                    app.user===null ? <AuthenticationScreen /> :  <FavoriteScreen />
                )}
            </Tab.Screen>


            <Tab.Screen
                name={tabCart}
                options={{
                    tabBarIcon : ({focused}) => (
                        <View>
                            <Image
                                source={require('./assets/cart.png')}
                                style={{
                                    height : 25,
                                    width : 25,
                                    tintColor: focused ? '#FA4A0C' : '#000000'
                                }}
                            />
                        </View>
                    )
                }}
            >
                {() => (
                    app.user===null ? <AuthenticationScreen /> :  <CartScreen />
                )}
            </Tab.Screen>


            <Tab.Screen
                name={tabUser}
                options={{
                    tabBarIcon : ({focused}) => (
                        <View>
                            <Image
                                source={require('./assets/user.png')}
                                style={{
                                    height : 25,
                                    width : 25,
                                    tintColor: focused ? '#FA4A0C' : '#000000'
                                }}
                            />
                        </View>
                    )
                }}
            >
                {()=> (
                    app.user===null ? <AuthenticationScreen /> :  <UserScreen />
                )}
            </Tab.Screen>
        </Tab.Navigator>
    )
}

const App = () => {
    const app = AppState()

    return (
        <NavigationContainer>
            <Store.Provider value={app}>
                <MainScreen />
            </Store.Provider>
        </NavigationContainer>
    )
}


export default App
