import React, {
    useContext,
    useEffect,
    useState
} from 'react'
import {
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import {srcSuccess} from '../../Common'
import {GlobalContext} from '../../AppState'
import axios from 'axios'
import {API_BASE} from '../../App.config'
import {
    Row,
    Rows,
    Table,
    TableWrapper
} from 'react-native-table-component'
import {style} from './CartStyle'

export const Payment = ({ navigation }) => {
    const context = useContext(GlobalContext)
    const [text, setText] = useState('')
    const [data, setData] = useState([])
    const [enable, setEnable] = useState(false)

    useEffect(() => {
        const list = []
        context.store.cart.map(value => {
            const row = []
            const image = <Image
                style={style.productImage}
                source={{
                    uri: value.image
                }}
            />
            row.push(image)
            row.push(value.name)
            row.push(value.count)
            row.push(value.count * value.price)
            list.push(row)
        })
        setData(list)

    }, [])

    const headers = ['Sản Phẩm', 'Tên Sản Phẩm','Số Lượng', 'Thành Tiền']

    const orderBtn =
        <TouchableOpacity
            style={[style.orderBtn, style.center]}
            disabled={enable}
            onPress= {() => {
                //TODO: POST API cart here - Method: POST (Payload require)  - /api/payment
                setEnable(true)
                const array = []
                context.store.cart.forEach(value => {
                    array.push({
                        product_id : value.product_id,
                        count : value.count
                    })
                })
                const payload = {
                    cart : array,
                    phone : context.store.user.phone,
                    total : context.store.total
                }

                axios.post(`${API_BASE}/api/payment`, payload, {
                    headers: {
                        Authorization : `Bearer ${context.store.user.token}`
                    }
                })
                    .then(value => {
                        if (value.data.message ==='Success') {
                            setText('Thanh toán thành công')
                            const navigate = () => {
                                navigation.navigate(`${srcSuccess}`)
                            }
                            context.payment(navigate)
                        }

                    })
                    .catch(reason => {

                    })


            }}
        >
            <Text style={[style.textTotal, style.textOrder]}> Đặt hàng </Text>
        </TouchableOpacity>

    //TODO: Styling here
    return (
        <View>
            <SafeAreaView>
                <ScrollView>
                    <Table style={style.container}>
                        <Row
                            data={headers}
                            flexArr={[1, 1.25, 1, 1]}
                            style={style.head}
                            textStyle={[style.textHeader, style.text]}
                        />
                        <TableWrapper style={style.wrapper}>
                            <Rows
                                data={data}
                                flexArr={[1, 1.25, 1, 1]}
                                style={style.row}
                                textStyle={style.text}
                            />

                        </TableWrapper>

                        <Row
                            data={['', '', '', `Thành tiền: ${context.store.total} VND`]}
                            flexArr={[1, 1, 1, 2.5]}
                            textStyle={style.textTotal}
                            style={style.rowTotal}
                        />
                        <Row
                            data={['', '', '', orderBtn]}
                            flexArr={[1, 1, 1, 2.5]}
                            textStyle={style.textTotal}
                            style={style.rowTotal}
                        />
                    </Table>

                    <Text> {text} </Text>

                </ScrollView>
            </SafeAreaView>
        </View>
    )
}
