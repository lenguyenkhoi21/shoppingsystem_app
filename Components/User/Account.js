import React, {useContext, useEffect, useState} from 'react'
import {Image, Text, View} from 'react-native'
import axios from "axios";
import {API_BASE} from "../../App.config";
import {GlobalContext} from "../../AppState";

export const Account = () => {
    const context = useContext(GlobalContext)
    const [profile, setProfile] = useState({
        name : null,
        email : null,
        avatar : null
    })

    //TODO: Fetch API Account - Method: GET - /api/profile/:phone
    useEffect(() => {
        axios.get(`${API_BASE}/api/profile/${context.store.user.phone}`, {
            headers: {
                Authorization : `Bearer ${context.store.user.token}`
            }
        })
            .then(value => {
                if (value.data.message === 'Success') {

                    setProfile({
                        name : value.data.name,
                        email : value.data.email,
                        avatar : value.data.avatar
                    })
                }
            })
            .catch(reason => {

            })



        return () => {

        }
    }, [])

    //TODO: Template, POST API to update account - Method: PATCH (Payload Require) - /api/profile/
    return (
        <View>
            <Image
                style = {{  width: 100, height: 100 }}
                source={{ uri : profile.avatar }}
            />
            <Text> {profile.name} </Text>
            <Text> {profile.email} </Text>
        </View>
    )
}
