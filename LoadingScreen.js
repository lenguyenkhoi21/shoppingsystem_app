import React, {useEffect, useState} from 'react'
import {Image, Text, View} from 'react-native'
import {style} from "./AppStyle";

export const LoadingScreen = () => {
    const [dot, setDot] = useState('.  ')

    useEffect(() => {

        const interval = setInterval(_ => {
            let dt = dot
            switch (dt) {
                case '.  ':
                    setDot('.. ')
                    break

                case '.. ':
                    setDot('...')
                    break

                case '...':
                    setDot('.  ')
                    break
            }
        }, 150);

        return _ => clearTimeout(interval)

    })


    return (
        <View style={style.loadingContainer}>
            <View style={style.loadingCenter}>
                <Image
                    source={require('./assets/logo.png')}
                    style={style.loadingImage}
                />

                <View style={style.loadingCenter_2}>
                    <Text style={style.loadingText}> Loading {dot} </Text>
                    <Text style={style.loadingText}> Fast - Simple - Smart - Convention </Text>
                </View>


            </View>

            <View style={style.loadingCenterBottom}>
                <Text style={style.loadingText} > Copyright © 2021 all rights reserved By KISS Team </Text>
            </View>
        </View>
    )
}


