import {StyleSheet} from 'react-native'

export const style = StyleSheet.create({
    productImage: {
        marginLeft: 10,
        width: 100,
        height: 100,
        borderRadius: 5
    },
    item : {
        flexDirection : 'row'
    },
    center : {
        justifyContent: 'center',
        alignItems: 'center'
    },
    removeIcon : {
        width: 15,
        height: 15
    },
    itemWrapper : {
        borderWidth : 1,
        marginLeft : 10,
        marginRight : 10,
        marginBottom : 10,
        padding : 5,
        borderRadius: 5
    },
    rightContent : {
        position: 'absolute',
        right : 0
    },
    midContent : {
        justifyContent: 'center',
        alignItems: 'baseline',
        marginLeft: 10
    },
    safeView : {
        marginBottom : 50,
        marginTop : 20
    },
    sadFace : {
        height : 200,
        width : 200,
        marginBottom: 20
    },
    sadFacePosition : {
        marginTop: 70
    },
    favoriteFlex1 : {
        flex : 1
    },
    favoriteFlex8 : {
        flex : 8
    }

})
