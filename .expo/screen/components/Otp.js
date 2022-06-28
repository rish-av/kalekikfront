import React, { useRef, useState } from 'react';
import { StyleSheet, View, ScrollView, TextInput } from 'react-native';
import { registeruser, verifyOtp } from '../services/Userservices';
import { Button } from 'react-native-elements';
import { Appbar } from 'react-native-paper';
function Otp({ route, navigation }) {
    const { Name, Email, Password, Mobile } = route.params;
    const pin1Ref = useRef(null)
    const pin2Ref = useRef(null)
    const pin3Ref = useRef(null)
    const pin4Ref = useRef(null)

    const [pin1, setPin1] = useState("")
    const [pin2, setPin2] = useState("")
    const [pin3, setPin3] = useState("")
    const [pin4, setPin4] = useState("")

    const saveuser = () => {
        // console.log(Mobile, pin1 + pin2 + pin3 + pin4);
        verifyOtp({ mobile: Mobile, otp: pin1 + pin2 + pin3 + pin4 }).then(res => {
            // console.log(res.data);
            if (res.data.verified === true) {
                registeruser({ Name: Name, Email: Email, Password: Password, Mobile: Mobile }).then(res => {
                    navigation.navigate('Home')
                })
            }
        })
    }
    const Back = () => {
        navigation.navigate('SignUp')
    }

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={styles.appbar}>
                <Appbar.Header style={{ backgroundColor: 'transparent' }}>
                    <Appbar.BackAction onPress={() => Back()} />
                    <Appbar.Content style={styles.titlematch} title="OTP Verfication" />
                    {/* <Appbar.Action icon="pencil" onPress={_handleSearch} />
                    <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
                </Appbar.Header>
            </View>
            <View style={{ marginTop: 300, alignItems: "center", flexDirection: "row", justifyContent: "space-around" }}>
                <View style={styles.TextInput}>
                    <TextInput
                        ref={pin1Ref}
                        keyboardType={'number-pad'}
                        maxLength={1}
                        onChangeText={(pin) => {

                            setPin1(pin)
                            if (pin !== "") {
                                pin2Ref.current.focus();
                            }
                        }}
                        style={styles.TextInputView}
                    />
                </View>
                <View style={styles.TextInput}>
                    <TextInput
                        ref={pin2Ref}
                        keyboardType={'number-pad'}
                        maxLength={1}
                        onChangeText={(pin) => {
                            setPin2(pin)
                            if (pin !== "") {
                                pin3Ref.current.focus();
                            }
                        }}
                        style={styles.TextInputView}
                    />
                </View>
                <View style={styles.TextInput}>
                    <TextInput
                        ref={pin3Ref}
                        keyboardType={'number-pad'}
                        maxLength={1}
                        onChangeText={(pin) => {
                            setPin3(pin)
                            if (pin !== "") {
                                pin4Ref.current.focus();
                            }
                        }}
                        style={styles.TextInputView}
                    />
                </View>
                <View style={styles.TextInput}>
                    <TextInput
                        ref={pin4Ref}
                        keyboardType={'number-pad'}
                        maxLength={1}
                        onChangeText={(pin) => {
                            setPin4(pin)
                            if (pin !== "") {
                                pin1Ref.current.focus();
                            }
                        }}
                        style={styles.TextInputView}
                    />
                </View>
                <View style={styles.Butt}>
                    <Button
                        title="Verify Otp" onPress={() => {
                            saveuser()
                        }}
                    /></View>
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    TextInput: {
        borderBottomWidth: 1,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 300,
    },
    TextInputView: {
        fontSize: 30,
    },
    appbar: {
        marginTop: 10,
        textAlign: 'center',
        // marginRight: 30,
    },
    Butt: {
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 300,
    },
    textTitle: {
        fontSize: 30,
        marginVertical: 10,
    },

});


export default Otp;