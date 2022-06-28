import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, Alert, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { ImageBackground } from 'react-native-web';
import AntDesign from 'react-native-vector-icons/AntDesign';
function About({ navigation }) {
    const aboutsave = () => {
        navigation.navigate('Home')
    }
    const { width } = Dimensions.get('window');


    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.textTitle}>About Kalekik</Text>
            </View>

            <View style={styles.aboutlogo}>
                <View >
                    <Image style={{ borderRadius:10,width: width * 0.95, height: width * 0.5 }}
                        source={require('../assets/aboutimage.png')}
                    />
                </View>
            </View>
            <ScrollView style={{ padding: 15, backgroundColor: "white" }}>
                <Text style={styles.textabout}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Text>
            </ScrollView>
            <View style={styles.btnskip} >
                <Text onPress={() => aboutsave()} style={{ marginBottom: 20, marginTop: 20, fontSize: 20 }}> Skip </Text>
                <View style={{ marginBottom: 20, marginTop: 20 }}>
                    <AntDesign name="arrowright" size={30} onPress={() => aboutsave()} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    textabout: {
        color: '#667080',
        fontSize: 16,
        marginBottom: 20
    },
    btnskip: {
        backgroundColor: "#96BEFB",
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    aboutlogo: {
        //backgroundColor: '#E5E5E5',
        padding: 8,
    },
    title: {
        // paddingVertical: 80,
        borderWidth: 2,
        borderRadius: 6,
        backgroundColor: "#96BEFB",
    },
    textTitle: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: "black",
        paddingTop: 60,
        paddingBottom: 10
    }
    
})

export default About;