import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Alert, TextInput } from 'react-native';
import { Input } from 'react-native-elements';
import Account from './components/Account';
import { Button } from 'react-native-elements';
import { login } from '../screen/services/Userservices';
import { useDispatch } from 'react-redux';
import { logindata } from "./components/redux/Action";
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppLoading from 'expo-app-loading';
import {useFonts,Inter_400Regular,Inter_500Medium} from '@expo-google-fonts/inter';

function Login({ navigation }) {
    
    let [fontsLoaded] = useFonts({Inter_400Regular,Inter_500Medium});

    const [Phone, setPhone] = useState("");
    const [Password, setPassword] = useState("");

    const dispatch = useDispatch();
    const loginsave = () => {
        let sendingData = {
            Mobile: Phone, password: Password 
            // Mobile: 9042520296, password: '600lavanya'

        }

        login(sendingData).then(res => {
            // console.log(Phone, Password)
            // console.log(res.data.owner);
            let loginuser = res.data.owner;
            // let data =res.data
            if (res.data.status === 200) {
                createTwoButtonAlert("Login successfully")
                dispatch(logindata(loginuser))
                // navigation.navigate('Predicitions',{Loginuser:loginuser})
                navigation.navigate('SelectSports', { Loginuser: loginuser })
                // navigation.navigate('ChatBot',{Loginuser:loginuser})
                //  navigation.navigate('Model',{Loginuser:loginuser})
            }
            else {
                createTwoButtonAlert("Enter Valid Phone Number")
            }
        })
    }
    const createTwoButtonAlert = (AlertMsg) =>
        Alert.alert(
            "Success",
            AlertMsg,
        );
    const Forgetpassword = () => {
        navigation.navigate('Forgetpwd')
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.textTitle}>Sign in</Text>
                </View>
                <ScrollView style={{ backgroundColor: "white" }} >
                    <View style={styles.container1}>
                        <View style={{ marginTop: 40 }}>
                            <View style={{ padding: 10 }}>
                                <View style={{ marginBottom: 10 }} >
                                    <Text style={{ fontFamily: "Inter_500Medium", color: "#000000" }}>Enter your Mobile Number</Text>
                                </View>
                                <TextInput
                                    style={styles.input}
                                    value={Phone}
                                    //placeholder="Enter Mobile Number"
                                    keyboardType="numeric"
                                    onChangeText={value => setPhone(value)}
                                />
                            </View>
                            <View style={{ padding: 10 }}>
                                <View style={{ marginBottom: 10 }} >
                                    <Text style={{ fontFamily: "Inter_500Medium", color: "#000000" }}>Enter your Password</Text>
                                </View>
                                <TextInput
                                    style={styles.input}
                                    value={Password}
                                    onChangeText={value => setPassword(value)}
                                />
                            </View>
                        </View>
                        <View style={styles.logbtn}>
                            <Button
                           buttonStyle={{
                            backgroundColor: '#96BEFB',
                            borderRadius: 3,
                           }}
                              
                                title="Log in" onPress={() => {
                                    loginsave()
                                }}
                            />
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.btnskip} >
                    <View style={{ marginBottom: 20, marginTop: 20, fontSize: 20 }}>
                        <Text style={{ fontSize: 20, fontFamily: "Inter_500Medium" }} onPress={() => navigation.navigate('SignUp')} > Signup </Text>
                    </View>
                    <View style={{ marginBottom: 20, marginTop: 20 }}>
                        <AntDesign name="arrowright" size={30} onPress={() => navigation.navigate('SignUp')} />
                    </View>
                </View>
            </View>

        )
    }
};

const styles = StyleSheet.create({
    container1: {
        flex: 1,
    },
    textBody: {
        fontSize: 18,
        color: "blue",
        marginTop: 40,
        // marginLeft: 300
    },
    text: {
        marginRight: 10,
        alignSelf: 'flex-end',
        fontSize: 16
    },
    log: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
    },

    logbtn: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "center",
    },
    input: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    textabout: {
        color: '#667080',
        fontSize: 18,
        marginBottom: 20
    },
    btnskip: {
        backgroundColor: "#96BEFB",
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    aboutlogo: {
        backgroundColor: '#E5E5E5',
        padding: 10,
    },
    title: {
        paddingVertical: 80,
        borderWidth: 2,
        borderRadius: 6,
        backgroundColor: "#61dafb",
    },
    textTitle: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: "black",
        marginTop: "20%",
        fontFamily: "Inter_500Medium"
    },


});


export default Login

