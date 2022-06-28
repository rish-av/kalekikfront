import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';

function Buttoncontant() {
    const navigation = useNavigation();
    const [check, setCheck] = React.useState(1);
    const Navigated1 = () => {
        setCheck(1)
        navigation.navigate('Mychat')
    }
    const Navigated2 = () => {
        setCheck(2)
        navigation.navigate('GameChat')
    }
    const Navigated3 = () => {
        setCheck(3)
        navigation.navigate('Live')
    }
    const Navigated4 = () => {
        setCheck(4)
        navigation.navigate('Scorecard')
    }
    const Navigated5 = () => {
        setCheck(5)
        navigation.navigate('Commentary')
    }
    const Navigated6 = () => {
        setCheck(6)
        navigation.navigate('Predicitions')
    }
    return (
        <View style={{ paddingTop: 3, paddingBottom: 4 }}>
            <ScrollView horizontal={true}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ marginRight: 10, marginLeft: 10 }}>
                        <TouchableOpacity style={[styles.buttonstyle, check === 1 ? { backgroundColor: "#96BEFB" } : { backgroundColor: "#EFEFEF" }]} onPress={() => Navigated1()}>
                            <View style={styles.btnitem}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>My Chat</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginRight: 10, marginLeft: 10 }}>
                        <TouchableOpacity style={[styles.buttonstyle, check === 2 ? { backgroundColor: "#96BEFB" } : { backgroundColor: "#EFEFEF" }]} onPress={() => Navigated2()}>
                            <View style={styles.btnitem}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Game Chat</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginRight: 10, marginLeft: 10 }}>
                        <TouchableOpacity style={[styles.buttonstyle, check === 3 ? { backgroundColor: "#96BEFB" } : { backgroundColor: "#EFEFEF" }]} onPress={() => Navigated3()}>
                            <View style={styles.btnitem}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Live</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginRight: 10, marginLeft: 10 }}>
                        <TouchableOpacity style={[styles.buttonstyle, check === 4 ? { backgroundColor: "#96BEFB" } : { backgroundColor: "#EFEFEF" }]} onPress={() => Navigated4()}>
                            <View style={styles.btnitem}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Score Card</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginRight: 10, marginLeft: 10 }}>
                        <TouchableOpacity style={[styles.buttonstyle, check === 5 ? { backgroundColor: "#96BEFB" } : { backgroundColor: "#EFEFEF" }]} onPress={() => Navigated5()}>
                            <View style={styles.btnitem}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Commentary</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginRight: 10, marginLeft: 10 }}>
                        <TouchableOpacity style={[styles.buttonstyle, check === 6 ? { backgroundColor: "#96BEFB" } : { backgroundColor: "#EFEFEF" }]} onPress={() => Navigated6()}>
                            <View style={styles.btnitem}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Predition</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonstyle: {
        marginTop: 5,
        backgroundColor: "#96BEFB",
        borderRadius: 12.59,
        borderWidth: 1,
    },
    btnitem: {
        marginTop: 1,
        marginLeft: 10,
        marginRight: 10,
    }
})

export default Buttoncontant;