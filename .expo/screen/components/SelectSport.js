import React, { Component, useRef, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Carousels from './Carousels'
import { Dimensions } from 'react-native';
import HeaderProfile from './HeaderProfile.js'
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

const SelectSports = ({ navigation, route }) => {

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
    const Back = () => {
        navigation.navigate('Home')
    }
    const Move = () => {
        navigation.navigate('SelectEvent')
    }
    // console.log("user",route.params.Loginuser);
    // let loginuser1 = route.params.Loginuser;

    const _handleSearch = () => console.log('Searching');
    const notification = () => console.log('Searching');
    const _handleMore = () => {
        navigation.navigate('Profile')
    }
    var screenWidth = Dimensions.get('window').width;

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.container}>
                <HeaderProfile />
                <Carousels />
                <ScrollView>
                    <View style={{ backgroundColor: "#E5E5E5" }}>
                        <View style={styles.sechead} >
                            <Text style={{padding: 10,fontSize: 15,color: '#000000',flex: 1,fontFamily:"Inter_500Medium"}}>Find A Contest</Text>
                        </View>
                        <View style={styles.box}>
                            <View style={styles.square} >
                                <View style={styles.icon} >
                                    <TouchableOpacity onPress={() => Move()}>
                                        <Image source={require('../assets/Cricket.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.iconcontant}>
                                    <Text style={{color:"#667080",fontFamily:"Inter_500Medium"}} >Cricket</Text>
                                </View>
                            </View>
                            <View style={styles.square} >
                                <View style={styles.icon}>
                                    <TouchableOpacity >
                                        <Image source={require('../assets/Basketball.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.iconcontant}>
                                    <Text style={{color:"#667080",fontFamily:"Inter_500Medium"}} >NBA</Text>
                                </View>
                            </View>
                            <View style={styles.square} >
                                <View style={styles.icon}>
                                    <TouchableOpacity >
                                        <Image source={require('../assets/Football.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.iconcontant}>
                                    <Text style={{color:"#667080",fontFamily:"Inter_500Medium"}} >Football</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.box}>
                            <View style={styles.square} >
                                <View style={styles.icon}>
                                    <TouchableOpacity >
                                        <Image source={require('../assets/Tennis.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.iconcontant}>
                                    <Text style={{color:"#667080",fontFamily:"Inter_500Medium"}} >Tennis</Text>
                                </View>
                            </View>
                            <View style={styles.square} >
                                <View style={styles.icon}>
                                    <TouchableOpacity >
                                        <Image source={require("../assets/TableTennis.png")} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.iconcontant}>
                                    <Text style={{color:"#667080",fontFamily:"Inter_500Medium"}} >Table Tennis</Text>
                                </View>
                            </View>
                            <View style={styles.square} >
                                <View style={styles.icon}>
                                    <TouchableOpacity >
                                        <Image source={require('../assets/Badminton.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.iconcontant}>
                                    <Text style={{color:"#667080",fontFamily:"Inter_500Medium"}} >Badminton</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.box}>
                            <View style={styles.square} >
                                <View style={styles.icon}>
                                    <TouchableOpacity >
                                        <Image source={require('../assets/Chess.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.iconcontant}>
                                    <Text style={{color:"#667080",fontFamily:"Inter_500Medium"}} >Chees</Text>
                                </View>
                            </View>
                            <View style={styles.square} >
                                <View style={styles.icon}>
                                    <TouchableOpacity >
                                        <Image source={require('../assets/Hockey.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.iconcontant}>
                                    <Text style={{color:"#667080",fontFamily:"Inter_500Medium"}} >Hockey</Text>
                                </View>
                            </View>
                            <View style={styles.square} >
                                <View style={styles.icon}>
                                    <TouchableOpacity >
                                        <Image source={require('../assets/Baseball.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.iconcontant}>
                                    <Text style={{color:"#667080",fontFamily:"Inter_500Medium"}} >Baseball</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red',
    },
    secTitle: {
        
    },
    btn: {
        backgroundColor: "#9bb9fb",
        marginTop: 10,
        flex: 1,
        marginHorizontal: "1%",
        borderRadius: 5,
    },
    text: {
        fontSize: 20,
        color: "black",
        textAlign: "center",
        paddingTop: 30,
        paddingBottom: 30
    },
    mainview: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    sechead: {
        flexDirection: 'row',
    },
    holebtn: {
        // backgroundColor:'red',
        paddingBottom: 20
    },
    box: {
        // backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
    },
    square: {
        backgroundColor: "white",
        margin: 4,
        borderRadius: 5,
    },
    icon: {
        //backgroundColor:"white",
        paddingLeft: 20,
        paddingRight: 20,
        //paddingTop: 5
    },
    iconcontant: {
        justifyContent: "center",
        //  backgroundColor:"red",
        flexDirection: "row",
        marginBottom: 10
    }


})


export default SelectSports;