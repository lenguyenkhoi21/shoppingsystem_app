import React, {useContext, useEffect, useState} from 'react'
import {
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import {srcDetail} from '../../Common'
import axios from "axios";
import {API_BASE} from "../../App.config"
import {GlobalContext} from "../../AppState"
import {useIsFocused} from "@react-navigation/native"
import {Table, Row, Rows, TableWrapper} from 'react-native-table-component'
import {style} from './UserStyle'

export const History = ({ navigation }) => {

    const [data, setData] = useState([])

    const isFocused = useIsFocused()
    const context = useContext(GlobalContext)

    //TODO: Fetch API From Database to show history - Method : GET - /api/history/:phone
    useEffect(() => {
        if (isFocused) {
            axios.get(`${API_BASE}/api/history/${context.store.user.phone}`, {
                headers: {
                    Authorization : `Bearer ${context.store.user.token}`
                }
            })
                .then(value => {

                    if (value.data.message === 'Success') {
                        const list = []

                        value.data.history.map((value, index) => {
                            const row = []
                            row.push(value.bill_id)
                            row.push(value.date)
                            row.push(value.time)

                            const detail = []

                            value.detail.map((value1, index1) => {
                                detail.push([value1.product_name, value1.count, value1.sum])
                            })

                            const show_detailBtn =
                                <TouchableOpacity
                                    style={[ style.center, style.detailBtn ]}
                                    onPress={() => {
                                        navigation.navigate(`${srcDetail}`, {
                                            detail: detail,
                                            total: value.total
                                        })
                                    }}
                                >
                                    <Text>Chi tiết</Text>
                                </TouchableOpacity>
                            row.push(show_detailBtn)

                            list.push(row)
                        })
                        setData(list)
                    }

                })
                .catch(reason => {

                })
        }

        return () => {

        }
    }, [isFocused])

    const header = ['Mã Hóa Đơn', 'Ngày & Tháng', 'Giờ', 'Xem chi tiết']

    //TODO: Styling here, passing prop to Detail
    return (
        <View  style={style.viewChildren1} >
            <View style={style.viewChildren1} />

            <View style={style.viewChildren8}>
                <SafeAreaView>
                    <ScrollView>
                        <Table style={style.container}>
                            <Row
                                data={header}
                                flexArr={[1.25, 1.25, 1, 1.25]}
                                style={style.head}
                                textStyle={[ style.text, style.textHeader ]}
                            />
                            <TableWrapper style={style.wrapper}>
                                <Rows
                                    style={style.row}
                                    textStyle={[style.text]}
                                    data={data}
                                    flexArr={[1.25, 1.25, 1, 1.25]}
                                />
                            </TableWrapper>
                        </Table>
                    </ScrollView>
                </SafeAreaView>

            </View>

            <View style={style.viewChildren1} />
        </View>
    )
}
