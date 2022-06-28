import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Alert, TextInput, Button } from 'react-native';
import { sendOtp } from '../services/Userservices';

function Forgetpwd({ navigation }) {

  const [Phone, setPhone] = useState("");
  // console.log(Phone,"himsg");
  const forgetotp = () => {
    if (Phone.length === 10) {
      sendOtp({ Mobile: Phone })
      navigation.navigate('Forget_Otp', { Mobile: Phone })

    } else {
      createTwoButtonAlert("Enter Valid Phone Number")
    }

  }
  const createTwoButtonAlert = (AlertMsg) =>
    Alert.alert(
      "Warning",
      AlertMsg,
      [
        { text: "OK", onPress: () => console.log("OK Pressed", Phone) }
      ]
    );

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textTitle}>Forget Password</Text>
      </View>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        value={Phone}
        placeholder="Enter Mobile Number"
        keyboardType="numeric"
        onChangeText={value => setPhone(value)}
      />
      <View style={styles.btn}>
        <Button
          title="OK"
          color="grey"
          onPress={() => { forgetotp() }}
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
    width: 60,
    height: 60,
    marginBottom: 100,

  }
})
export default Forgetpwd;