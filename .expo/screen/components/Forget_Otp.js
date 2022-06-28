import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Alert, TextInput, Button } from 'react-native';
import { Input } from 'react-native-elements';
import { verifyOtp } from '../services/Userservices';

function Forget_Otp({ route, navigation }) {
  const { Mobile } = route.params;
  const [number, onChangeNumber] = React.useState(null);
  // console.log(number)
  const saveuser = () => {
    // console.log(Mobile,number);
    verifyOtp({ mobile: Mobile, otp: number }).then(res => {
      navigation.navigate('Reset_pwd', { Mobile: Mobile })
    })

  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textTitle}>OTP</Text>
      </View>
      <View>

      </View>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter Otp"
        keyboardType="numeric"
        onChangeText={value => onChangeNumber(value)}
      />
      <View style={styles.btn}>
        <Button
          title="OK"
          color="grey"
          onPress={() => { saveuser() }}
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
export default Forget_Otp;