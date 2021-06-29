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
    }
})
