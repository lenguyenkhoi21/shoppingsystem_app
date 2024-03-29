import React from 'react'
import {
    SafeAreaView,
    View,
    ScrollView
} from 'react-native'
import {
    Row,
    Rows,
    Table,
    TableWrapper
} from 'react-native-table-component'
import {style} from './UserStyle'

export const Detail = ({route}) => {
    const { detail, total } = route.params
    const header = ['Tên Sản Phẩm', 'Số Lượng', 'Thành Tiền']

    //TODO: Styling here, This is only show
    return (
        <SafeAreaView>
            <ScrollView>
                <View  style={style.detailFlex1} >
                    <View style={style.detailFlex1} />
                        <View style={style.detailFlex8}>

                            <Table style={style.container}>
                                <Row
                                    data={header}
                                    flexArr={[1.5, 1, 1]}
                                    style={style.head}
                                    textStyle={style.text}
                                />
                                <TableWrapper style={style.wrapper}>
                                    <Rows
                                        data={detail}
                                        flexArr={[1.5, 1, 1]}
                                        style={style.row}
                                        textStyle={style.text}
                                    />
                                </TableWrapper>

                                <Row
                                    data={['', '', ` Thành tiền:  ${total} VND`]}
                                    flexArr={[1, 1, 2.5]}
                                    style={style.rowTotal}
                                    textStyle={style.textTotal}
                                />
                            </Table>
                        </View>
                    <View style={style.detailFlex1} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
