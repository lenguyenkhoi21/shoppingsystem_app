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
        left: 160
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
        marginBottom: 10
    },
    changeIcon: {
        width: 12,
        height: 12,
        marginTop: 3
    }
})
