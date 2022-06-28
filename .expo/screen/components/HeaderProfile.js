import React, { Component, useRef, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal, ScrollView, Alert, Pressable } from 'react-native';
import { Avatar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { getappuser } from '../services/Userservices';


function HeaderProfile() {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [registerdata, setRegisterdata] = useState([]);
    //console.log("registerdata", registerdata);
    useEffect(() => {
        getappuser().then(res => {
            //   console.log(res.data.appuser);
            setRegisterdata(res.data.appuser)
        })
    }, [])
    const list = () => {
        return registerdata.map((element,index) => {
            return (
                <View  key={index}>
                    <Text style={{ paddingLeft: 10 }} >
                    {element.Name}
                    </Text>
                    <Avatar
                        size="large"
                        rounded
                        source={{
                            uri:
                                'https://reactnativeelements.com/img/avatar/avatar--photo.jpg',
                        }}
                        onPress={() => navigation.navigate('Model',{data:element})}
                    />
                </View>
              );
        });
      };
    // console.log("datata=>>",list)
    return (
        <ScrollView horizontal={true}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>{list()}</View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: 'black'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        color: '#000000',
        fontSize: 30,
        fontWeight: 'bold'
    }
});

export default HeaderProfile;