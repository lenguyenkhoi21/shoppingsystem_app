import {StyleSheet} from 'react-native'

export const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 30,
        backgroundColor: '#fff'
    },
    head: {
        height: 40,
        backgroundColor: '#f1f8ff',
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1
    },
    wrapper: {
        flexDirection: 'row',
        borderWidth: 1
    },
    title: {
        flex: 1,
        backgroundColor: '#f6f8fa'
    },
    row: {
        height: 28,
        borderWidth: 1
    },
    rowTotal: {
        marginTop: 10
    },
    text: {
        textAlign: 'center'
    },
    textHeader: {
        fontWeight: 'bold'
    },
    textTotal: {
        fontWeight: 'bold',
        fontSize: 15
    },
    viewChildren1 : {
        flex : 1
    },
    viewChildren8 : {
        flex : 8
    },
    center : {
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailBtn: {
        backgroundColor: '#a5b6f2',
        borderRadius: 5,
        width: 75,
        marginLeft: 10
    },
    profileWrapper : {
        flexDirection: 'row',
        marginTop: 40,
        marginLeft: 30,
        marginRight : 30,
        backgroundColor : '#FFFFFF',
        borderRadius: 15,
        marginBottom: -10
    },
    profileBtnWrapper : {
        marginTop : 50,
        marginLeft: 30,
        marginRight : 30
    },
    profileInfo : {
        justifyContent : 'center',
        alignItems : 'baseline',
        marginLeft : 10
    },
    profileBtn : {
        backgroundColor : '#FFFFFF',
        padding: 15,
        borderRadius: 15,
        marginBottom : 10
    },
    profileBtnText : {
        fontWeight : 'bold',
        fontSize: 20
    },
    profileBtnContent : {
        justifyContent : 'center',
        alignItems : 'baseline',
        marginLeft : 10,
        marginRight : 10
    },
    profileInfoText : {
        fontWeight : 'bold',
        fontSize: 15
    },
    accountTxtInput : {
        height: 40,
        width : 300,
        paddingLeft : 10,
        borderWidth: 1,
        borderRadius : 5,
        marginBottom: 10,
        padding: 9
    },
    accountText : {
        fontWeight : 'bold',
        fontSize : 18,
        marginBottom : 10
    },
    accountScrollview : {
        marginTop: 40,
        marginLeft: 40,
        marginRight : 30,
        borderRadius: 15,
    },
    accountBtn : {
        marginLeft : 10,
        marginRight : 20,
        marginTop : 40,
        marginBottom : 20,
        backgroundColor : '#FA4A0C',
        padding: 15,
        borderRadius: 30,
    },
    accountBtnContent : {
        justifyContent : 'center',
        alignItems : 'center'
    },
    updateBtnText : {
        fontWeight : 'bold',
        fontSize: 18,
        color : '#FFFFFF'
    },
    errorText : {
        marginBottom : 6,
        color : '#eb4034'
    },
    detailFlex1 : {
        flex : 1
    },
    detailFlex8 : {
        flex : 8
    },
    profileSafeAreaView : {
        marginBottom : 50
    },
    profileImage : {
        width: 100,
        height: 100
    },
    profileImage2 : {
        position : 'absolute',
        right : 0
    }

})
