import {StyleSheet} from 'react-native'

export const style = StyleSheet.create({
    center : {
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewWrapper : {
        marginTop : 50
    },
    txtInput : {
        height: 40,
        width : 200,
        paddingLeft : 10,
        borderWidth: 1,
        borderRadius : 5,
        marginBottom: 10
    },
    txtWrapper : {
        marginBottom : 10
    },
    funcWrapper : {
        width: 200
    },
    txtFunc : {
        flexDirection : 'row',
    },
    loginBtn : {
        position: 'absolute',
        backgroundColor : '#FA4A0C',
        borderRadius : 6,
        padding : 3,
        left : 0
    },
    signupBtn : {
        position: 'absolute',
        backgroundColor : '#FA4A0C',
        borderRadius : 6,
        padding : 3,
        right : 0
    },
    txtColorBtn : {
        color : 'white',
        fontWeight : 'bold'
    },
    signupBtn2 : {
        backgroundColor : '#FA4A0C',
        borderRadius : 6,
        padding : 3,
        left : 0
    },
    errorText : {
        marginBottom : 6,
        color : '#eb4034',
        width : 200
    }
})
