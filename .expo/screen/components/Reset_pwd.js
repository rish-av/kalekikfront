import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet, Text, View, Image, ScrollView, Alert, Button } from 'react-native';
import {resetPwd} from '../services/Userservices'

function Reset_pwd({route,navigation}) {
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [passwordVisible1, setPasswordVisible1] = useState(true);
    const [Password, setPassword] = useState("");
    const [Confirm_Password, setConfirm_Password] = useState("");
    const { Mobile } = route.params;
    //console.log('mobile is here',Mobile);

    const Reset = () => {
        if (Password === Confirm_Password) {
        resetPwd({ mobile: Mobile,Confirm_Password: Confirm_Password}).then(res => {
            // console.log(res.data.data,"frontrespose");
            createTwoButtonAlert("Reset successfully")
            navigation.navigate('Home')
        })
    }else{
        createTwoButtonAlert("Doesnot match password")
    }
    }
    const createTwoButtonAlert = (AlertMsg) =>
    Alert.alert(
        "Success",
        AlertMsg,
        [
            { text: "OK", onPress: () => console.log("OK Pressed",  Password, Mobile) }
        ]
    );
    


   return (
        <View style={styles.container}>
            <View>
                <Text style={styles.textTitle}>Reset Password</Text>
            </View>
           
            <TextInput
                style={styles.input}
                value={Password}
                secureTextEntry={passwordVisible}
                right={<TextInput.Icon name={passwordVisible ? "eye-off" : "eye"} onPress={() => setPasswordVisible(!passwordVisible)} />}
                placeholder="Enter New Password"
                keyboardType="numeric"
                onChangeText={value => setPassword(value)}
            />
             <TextInput
                style={styles.input}
                secureTextEntry={passwordVisible1}
                right={<TextInput.Icon name={passwordVisible1 ? "eye-off" : "eye"} onPress={() => setPasswordVisible1(!passwordVisible1)} />}
                value={Confirm_Password}
                placeholder="Enter Confirm Password"
                keyboardType="numeric"
                onChangeText={value => setConfirm_Password(value)}
                
            />
            <View style={styles.btn}>
                <Button
                    title="Submit"
                    color="grey"
                    onPress={() => {Reset()}}
                />
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
    },
    textTitle: {
        fontSize: 30,
        marginBottom: 60,
        fontWeight: 'bold'
    },
    input: {
        height: 50,
        width: 300,
        margin: 12,
        borderWidth: 2,
        padding: 10,
        marginBottom: 60
    },
    btn: {
        fontSize: 30,
        width: 100,
        height: 60,
        marginBottom: 100,

    }
})
export default Reset_pwd;