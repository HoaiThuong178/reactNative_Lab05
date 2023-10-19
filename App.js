import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, Button } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
export default function App() {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    source={require('./assets/vsBlue.png')}
                    style={{
                        width: '301px',
                        height: '361px',
                        marginTop: '-2px',
                        marginLeft: '29px',
                    }}
                ></Image>
            </View>
            <View
                style={{ width: '288px', height: '18px', marginLeft: '22px' }}
            >
                <Text
                    style={{
                        fontFamily: 'Roboto',
                        fontSize: '15px',
                        fontWeight: 400,
                        lineHeight: '18px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                        marginLeft: '0px',
                    }}
                >
                    Điện Thoại Vsmart Joy 3 - Hàng chính hãng
                </Text>
            </View>
            <View
                style={{
                    height: '26px',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    marginLeft: '22px',
                }}
            >
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginLeft: '25px',
                    }}
                >
                    <Image
                        source={require('./assets/star.png')}
                        style={{
                            width: '23px',
                            height: '25px',
                            marginTop: '9px',
                            marginLeft: '23px',
                        }}
                    ></Image>
                    <Image
                        source={require('./assets/star.png')}
                        style={{
                            width: '23px',
                            height: '25px',
                            marginTop: '9px',
                            marginLeft: '2px',
                        }}
                    ></Image>
                    <Image
                        source={require('./assets/star.png')}
                        style={{
                            width: '23px',
                            height: '25px',
                            marginTop: '9px',
                            marginLeft: '2px',
                        }}
                    ></Image>
                    <Image
                        source={require('./assets/star.png')}
                        style={{
                            width: '23px',
                            height: '25px',
                            marginTop: '9px',
                            marginLeft: '2px',
                        }}
                    ></Image>
                    <Image
                        source={require('./assets/star.png')}
                        style={{
                            width: '23px',
                            height: '25px',
                            marginTop: '9px',
                            marginLeft: '2px',
                        }}
                    ></Image>
                </View>
                <View
                    style={{
                        width: '135px',
                        height: '18px',
                        marginTop: '13px',
                        marginLeft: '23px',
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'Roboto',
                            fontSize: '15px',
                            fontWeight: 400,
                            lineHeight: '18px',
                            letterSpacing: '0em',
                            textAlign: 'left',
                        }}
                    >
                        (Xem 828 đánh giá)
                    </Text>
                </View>
            </View>
            <View
                style={{
                    width: '288px',
                    height: '21px',
                    marginTop: '13px',
                    marginLeft: '23px',
                    flexDirection: 'row',
                }}
            >
                <Text
                    style={{
                        fontFamily: 'Roboto',
                        fontSize: '18px',
                        fontWeight: 700,
                        lineHeight: '21px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                    }}
                >
                    1.790.000 đ
                </Text>
                <Text
                    style={{
                        color: '#00000094',
                        fontFamily: 'Roboto',
                        fontSize: '15px',
                        fontWeight: 700,
                        lineHeight: '17.85px',
                        marginLeft: '44px',
                        marginTop: '3px',
                    }}
                >
                    1.790.000 đ
                </Text>
            </View>
            <View
                style={{
                    width: '288px',
                    height: '14px',
                    marginTop: '16px',
                    marginLeft: '23px',
                    flexDirection: 'row',
                }}
            >
                <Text
                    style={{
                        color: '#FA0000',
                        fontFamily: 'Roboto',
                        fontSize: 12,
                        fontWeight: '700',
                        lineHeight: 14.06,
                    }}
                >
                    Ở ĐÂU RẺ HƠN HOÀN TIỀN
                </Text>
            </View>
            <View
                style={{
                    width: 332,
                    height: 34,
                    marginTop: 19,
                    marginLeft: 18,
                    borderRadius: 10,
                    borderWidth: 1,
                    flexDirection: 'row',
                }}
            >
                <Pressable
                    style={{
                        width: 322,
                        height: 18,
                        marginTop: 8,
                        marginLeft: 103,
                        fontFamily: 'Roboto',
                        fontSize: 15,
                        fontWeight: '400',
                        lineHeight: 18,
                        letterSpacing: 0,
                        textAlign: 'left',
                    }}
                >
                    4 MÀU-CHỌN MÀU
                </Pressable>
                <View style={{ width: 10, height: 14, top: 8, left: 71 }}>
                    <Icon
                        name='ei-chevron-right'
                        size={20}
                        color={'#000000'}
                    ></Icon>
                </View>
            </View>
            <View
                style={{
                    width: 326,
                    height: 44,
                    marginTop: 59,
                    marginLeft: 21,
                    borderRadius: 10,
                    border: 1,
                }}
            >
                <Button color={'red'} title='CHỌN MUA'></Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
