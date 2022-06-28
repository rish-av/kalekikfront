import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { Appbar, Button } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Headercontant from "./Headercontant"
import Buttoncontant from "./Buttoncontant";

function Commentary({ navigation }) {
    const [check, setCheck] = React.useState();
    const _handleSearch = () => console.log('Searching');
    const _handleMore = () => console.log('Shown more');

    const Back = () => {
        navigation.navigate('Create')
    }

    return (
        <View >
            {/* <View style={styles.appbar}>
                <Appbar.Header style={{ backgroundColor: '#9bb9fb' }}>
                    <Appbar.BackAction onPress={() => Back()} />
                    <Appbar.Content title="Kalekik" icon="person-add" />
                    <Appbar.Action icon="magnify" onPress={_handleSearch} />
                    <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
                </Appbar.Header>
            </View>
            <Headercontant />
            <Buttoncontant/> */}
            <View style={styles.subtitle}>
                <View style={styles.subtitlecontant}>
                    <AntDesign name="filter" size={20} />
                    <Text>Showing Newest</Text>
                </View>
            </View>
            <View style={styles.scrolview}>
                <ScrollView>
                    <View>
                        <View style={styles.textTitles}>
                            <Text>           </Text>
                            <Text> 0.1 </Text>
                            <Text>           </Text>
                            <Text>  Hannon-Dalby to Browne, no run </Text>
                        </View>
                        <View style={styles.textTitles}>
                            <Text>           </Text>
                            <Text> 0.2 </Text>
                            <Text>           </Text>
                            <Text>  Hannon-Dalby to Browne, 2 run </Text>
                        </View>
                        <View style={styles.textTitles}>
                            <Text>           </Text>
                            <Text> 0.3 </Text>
                            <Text>           </Text>
                            <Text>  Hannon-Dalby to Browne, 1 run </Text>
                        </View>
                        <View style={styles.textTitles}>
                            <Text>           </Text>
                            <Text> 0.4 </Text>
                            <Text>           </Text>
                            <Text>  Hannon-Dalby to Browne, no run </Text>
                        </View>
                        <View style={styles.textTitles}>
                            <Text>           </Text>
                            <Text> 0.5 </Text>
                            <Text>           </Text>
                            <Text>  Hannon-Dalby to Browne, 1 run </Text>
                        </View><View style={styles.textTitles}>
                            <Text>           </Text>
                            <Text> 0.6 </Text>
                            <Text>           </Text>
                            <Text>  Hannon-Dalby to Browne, no run </Text>
                        </View>
                    </View>

                </ScrollView>

            </View>
            <View style={styles.contantfooter}>
                <View>
                    <Text>END OF OVER 1</Text>
                    <Text>Run 4</Text>
                </View>
                <View>
                    <Text>ESSEX: 1/0</Text>
                    <Text>CRR: 1.00 </Text>
                </View>
            </View>
            <View style={styles.footer}>
                <View>
                    <Text>AN Cook</Text>
                    <Text>NLJ Browne</Text>
                </View>
                <View>
                    <Text>OJ Hannon-Dalby</Text>
                    {/* <Text>CRR: 1.00 </Text> */}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    middlecontant: {
        // backgroundColor: "red",
        height: 250
    },
    textTitles: {
        padding: 8,
        flexDirection: "row",
        marginTop: 10,
        // backgroundColor: "gray",
    },
    subtitle: {
        marginTop: 10,
        backgroundColor: "#BCBCBC"
    },
    subtitlecontant: {
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        flexDirection: 'row',
        // justifyContent: 'space-between',
    },
    item: {
        fontSize: 20,
        marginTop: 4,
        backgroundColor: 'white',
        borderRadius: 30,
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 5,
    },
    contantbar: {
        width: 500,
        height: 200,
        backgroundColor: "#BCBCBC"
    },
    buttonstyle: {
        height: 25,
        width: "auto",
        marginTop: 5,
        backgroundColor: "#96BEFB",
        borderRadius: 10,
        borderWidth:2,
      
    },
    btnitem: {
        marginTop: 2,
        marginLeft: 10,
        marginRight: 10,

    },
    scrolview: {
        height: 240,
        // backgroundColor:"red"
    },
    contantfooter: {
        padding: 6,
        height: 50,
        backgroundColor: "#BCBCBC",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    footer: {
        // backgroundColor: "red",
        padding: 6,
        height: 50,
        flexDirection: "row",
        justifyContent: "space-around"
    }

})

export default Commentary;