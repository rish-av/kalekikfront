import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Alert, SafeAreaView, TouchableOpacity } from 'react-native';

function Live() {
    return (
        <View style={styles.container}>
            <ScrollView style={{ margin: 5 }}>
                <View style={styles.headerview}>
                    <View style={styles.viewStyleOne}>
                        <Text style={styles.headertextStyle}> BATTERS </Text>
                    </View>
                    <View style={styles.viewStyleTwo}>
                        <Text style={styles.headertextStyle}> R </Text>
                        <Text style={styles.headertextStyle}> B </Text>
                        <Text style={styles.headertextStyle}> 4s </Text>
                        <Text style={styles.headertextStyle}> 6s </Text>
                        <Text style={styles.headertextStyle}> SR </Text>
                    </View>
                </View>
                <View style={styles.contantview}>
                    <View style={styles.viewStyleOne}>
                        <Text style={styles.textStyle}> Dan Lawrence* (rhb) </Text>
                    </View>
                    <View style={styles.viewStyleTwo}>
                        <Text style={styles.textStyle}> 80 </Text>
                        <Text style={styles.textStyle}> 38 </Text>
                        <Text style={styles.textStyle}> 5 </Text>
                        <Text style={styles.textStyle}> 6 </Text>
                        <Text style={styles.textStyle}> 42.1 </Text>
                    </View>
                </View>
                <View style={{ paddingTop: 10 }}>
                    <Image style={styles.image1} source={require('../assets/Line.svg')}></Image>
                </View>
                <View style={styles.contantview}>
                    <View style={styles.viewStyleOne}>
                        <Text style={styles.textStyle}>Tom Westley (rhb) </Text>
                    </View>
                    <View style={styles.viewStyleTwo}>
                        <Text style={styles.textStyle}> 80 </Text>
                        <Text style={styles.textStyle}> 38 </Text>
                        <Text style={styles.textStyle}> 5 </Text>
                        <Text style={styles.textStyle}> 6 </Text>
                        <Text style={styles.textStyle}> 42.1 </Text>
                    </View>
                </View>
                <View style={{ paddingTop: 10 }}>
                    <Image style={styles.image1} source={require('../assets/Line.svg')}></Image>
                </View>
                <View style={styles.headerview}>
                    <View style={styles.viewStyleOne}>
                        <Text style={styles.headertextStyle}> BOWLERS </Text>
                    </View>
                    <View style={styles.viewStyleTwo}>
                        <Text style={styles.headertextStyle}> O </Text>
                        <Text style={styles.headertextStyle}> M </Text>
                        <Text style={styles.headertextStyle}> R </Text>
                        <Text style={styles.headertextStyle}> W </Text>
                        <Text style={styles.headertextStyle}> Econ </Text>
                    </View>
                </View>
                <View style={styles.contantview}>
                    <View style={styles.viewStyleOne}>
                        <Text style={styles.textStyle}>Liam Norwell (rfm) </Text>
                    </View>
                    <View style={styles.viewStyleTwo}>
                        <Text style={styles.textStyle}> 4 </Text>
                        <Text style={styles.textStyle}> 20 </Text>
                        <Text style={styles.textStyle}> 52 </Text>
                        <Text style={styles.textStyle}> 4 </Text>
                        <Text style={styles.textStyle}> 42.1 </Text>
                    </View>
                </View>
                <View style={{ paddingTop: 10 }}>
                    <Image style={styles.image1} source={require('../assets/Line.svg')}></Image>
                </View>
                <View style={styles.contantview}>
                    <View style={styles.viewStyleOne}>
                        <Text style={styles.textStyle}>Will Rhodes (rmf)</Text>
                    </View>
                    <View style={styles.viewStyleTwo}>
                        <Text style={styles.textStyle}> 4 </Text>
                        <Text style={styles.textStyle}> 32 </Text>
                        <Text style={styles.textStyle}> 38 </Text>

                        <Text style={styles.textStyle}> 2 </Text>
                        <Text style={styles.textStyle}> 52.1 </Text>
                    </View>
                </View>
                <View style={styles.footerview}>
                    <View style={styles.footerviewStyleOne}>
                        <Text style={styles.headertextStyle}>End of over 6 </Text>
                        <Text style={styles.headertextStyle}> Maiden</Text>
                    </View>
                    <View style={styles.footerviewStyleTwo}>
                        <Text style={styles.headertextStyle}> Surr: 27/0 </Text>
                        <Text style={styles.headertextStyle}>  CRR: 4.50 </Text>

                    </View>
                </View>
                <View >
                    <View style={{ flexDirection: "row", justifyContent: "space-around", width: "100%", padding: 5 }}>
                        <Text style={styles.textStyle}> Rj Burns</Text>
                        <Text style={styles.textStyle}>  4(17) </Text>
                        <Text style={styles.textStyle}> Di Stevens</Text>
                        <Text style={styles.textStyle}>  3-2-6-0 </Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-around", width: "100%", padding: 5 }}>
                        <Text style={styles.textStyle}> Rj Burns</Text>
                        <Text style={styles.textStyle}>  4(17) </Text>
                        <Text style={styles.textStyle}> Di Stevens</Text>
                        <Text style={styles.textStyle}>  3-2-6-0 </Text>
                    </View>
                </View>
                <View style={{ paddingTop: 10 }}>
                    <Image style={styles.image1} source={require('../assets/Line.svg')}></Image>
                </View>
                <View style={styles.headerview}>
                    <View style={styles.viewStyleOne}>
                        <Text style={styles.headertextStyle}>MATCH DETAILS </Text>
                    </View>
                </View>
                <View style={styles.contantview}>
                    <View style={{ width: "100%", padding: 5 }}>
                        <Text style={styles.textStyle}>Kent County Cricket Ground, Beckenham</Text>
                    </View>
                </View>
                <View style={{ paddingTop: 10 }}>
                    <Image style={styles.image1} source={require('../assets/Line.svg')}></Image>
                </View>
                <View style={{flexDirection:"row",marginTop:10}}>
                    <View style={{width:"40%"}}>
                        <Text style={styles.textStyle}> Toss </Text>
                    </View>
                    <View style={{width:"60%"}}>
                        <Text style={styles.textStyle}> Surrey, elected to bat first </Text>
                    </View>
                </View>
                <View style={{flexDirection:"row" ,marginTop:10}}>
                    <View style={{width:"40%"}}>
                        <Text style={styles.textStyle}> Series </Text>
                    </View>
                    <View style={{width:"60%"}}>
                        <Text style={styles.textStyle}> County Championship Division One </Text>
                    </View>
                </View>
                <View style={{flexDirection:"row",marginTop:10}}>
                    <View style={{width:"40%"}}>
                        <Text style={styles.textStyle}> Season </Text>
                    </View>
                    <View style={{width:"60%"}}>
                        <Text style={styles.textStyle}> 2021 </Text>
                    </View>
                </View>
                <View style={{flexDirection:"row",marginTop:10}}>
                    <View style={{width:"40%"}}>
                        <Text style={styles.textStyle}> Match days </Text>
                    </View>
                    <View style={{width:"60%"}}>
                        <Text style={styles.textStyle}> 12,13,14,15 May 2022 - day (4-day match) </Text>
                    </View>
                </View>
                <View style={{flexDirection:"row",marginTop:10}}>
                    <View style={{width:"40%"}}>
                        <Text style={styles.textStyle}> Umpires </Text>
                    </View>
                    <View style={{width:"60%"}}>
                        <Text style={styles.textStyle}> Ben Debenham,Neil Bainton </Text>
                    </View>
                </View>
                <View style={{flexDirection:"row",marginTop:10}}>
                    <View style={{width:"40%"}}>
                        <Text style={styles.textStyle}> Match Referee </Text>
                    </View>
                    <View style={{width:"60%"}}>
                        <Text style={styles.textStyle}> Simon Hinks </Text>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#4286f4',
        flex: 1,
    },
    headerview: {
        flexDirection: 'row',
        backgroundColor: '#bdbfbe',
    },
    contantview: {
        flexDirection: 'row',
    },
    footerview: {
        backgroundColor: '#bdbfbe',
        flexDirection: 'row',
        // justifyContent:"flex-end"
    },
    image1: {
        height: 1.5,
        backgroundColor: '#DADADA',
        width: "auto",

    },
    viewStyleOne: {
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#b642f4',
        padding: 5,
        width: "40%"

    },
    viewStyleTwo: {
        padding: 5,
        width: "60%",
        // backgroundColor: '#c226a4',
        flexDirection: 'row',
        justifyContent: "space-around",
        paddingLeft: 10,
    },
    footerviewStyleOne: {
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#b642f4',
        padding: 5,
        width: "40%"

    },
    footerviewStyleTwo: {
        padding: 5,
        width: "60%",
        flexDirection: "row",
        justifyContent: "flex-end",
        // backgroundColor: '#c226a4',
    },
    textStyle: {
        // textAlign: 'center',
        fontSize: 16,
    },
    headertextStyle: {
        // textAlign: 'center',
        marginLeft:5,
        fontWeight: "bold",
        fontSize: 16,
    }
})

export default Live