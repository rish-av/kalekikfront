import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Alert, TextInput, Button } from 'react-native';
import { Input } from 'react-native-elements';
import { Appbar } from 'react-native-paper';
import { Avatar } from 'react-native-elements';
import { profile } from '../services/Userservices'

function Profile({ navigation }) {
    const [Name, setName] = React.useState(null);
    const [Mobile, setMobile] = React.useState(null);
    const [Gender, setGender] = React.useState(null);
    const [Age, setAge] = React.useState(null);
    let sendingData = {
        Name: Name, Mobile: Mobile, Gender: Gender, Age: Age
    }
    const onsubmit = () => {
        //console.log(sendingData);
        profile(sendingData).then(res => {
            console.log(res.data);
            navigation.navigate('SelectSports')
        })

    }

    const Back = () => {
        navigation.navigate('SelectSports')
    }
    const _handleMore = () => console.log('Shown more');
    const _handleSearch = () => console.log('Searching');

    return (
        <View >
            <View style={styles.appbar}>
                <Appbar.Header style={{ backgroundColor: 'transparent' }}>
                    <Appbar.BackAction onPress={() => Back()} />
                    <Appbar.Content style={styles.titlematch} title="Profile" />
                    <Appbar.Action icon="pencil" onPress={_handleSearch} />
                    <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
                </Appbar.Header>
            </View>
            <View style={styles.avatar}>
                <Avatar
                    rounded
                    source={{
                        uri:
                            'https://st3.depositphotos.com/1767687/17621/v/380/depositphotos_176214104-stock-illustration-default-avatar-profile-icon.jpg?forcejpeg=true',
                    }}>
                </Avatar>
            </View>

            <View style={styles.profile1}>
                <Text >Name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={value => setName(value)}
                />
            </View>
            <View style={styles.profile1}>
                <Text >Mobile Number</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={value => setMobile(value)}
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.profile1}>
                <Text >Age</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={value => setAge(value)}
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.profile1}>
                <Text >Gender</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={value => setGender(value)}
                />
            </View>
            {/* <View style={styles.profile1}>
                <Text >Proof</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setProfile}
                    value={profiles}
                />
            </View> */}
            <View style={styles.btn}>
                <Button
                    title="Next"
                    color="grey"
                    borderRadius="50"
                    onPress={() => { onsubmit() }}
                />
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: "center",
    // },
    profile1: {
        marginLeft: 20
    },
    textTitle: {
        fontSize: 30,
        marginBottom: 60,
        fontWeight: 'bold'
    },
    input: {
        height: 40,
        width: 370,
        marginTop: 10,
        borderWidth: 2,
        padding: 10,
        marginBottom: 10,
        borderRadius: 10
    },
    btn: {
        fontSize: 30,
        width: 60,
        height: 60,
        marginTop: 20,
        marginLeft: 170,

    },
    appbar: {
        marginTop: 10,
        textAlign: 'center',
        // marginRight: 30,
    },
    titlematch: {
        textAlign: 'center'
    },
    avatar: {
        width: 100,
        height: 100,
        backgroundColor: 'grey',
        marginLeft: 150,
        marginTop: 15,
        marginBottom: 5,
        borderRadius: 60
    }
})

export default Profile;