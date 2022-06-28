import React, { useEffect, useState } from 'react';
import { Modal, Text, TouchableWithoutFeedback, StyleSheet, View, Button, Image } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Rating, AirbnbRating } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
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


const Model = ({ navigation, visible, route }) => {
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
    //console.log("one data==>",route.params.data)
    let name = route.params.data.Name;

    const onDismiss = () => {
        navigation.navigate('SelectSports')
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <Modal visible={visible} transparent>
                <TouchableWithoutFeedback >
                    <View style={style.modal}>
                        <TouchableWithoutFeedback>
                            <View style={style.modalInner}>
                                <View style={{ flexDirection: 'row', justifyContent: "flex-start" }}>
                                    <View>
                                        <Avatar
                                            size="large"
                                            rounded
                                            source={{
                                                uri:
                                                    'https://reactnativeelements.com/img/avatar/avatar--photo.jpg',
                                            }}
                                        />
                                    </View>
                                    <View >
                                        <Text style={{ fontSize: 27, color: "#333333",fontFamily:"Inter_500Medium" }}>
                                            {name}
                                        </Text>
                                        <AirbnbRating
                                            count={5}
                                            size={15}
                                            reviewSize={16}
                                            reviewColor={"#000000"}
                                            selectedColor={"#FFD93D"}
                                            reviews={["1 Rating", "2 Rating", "3 Rating", "4 Rating", "5 Rating"]}
                                        />
                                    </View>
                                    <View style={{ position: 'absolute', top: 0, right: 0 }}>
                                        <Icon style={style.item1} name="close" onPress={() => onDismiss()}></Icon>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 30, paddingLeft: 10, paddingTop: 20,fontFamily:"Inter_700Bold" }} >Ind vd Aus</Text>
                                </View>
                                <View style={{ paddingVertical: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 18, paddingLeft: 15,fontFamily:"Inter_500Medium" }}>Wining Team</Text>
                                    <Text style={{ fontSize: 18, paddingRight: 70,fontFamily:"Inter_500Medium" }}>India</Text>
                                </View>
                                <View style={{ paddingVertical: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 18, paddingLeft: 15,fontFamily:"Inter_500Medium"  }}>Man of the Match</Text>
                                    <Text style={{ fontSize: 18, paddingRight: 55,fontFamily:"Inter_500Medium"  }}>V.Kohli</Text>
                                </View>
                                <View style={{ paddingVertical: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 18, paddingLeft: 15,fontFamily:"Inter_500Medium"  }}>Best bowler</Text>
                                    <Text style={{ fontSize: 18, paddingRight: 35 ,fontFamily:"Inter_500Medium" }}>M.Shami</Text>
                                </View>
                                <View style={{ paddingVertical: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 18, paddingLeft: 15 ,fontFamily:"Inter_500Medium" }}>Runs Concealed </Text>
                                    <Text style={{ fontSize: 18, paddingRight: 80 ,fontFamily:"Inter_500Medium" }}>200</Text>
                                </View>
                                <View style={{ paddingVertical: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 18, paddingLeft: 15,fontFamily:"Inter_500Medium"  }}>Boundaries Concealed</Text>
                                    <Text style={{ fontSize: 18, paddingRight: 90 ,fontFamily:"Inter_500Medium" }}>15</Text>
                                </View>
                                <View style={{ paddingVertical: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 18, paddingLeft: 15,fontFamily:"Inter_500Medium"  }}>Sixers Concealed</Text>
                                    <Text style={{ fontSize: 18, paddingRight: 90,fontFamily:"Inter_500Medium"  }}>10</Text>
                                </View>
                                <View style={{ paddingVertical: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 18, paddingLeft: 15,fontFamily:"Inter_500Medium"  }}>WIckets Taken</Text>
                                    <Text style={{ fontSize: 18, paddingRight: 100,fontFamily:"Inter_500Medium" }}>8</Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        );
    }
};


const style = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor: "#545454"
    },
    modalInner: {
        height: "auto",
        padding: 10,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    image1: {
        backgroundColor: '#BFD4E4',
        borderRadius: 25,
        height: 30,
        width: 30
    },
    item1: {
        fontSize: 30
    }
});
export default Model;