import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Alert, TextInput } from 'react-native';
import { Input } from 'react-native-elements';
import { sendOtp } from "./services/Userservices.js";
import { Button } from 'react-native-elements';
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

const SignUp = props => {
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
    const [FullName, setFullname] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [Password, setPassword] = useState("");
    const [Confirm_Password, setConfirm_Password] = useState("");

    const sendotp = () => {
        if (FullName != '' && Email != '' & Phone != '' && Password != '' && Confirm_Password) {
            if (Password === Confirm_Password) {
                if (Phone.length === 10) {
                    sendOtp({ Mobile: Phone })
                    props.navigation.navigate('Otp', { Name: FullName, Email: Email, Password: Password, Mobile: Phone })

                } else {
                    createTwoButtonAlert("Enter Valid Phone Number")
                }
            } else {
                createTwoButtonAlert("Check whether the passwords are matching")
            }
        }
        else {
            createTwoButtonAlert("Please Enter All the Details")
        }
    }
    const createTwoButtonAlert = (AlertMsg) =>
        Alert.alert(
            "Warning",
            AlertMsg,
            [
                { text: "OK", onPress: () => console.log("OK Pressed", FullName, Email, Password, Phone) }
            ]
        );

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <ScrollView style={{ backgroundColor: "white" }} >
                <View style={styles.container}>
                    <View style={styles.log}>
                        <Text style={styles.textTitle}>Sign Up</Text>
                    </View>
                    <View >
                        <View style={{ padding: 10 }}>
                            <View style={{ marginBottom: 10 }} >
                                <Text style={{ fontFamily:"Inter_500Medium",color:"#000000"}}>Enter your Full Name</Text>
                            </View>
                            <TextInput
                                style={styles.input}
                                value={FullName}
                                onChangeText={value => setFullname(value)}
                            />
                        </View>
                        <View style={{ padding: 10 }}>
                            <View style={{ marginBottom: 10 }} >
                                <Text style={{ fontFamily:"Inter_500Medium",color:"#000000"}}>Enter your Email</Text>
                            </View>
                            <TextInput
                                style={styles.input}
                                value={Email}
                                onChangeText={value => setEmail(value)}
                            />
                        </View>
                        <View style={{ padding: 10 }}>
                            <View style={{ marginBottom: 10 }} >
                                <Text style={{ fontFamily:"Inter_500Medium",color:"#000000"}}>Enter your Phone</Text>
                            </View>
                            <TextInput
                                style={styles.input}
                                value={Phone}
                                keyboardType="numeric"
                                onChangeText={value => setPhone(value)}
                            />
                        </View>
                        <View style={{ padding: 10 }}>
                            <View style={{ marginBottom: 10 }} >
                                <Text style={{ fontFamily:"Inter_500Medium",color:"#000000"}}>Enter your Password</Text>
                            </View>
                            <TextInput
                                style={styles.input}
                                value={Password}
                                onChangeText={value => setPassword(value)}
                            />
                        </View>
                        <View style={{ padding: 10 }}>
                            <View style={{ marginBottom: 10 }} >
                                <Text style={{ fontFamily:"Inter_500Medium",color:"#000000"}}>Enter your Confirm Password</Text>
                            </View>
                            <TextInput
                                style={styles.input}
                                value={Confirm_Password}
                                onChangeText={value => setConfirm_Password(value)}
                            />
                        </View>
                    </View>
                    <View style={styles.logbtn}>
                        <View >
                            <Button
                                title="Create" onPress={() => {
                                    sendotp()
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.logbtn}>
                        <Text style={styles.textBody}>Already have an Account ?</Text>
                        <Text style={[styles.textBody, { color: '#96BEFB',fontFamily:"Inter_500Medium" }]}
                            onPress={() => props.navigation.navigate('Home')}> Login Here</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    textTitle: {
        fontSize: 30,
        marginTop: 80,
    },
    textBody: {
        fontSize: 18,
        // color: "blue",
        marginTop: 15,
        color:"#000000",
        fontFamily:"Inter_600SemiBold"
        // marginLeft: 300
    },
    text: {
        marginRight: 10,
        alignSelf: 'flex-end',
        fontSize: 16
    },
    log: {
        // marginTop: 3,
        flexDirection: "row",
        justifyContent: "center",
    },

    logbtn: {
        // marginTop: 10,
        flexDirection: "row",
        justifyContent: "center",
    }, 
    input: {
        borderWidth: 1,
        padding: 10,
        borderRadius:10
    },

});

export default SignUp
