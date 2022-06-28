import React from 'react'
import { View, Text, StyleSheet, FlatList, ScrollView, SafeAreaView, TouchableOpacity, Image } from "react-native";
import { Picker } from '@react-native-picker/picker';
import RollingText from 'react-native-rolling-text';

function Headercontant() {
    // const [selection, setSelection] = React.useState();
    const [selection1, setSelection1] = React.useState();
    const [selectedValue, setSelectedValue] = React.useState("CSK vs RCB -live");

    const [check, setCheck] = React.useState();
    const Navigated1 = () => {
        setCheck(1)
        navigation.navigate('Create')
    }
    const Navigated2 = () => {
        setCheck(2)
        navigation.navigate('ChatBot')
    }
    const Navigated3 = () => {
        setCheck(3)
        navigation.navigate('Live')
    }
    const Navigated4 = () => {
        setCheck(4)
        navigation.navigate('Scorecard')
    }
    const Navigated5 = () => {
        setCheck(5)
        navigation.navigate('Commentary')
    }
    const Navigated6 = () => {
        setCheck(6)
        navigation.navigate('Predicitions')
    }
    return (
        <View style={styles.contantbar}>
            <View style={styles.header}>
                <View style={styles.viewcontant}>
                    <View>
                        <Picker
                            selectedValue={selectedValue}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="CSK vs RCB - live" value="CSK vs RCB-live" />
                            <Picker.Item label="RR vs KKR" value="RR vs KKR" />
                            <Picker.Item label="DC vs PBKS" value="DC vs PBKS" />
                        </Picker>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                        <View >
                            <Text style={{ fontSize: 40 }}>131/8</Text>
                        </View>
                        <View style={{ marginTop: 20, marginLeft: 10 }}>
                            <Text style={{ fontSize: 20 }}>(16.4)</Text>
                        </View>
                    </View>
                    <View >
                        <Text style={{ fontSize: 15, padding: 1 }}>Target:195</Text>
                    </View>
                </View>
                <View style={styles.viewcontant1}>
                    <View style={styles.contantsecbox}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <View>
                                <Image style={styles.image1} source={require('../assets/csk1.jpg')}></Image>
                            </View>
                            <View style={{ marginLeft: 10, maxWidth: 150 }}>
                                <View>
                                    <Text style={{ fontWeight: 'bold', marginTop: 5 }}>Quick Predict</Text>
                                </View>
                                <View>
                                    <Text style={{ marginTop: 5 }}>Will CSK Won this Match?</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginRight: 10, marginLeft: 10, marginTop: 10, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <TouchableOpacity style={[styles.btn1, selection1 === "Yes" ? { backgroundColor: "grey" } : { backgroundColor: "black" }]} onPress={() => setSelection1("Yes")}  >
                                <Text style={[styles.btnText1, selection1 === "Yes" ? { color: "white" } : { color: "white" }]}>Yes </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btn1, selection1 === "No" ? { backgroundColor: "grey" } : { backgroundColor: "black" }]} onPress={() => setSelection1("No")}  >
                                <Text style={[styles.btnText1, selection1 === "No" ? { color: "white" } : { color: "white" }]}>No </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={{ flexDirection: "row", paddingTop: 5, }}>
                    <ScrollView horizontal={true}>
                        <View style={styles.container}>
                            <View style={[styles.square, { backgroundColor: "#6BCB77" }]} >
                                <View style={{ marginLeft: 10, marginRight: 10, }}>
                                    <TouchableOpacity>
                                        <Text >2</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={[styles.square, { backgroundColor: "#4D96FF" }]} >
                                <View style={{ marginLeft: 10, marginRight: 10, }}>
                                    <TouchableOpacity>
                                        <Text >6</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={[styles.square, { backgroundColor: "#FF6B6B" }]} >
                                <View style={{ marginLeft: 10, marginRight: 10, }}>
                                    <TouchableOpacity>
                                        <Text >2</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={[styles.square, { backgroundColor: "#b8860b" }]} >
                                <View style={{ marginLeft: 10, marginRight: 10, }}>
                                    <TouchableOpacity>
                                        <Text >0</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={[styles.square, { backgroundColor: "#7cb48f" }]} >
                                <View style={{ marginLeft: 10, marginRight: 10, }}>
                                    <TouchableOpacity>
                                        <Text >2</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={[styles.square, { backgroundColor: "white" }]} >
                                <View style={{ marginLeft: 10, marginRight: 10, }}>
                                    <TouchableOpacity>
                                        <Text >W</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.verticleLine}>
                            </View>
                            <View style={{ marginLeft: 5 }}>
                                <Text>2th </Text>
                                <Text>over</Text>
                            </View>
                            <View style={[styles.square, { backgroundColor: "#FF8228" }]} >
                                <View style={{ marginLeft: 10, marginRight: 10, }}>
                                    <TouchableOpacity>
                                        <Text >2</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={[styles.square, { backgroundColor: "#FF6B6B" }]} >
                                <View style={{ marginLeft: 10, marginRight: 10, }}>
                                    <TouchableOpacity>
                                        <Text >0</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={[styles.square, { backgroundColor: "white" }]} >
                                <View style={{ marginLeft: 10, marginRight: 10, }}>
                                    <TouchableOpacity>
                                        <Text >W</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={[styles.square, { backgroundColor: "#7cb48f" }]} >
                                <View style={{ marginLeft: 10, marginRight: 10, }}>
                                    <TouchableOpacity>
                                        <Text >2</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView >
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contantbar: {
        backgroundColor: "#96BEFB",
        top: 2,
        borderRadius: 10,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-around",
        // backgroundColor: "red"
    },
    footer: {
        paddingBottom: 5,
        // backgroundColor: "green"
    },
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center"
    },
    viewcontant: {
        paddingLeft: 10,
        paddingRight: 10,
        // paddingBottom:10,
        // backgroundColor: "pink"
    },
    viewcontant1: {
        paddingLeft: 10,
        paddingRight: 10,
        // paddingBottom:10,
        // backgroundColor: "orange",
    },
    contantsecbox: {
        marginTop: 20,
        padding: 2,
        backgroundColor: "white",
        borderRadius: 20,
    },
    btnGroup: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-around',
    },
    btn: {
        width: 40,
        height: 40,
        borderColor: '#6B7280',
        borderRadius: 50,
    },
    btn1: {
        borderColor: '#6B7280',
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: 'space-between'

    },
    btnText: {
        textAlign: 'center',
        marginTop: 10,

    },
    btnText1: {
        textAlign: 'center',
        fontSize: 17,
        width: 45,
    },
    image1: {
        marginTop: 20,
        backgroundColor: '#BFD4E4',
        borderRadius: 25,
        height: 30,
        width: 30
    },
    verticleLine: {
        flexDirection: 'row',
        height: '100%',
        width: 2,
        backgroundColor: 'black',
    },
    container: {
        //backgroundColor: "#7CA1B4",
        flex: 1,
        // alignItems: "center", // ignore this - we'll come back to it
        // justifyContent: "center", // ignore this - we'll come back to it
        flexDirection: "row",
    },
    square: {
        //backgroundColor: "white",
        padding: 5,
        margin: 4,
        borderRadius: 5,
    },
})

export default Headercontant;