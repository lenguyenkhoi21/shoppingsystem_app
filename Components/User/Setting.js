import React, {useEffect} from 'react'
import {View} from 'react-native'
import {
    CommonActions,
    useIsFocused
} from '@react-navigation/native'
import {srcProfile} from '../../Common'

export const Setting = ({navigation}) => {

    const isFocused = useIsFocused()

    useEffect(() => {
        if (!isFocused) {
            setTimeout(() => {
                navigation.dispatch(
                    CommonActions.reset({
                        index : 1,
                        routes : [{name: `${srcProfile}`}]
                    })
                )
            }, 1000)
        }
    }, [isFocused])

    //TODO: Template if need, will upgrade later
    return (
        <View>

        </View>
    )
}
