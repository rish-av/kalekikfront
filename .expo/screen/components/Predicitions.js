import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Alert, SafeAreaView, TouchableOpacity } from 'react-native';

function Predicitions({ navigation }) {
    return (
        <View style={styles.contain}>
            <ScrollView>
                <View style={styles.holeview}>
                    <View style={{ marginTop: 20 }}>
                        <Image style={styles.image1} source={require('../assets/user1.jpg')}></Image>
                    </View>
                    <View style={{ alignContent: "center", marginTop: 30 }}>
                        <Text>Rasool</Text>
                    </View>
                    <View style={styles.verticleLine}>
                    </View>
                    <View >
                        <View style={{ backgroundColor: '#EEF1F4', height: 30, justifyContent: 'center', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Text style={styles.droptext1}>Game</Text>
                            <Text style={styles.droptext1}>Over 20</Text>
                            <Text style={styles.droptext1}>Over 19</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>
                            <Text style={styles.droptext2}>Winner: India</Text>
                            <Text style={styles.droptext2}>10 Runs</Text>
                            <Text style={styles.droptext2}>15 Runs</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingLeft: 0 }}>
                            <Text style={styles.droptext3}>MOM: Kohli</Text>
                            <Text style={styles.droptext3}>2,1, 4,1</Text>
                            <Text style={styles.droptext3}>4,1</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.holeview}>
                    <View style={{ marginTop: 20 }}>
                        <Image style={styles.image1} source={require('../assets/user2.jpg')}></Image>
                    </View>
                    <View style={{ alignContent: "center", marginTop: 30 }}>
                        <Text>Swetha</Text>
                    </View>
                    <View style={styles.verticleLine}>
                    </View>
                    <View >
                        <View style={{ backgroundColor: '#EEF1F4', height: 30, justifyContent: 'center', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Text style={styles.droptext1}>Game</Text>
                            <Text style={styles.droptext1}>Over 20</Text>
                            <Text style={styles.droptext1}>Over 19</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>
                            <Text style={styles.droptext2}>Winner: India</Text>
                            <Text style={styles.droptext2}>10 Runs</Text>
                            <Text style={styles.droptext2}>15 Runs</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingLeft: 0 }}>
                            <Text style={styles.droptext3}>MOM: Kohli</Text>
                            <Text style={styles.droptext3}>2,1, 4,1</Text>
                            <Text style={styles.droptext3}>4,1</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.holeview}>
                    <View style={{ marginTop: 20 }}>
                        <Image style={styles.image1} source={require('../assets/user3.png')}></Image>
                    </View>
                    <View style={{ alignContent: "center", marginTop: 30 }}>
                        <Text>Raja</Text>
                    </View>
                    <View style={styles.verticleLine}>
                    </View>
                    <View>
                        <View style={{ backgroundColor: '#EEF1F4', height: 30, justifyContent: 'center', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Text style={styles.droptext1}>Game</Text>
                            <Text style={styles.droptext1}>Over 20</Text>
                            <Text style={styles.droptext1}>Over 19</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>
                            <Text style={styles.droptext2}>Winner: India</Text>
                            <Text style={styles.droptext2}>10 Runs</Text>
                            <Text style={styles.droptext2}>15 Runs</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingLeft: 0 }}>
                            <Text style={styles.droptext3}>MOM: Kohli</Text>
                            <Text style={styles.droptext3}>2,1, 4,1</Text>
                            <Text style={styles.droptext3}>4,1</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.holeview}>
                    <View style={{ marginTop: 20 }}>
                        <Image style={styles.image1} source={require('../assets/user4.png')}></Image>
                    </View>
                    <View style={{ alignContent: "center", marginTop: 30 }}>
                        <Text>Muthu</Text>
                    </View>
                    <View style={styles.verticleLine}>
                    </View>
                    <View >
                        <View style={{ backgroundColor: '#EEF1F4', height: 30, justifyContent: 'center', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Text style={styles.droptext1}>Game</Text>
                            <Text style={styles.droptext1}>Over 20</Text>
                            <Text style={styles.droptext1}>Over 19</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>
                            <Text style={styles.droptext2}>Winner: India</Text>
                            <Text style={styles.droptext2}>10 Runs</Text>
                            <Text style={styles.droptext2}>15 Runs</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingLeft: 0 }}>
                            <Text style={styles.droptext3}>MOM: Kohli</Text>
                            <Text style={styles.droptext3}>2,1, 4,1</Text>
                            <Text style={styles.droptext3}>4,1</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.holeview}>
                    <View style={{ marginTop: 20 }}>
                        <Image style={styles.image1} source={require('../assets/user5.png')}></Image>
                    </View>
                    <View style={{ alignContent: "center", marginTop: 30 }}>
                        <Text>Kumar</Text>
                    </View>
                    <View style={styles.verticleLine}>
                    </View>
                    <View >
                        <View style={{ backgroundColor: '#EEF1F4', height: 30, justifyContent: 'center', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Text style={styles.droptext1}>Game</Text>
                            <Text style={styles.droptext1}>Over 20</Text>
                            <Text style={styles.droptext1}>Over 19</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>
                            <Text style={styles.droptext2}>Winner: India</Text>
                            <Text style={styles.droptext2}>10 Runs</Text>
                            <Text style={styles.droptext2}>15 Runs</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingLeft: 0 }}>
                            <Text style={styles.droptext3}>MOM: Kohli</Text>
                            <Text style={styles.droptext3}>2,1, 4,1</Text>
                            <Text style={styles.droptext3}>4,1</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        // backgroundColor:"red"
    },
    droptext: {
        fontSize: 15,
        fontWeight: '900',
        color: '#000000',
        paddingRight: 10
    },
    droptext1: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
    },
    droptext2: {
        fontSize: 15,
        color: '#000000',
        paddingRight: 15
    },
    droptext3: {
        fontSize: 15,
        color: '#000000',
        paddingRight: 30,
        paddingTop: 10
    },
    image1: {
        borderRadius: 30,
        //alignSelf: 'flex-end'
    },
    holeview: {
        marginTop: 2,
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    verticleLine: {
        marginTop: 5,
        flexDirection: 'row',
        height: '80%',
        width: 1,
        backgroundColor: 'black',
    },
})

export default Predicitions;