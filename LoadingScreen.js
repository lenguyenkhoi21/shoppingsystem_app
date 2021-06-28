import React, {useEffect, useState} from 'react'
import {Image, Text, View} from 'react-native'

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
        <View style={{justifyContent: 'center', alignItems: 'center', marginTop : 200}}>
            <Image
                source={require('./assets/logo.png')}
                style={{ height : 230, width : 230 }}
            />
            <Text style={{ marginLeft : 10, fontWeight : '600' }}> Loading {dot} </Text>
            <Text sytle={{fontWeight : '600'}}> Fast - Simple - Smart - Convention </Text>
            <Text style={{ marginTop : 250, fontWeight : '600' }} > Copyright © 2021 all rights reserved By KISS Team </Text>
        </View>
    )
}


