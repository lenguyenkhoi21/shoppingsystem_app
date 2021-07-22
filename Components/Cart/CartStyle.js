import {StyleSheet} from 'react-native'

export const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 30,
        backgroundColor: '#fff'
    },
    containerMargin: {
        flex: 1,
        padding: 16,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        backgroundColor: '#fff',
        borderRadius: 5
    },
    containerCart: {
        flexDirection: 'row',

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
    contentWrapper: {
        flexDirection: 'row',
        marginLeft: 50,
    },
    cartInfoWrapper: {
        flexDirection: 'column'
    },
    btnWrapper: {
        position: 'absolute'
    },
    btnPosition: {
        position: 'relative',
        bottom: 2,
        left: 145
    },
    title: {
        flex: 1,
        backgroundColor: '#f6f8fa'
    },
    row: {
        height: 75,
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
    textOrder: {
        color: 'white'
    },
    center : {
        justifyContent: 'center',
        alignItems: 'center'
    },
    orderBtn: {
        backgroundColor:'#FA4A0C',
        borderRadius: 5,
        height:30
    },
    productImage: {
        marginLeft: 10,
        width: 75,
        height: 75,
        borderRadius: 5
    },
    removeIcon: {
        width: 15,
        height: 15
    },
    textSpace: {
        marginBottom: 10,
    },
    changeIcon: {
        width: 12,
        height: 12,
        marginTop: 3
    },
    nameProduct : {
        width : 130
    },
    textCount : {
        marginRight: 10
    },
    bottomBtn : {
        marginTop: 10,
        marginBottom : 50,
        padding : 20
    },
    viewProductCart : {
        flexDirection: 'row'
    },
    titleTextCount : {
        marginRight: 7,
        marginLeft: 7
    },
    sadFace : {
        height : 200,
        width : 200,
        marginBottom: 20
    },
    sadFacePosition : {
        marginTop: 70
    },
    safeView : {
        marginBottom : 20
    },
    orderButton : {
        backgroundColor:'#FA4A0C',
        borderRadius: 5,
        padding : 5
    },
    orderButtonText : {
        color : 'white',
        fontWeight : 'bold'
    },
    buttonLeft : {
        position : 'absolute',
        left: 0
    },
    buttonRight : {
        position : 'absolute',
        right: 0
    },
    buttons : {
        padding : 0
    }
})
