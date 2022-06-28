import React, { Component, useRef, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Alert, TouchableOpacity, CheckBox } from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import { RadioButton } from 'react-native-paper';;
import Carousels from './Carousels'
import HeaderProfile from './HeaderProfile.js';
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
} from '@expo-google-fonts/inter';

const SelectEvent = ({ navigation, route }) => {
    let [fontsLoaded] = useFonts({
        Inter_100Thin,
        Inter_200ExtraLight,
        Inter_300Light,
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_800ExtraBold,
        Inter_900Black,
    });

    // console.log("user",route.params.Loginuser);
    const [checked, setChecked] = useState(false);
    const [checked1, setChecked1] = useState(false);
    const [selection1, setSelection1] = useState();
    const [check, setCheck] = useState('');
    // let loginuser5 = route.params.Loginuser;
    const Back = () => {
        navigation.navigate('SelectSports')
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (

            <View style={styles.container}>
                <HeaderProfile />
                <Carousels />
                <ScrollView>
                    <View style={{ backgroundColor: "#E5E5E5" }}>
                        <View style={styles.box}>
                            <View style={styles.square} >
                                <View style={styles.icon} >
                                    <View style={styles.iconcontant}>
                                        <View style={{ marginTop: 20 }}>
                                            <TouchableOpacity >
                                                <Image source={require('../assets/Csklogo.png')} />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ marginTop: 10, }}>
                                            <Text style={{fontSize: 16,fontFamily:"Inter_700Bold" }}>CSK</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: "column", justifyContent: "center", marginLeft: 10, marginRight: 10 }}>
                                        <Text style={{fontFamily:"Inter_700Bold",color:"rgba(0, 0, 0, 0.5)"}}>VS</Text>
                                    </View>
                                    <View style={styles.iconcontant}>
                                        <View style={{ marginTop: 20 }}>
                                            <TouchableOpacity >
                                                <Image source={require('../assets/MIlogo.png')} />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ marginTop: 10,marginLeft:10 }}>
                                            <Text style={{fontFamily:"Inter_700Bold" ,fontSize: 16 }} >MI</Text>
                                        </View>
                                    </View>
                                </View>
                                <View >
                                    <RadioButton.Group >
                                        <View style={{ flexDirection: "row", justifyContent: 'flex-end' }}>
                                            <RadioButton value="first" status={check === 'first' ? 'checked' : 'unchecked'} onPress={() => setCheck('first')} />
                                        </View>
                                    </RadioButton.Group>
                                </View>
                            </View>
                            <View style={styles.square} >
                                <View style={styles.icon} >
                                    <View style={styles.iconcontant}>
                                        <View style={{ marginTop: 8}}>
                                            <TouchableOpacity >
                                                <Image source={require('../assets/KKRlogo.png')} />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ marginTop: 10,marginLeft:5 }}>
                                            <Text style={{ fontFamily:"Inter_700Bold" , fontSize: 16 }}  >KKR</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: "column", justifyContent: "center", marginLeft: 10, marginRight: 10 }}>
                                        <Text style={{fontFamily:"Inter_700Bold",color:"rgba(0, 0, 0, 0.5)"}}>VS</Text>
                                    </View>
                                    <View style={styles.iconcontant}>
                                        <View style={{ marginTop: 8}}>
                                            <TouchableOpacity >
                                                <Image source={require('../assets/PKlogo.png')} />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ marginTop: 10,marginLeft:10}}>
                                            <Text style={{ fontFamily:"Inter_700Bold" , fontSize: 16 }} >PK</Text>
                                        </View>

                                    </View>
                                </View>
                                <View >
                                    <RadioButton.Group >
                                        <View style={{ flexDirection: "row", justifyContent: 'flex-end' }}>
                                            <RadioButton value="second" status={check === 'second' ? 'checked' : 'unchecked'} onPress={() => setCheck('second')} />
                                        </View>
                                    </RadioButton.Group>
                                </View>
                            </View>
                        </View>
                        <View style={styles.box}>
                            <View style={styles.square} >
                                <View style={styles.icon} >
                                    <View style={styles.iconcontant}>
                                        <View >
                                            <TouchableOpacity >
                                                <Image source={require('../assets/SRHlogo.png')} />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ marginTop: 10,marginLeft:5 }}>
                                            <Text style={{ fontFamily:"Inter_700Bold" , fontSize: 16 }}  >SRH</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: "column", justifyContent: "center", marginLeft: 10, marginRight: 10 }}>
                                        <Text style={{fontFamily:"Inter_700Bold",color:"rgba(0, 0, 0, 0.5)"}}>VS</Text>
                                    </View>
                                    <View style={styles.iconcontant}>
                                        <View >
                                            <TouchableOpacity >
                                                <Image source={require('../assets/TDlogo.png')} />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ marginTop: 10,marginLeft:13}}>
                                            <Text style={{ fontFamily:"Inter_700Bold" , fontSize: 16 }} >TD</Text>
                                        </View>

                                    </View>
                                </View>
                                <View >
                                    <RadioButton.Group >
                                        <View style={{ flexDirection: "row", justifyContent: 'flex-end' }}>
                                            <RadioButton value="third" status={check === 'third' ? 'checked' : 'unchecked'} onPress={() => setCheck('third')} />
                                        </View>
                                    </RadioButton.Group>
                                </View>
                            </View>
                            <View style={styles.square} >
                                <View style={styles.icon} >
                                    <View style={styles.iconcontant}>
                                        <View >
                                            <TouchableOpacity >
                                                <Image source={require('../assets/RCBlogo.png')} />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ marginTop: 10, marginLeft:5}}>
                                            <Text style={{ fontFamily:"Inter_700Bold" , fontSize: 16 }}  >RCB</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: "column", justifyContent: "center", marginLeft: 10, marginRight: 10 }}>
                                        <Text style={{fontFamily:"Inter_700Bold",color:"rgba(0, 0, 0, 0.5)"}}>VS</Text>
                                    </View>
                                    <View style={styles.iconcontant}>
                                        <View style={{ marginTop: 20 }}>
                                            <TouchableOpacity >
                                                <Image source={require('../assets/MIlogo.png')} />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ marginTop: 10,marginLeft:10}}>
                                            <Text style={{ fontFamily:"Inter_700Bold" , fontSize: 16 }} >MI</Text>
                                        </View>

                                    </View>
                                </View>
                                <View >
                                    <RadioButton.Group >
                                        <View style={{ flexDirection: "row", justifyContent: 'flex-end' }}>
                                            <RadioButton value="four" status={check === 'four' ? 'checked' : 'unchecked'} onPress={() => setCheck('four')} />
                                        </View>
                                    </RadioButton.Group>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.btnskip} >
                    <View style={styles.sechead} >
                        <View >
                            <TouchableOpacity style={[styles.btn1, selection1 === "Yes" ? { backgroundColor: "#96BEFB" } : { backgroundColor: "#EFEFEF" }]} onPress={() => navigation.navigate('Matchteam')} >
                                <Text style={[styles.btnText1, selection1 === "Yes" ? { color: "white" } : { color: "#000000" }]} >Add </Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={[styles.btn1, selection1 === "No" ? { backgroundColor: "#96BEFB" } : { backgroundColor: "#EFEFEF" }]} onPress={() => navigation.navigate('Landingpage')} >
                                <Text style={[styles.btnText1, selection1 === "No" ? { color: "white" } : { color: "#000000" }]}>Chat </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    sechead: {
        flexDirection: 'row',
        // justifyContent: "center",
        justifyContent: 'space-around',
        //    backgroundColor:"red",
        paddingLeft: 100,
        paddingRight: 100
    },
    box: {
        // backgroundColor: "white",
        flex: 1,
        //alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",

    },
    square: {
        backgroundColor: "white",
        margin: 15,
        borderRadius: 5,
    },
    icon: {
        // backgroundColor:"red",
        padding: 15,
        flexDirection: "row",
    },
    iconcontant: {
        padding: 2,
        // backgroundColor: "red",
        flexDirection: "column",
        justifyContent: "space-around",
    },
    btnskip: {
        backgroundColor: "white",
        // flexDirection: "row",
        // justifyContent: "center",
        marginTop: 10,
        marginBottom: 10,

    },
    btn1: {
        borderColor: '#6B7280',
        borderRadius: 10,
        flexDirection: "row",
        borderRadius: 10,
        borderWidth: 2,

    },
    btnText1: {
        textAlign: 'center',
        fontSize: 17,
        width: 100,
        height: 25
    },
});

export default SelectEvent;