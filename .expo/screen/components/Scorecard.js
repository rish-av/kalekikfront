import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Alert, SafeAreaView, TouchableOpacity } from 'react-native';

function Scorecard() {
    return (
        <View style={styles.container}>
            <ScrollView style={{ margin: 5 }}>
                <View style={styles.headerview}>
                    <View style={styles.viewStyleOne}>
                        <Text style={styles.subtextStyle}> BATTERS </Text>
                    </View>
                    <View style={styles.viewStyleTwo}>
                        <Text style={styles.subtextStyle}> R </Text>
                        <Text style={styles.subtextStyle}> B </Text>
                        <Text style={styles.subtextStyle}> 4s </Text>
                        <Text style={styles.subtextStyle}> 6s </Text>
                        <Text style={styles.subtextStyle}> SR </Text>
                    </View>
                </View>
                <View style={styles.contantview}>
                    <View style={styles.viewStyleOne}>
                        <Text style={styles.textStyle}>Rory Burns (c){'\n'}(not out)</Text>
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
                        <Text style={styles.textStyle}>Ryan Patel{'\n'}(not out)</Text>
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
                        <Text style={styles.textStyle}>Extras</Text>
                    </View>
                    <View style={{ paddingLeft: 20 }}>
                        <Text style={styles.textStyle}> 0 </Text>
                    </View>
                </View>
                <View style={styles.contantview1}>
                    <View style={styles.viewStyleOne}>
                        <Text style={styles.textStyle}>Total</Text>
                    </View>
                    <View style={styles.viewStyleTwo}>
                        <Text style={styles.textStyle}> 82/2</Text>
                        <Text style={styles.textStyle}>27.5 Ov (RR: 2.94)</Text>
                    </View>
                </View>
                <View style={styles.headerview}>
                    <View style={styles.viewStyleOne1}>
                        <Text style={styles.subtextStyle}> BOWLERS </Text>
                    </View>
                    <View style={styles.viewStyleTwo2}>
                        <Text style={styles.subtextStyle}> O </Text>
                        <Text style={styles.subtextStyle}> M </Text>
                        <Text style={styles.subtextStyle}> R </Text>
                        <Text style={styles.subtextStyle}> W </Text>
                        <Text style={styles.subtextStyle}> E </Text>
                        <Text style={styles.subtextStyle}> WD </Text>
                        <Text style={styles.subtextStyle}> NB </Text>
                    </View>
                </View>
                <View style={styles.contantview}>
                    <View style={styles.viewStyleOne1}>
                        <Text style={styles.textStyle}>Matt Milnes</Text>
                    </View>
                    <View style={styles.viewStyleTwo3}>
                        <Text style={styles.textStyle}> 4 </Text>
                        <Text style={styles.textStyle}> 2 </Text>
                        <Text style={styles.textStyle}> 42 </Text>
                        <Text style={styles.textStyle}> 0 </Text>
                        <Text style={styles.textStyle}> 5 </Text>
                        <Text style={styles.textStyle}> 0 </Text>
                        <Text style={styles.textStyle}> 0 </Text>
                    </View>
                </View>
                <View style={{ paddingTop: 10 }}>
                    <Image style={styles.image1} source={require('../assets/Line.svg')}></Image>
                </View>
                <View style={styles.contantview}>
                    <View style={styles.viewStyleOne1}>
                        <Text style={styles.textStyle}>Darren</Text>
                    </View>
                    <View style={styles.viewStyleTwo3}>
                        <Text style={styles.textStyle}> 4 </Text>
                        <Text style={styles.textStyle}> 32 </Text>
                        <Text style={styles.textStyle}> 38 </Text>
                        <Text style={styles.textStyle}> 2 </Text>
                        <Text style={styles.textStyle}> 5 </Text>
                        <Text style={styles.textStyle}> 0 </Text>
                        <Text style={styles.textStyle}> 0 </Text>
                    </View>
                </View>
                <View style={{ paddingTop: 10 }}>
                    <Image style={styles.image1} source={require('../assets/Line.svg')}></Image>
                </View>
                <View style={styles.contantview}>
                    <View style={styles.viewStyleOne1}>
                        <Text style={styles.textStyle}>Sam Curran</Text>
                    </View>
                    <View style={styles.viewStyleTwo3}>
                        <Text style={styles.textStyle}> 4 </Text>
                        <Text style={styles.textStyle}> 32 </Text>
                        <Text style={styles.textStyle}> 38 </Text>
                        <Text style={styles.textStyle}> 2 </Text>
                        <Text style={styles.textStyle}> 5 </Text>
                        <Text style={styles.textStyle}> 0 </Text>
                        <Text style={styles.textStyle}> 0 </Text>
                    </View>
                </View>
                <View>
                    <View style={styles.headerview}>
                        <View style={styles.viewStyleOne}>
                            <Text style={styles.subtextStyle}> Kent Team </Text>
                        </View>
                    </View>
                    <View style={styles.contantview}>
                        <View style={styles.viewStyleOne4}>
                            <Text style={styles.textStyle}>Ben Compton</Text>
                        </View>
                        <View style={styles.viewStyleTwo4}>
                            <Text style={styles.textStyle}> Top order batter </Text>
                        </View>
                    </View>
                    <View style={{ paddingTop: 10 }}>
                    <Image style={styles.image1} source={require('../assets/Line.svg')}></Image>
                </View>
                    <View style={styles.contantview}>
                        <View style={styles.viewStyleOne4}>
                            <Text style={styles.textStyle}>Zak Crawley</Text>
                        </View>
                        <View style={styles.viewStyleTwo4}>
                            <Text style={styles.textStyle}> Top order batter </Text>
                        </View>
                    </View>
                    <View style={{ paddingTop: 10 }}>
                    <Image style={styles.image1} source={require('../assets/Line.svg')}></Image>
                </View>
                    <View style={styles.contantview}>
                        <View style={styles.viewStyleOne4}>
                            <Text style={styles.textStyle}>Daniel Bell</Text>
                        </View>
                        <View style={styles.viewStyleTwo4}>
                            <Text style={styles.textStyle}> Top order batter </Text>
                        </View>
                    </View>
                    <View style={{ paddingTop: 10 }}>
                    <Image style={styles.image1} source={require('../assets/Line.svg')}></Image>
                </View>
                    <View style={styles.contantview}>
                        <View style={styles.viewStyleOne4}>
                            <Text style={styles.textStyle}>Jack Leaning (c)</Text>
                        </View>
                        <View style={styles.viewStyleTwo4}>
                            <Text style={styles.textStyle}> Top order batter </Text>
                        </View>
                    </View>
                    <View style={{ paddingTop: 10 }}>
                    <Image style={styles.image1} source={require('../assets/Line.svg')}></Image>
                </View>
                    <View style={styles.contantview}>
                        <View style={styles.viewStyleOne4}>
                            <Text style={styles.textStyle}>Ben Compton</Text>
                        </View>
                        <View style={styles.viewStyleTwo4}>
                            <Text style={styles.textStyle}> Top order batter </Text>
                        </View>
                    </View>
                    <View style={{ paddingTop: 10 }}>
                    <Image style={styles.image1} source={require('../assets/Line.svg')}></Image>
                </View>
                    <View style={styles.contantview}>
                        <View style={styles.viewStyleOne4}>
                            <Text style={styles.textStyle}>Zak Crawley</Text>
                        </View>
                        <View style={styles.viewStyleTwo4}>
                            <Text style={styles.textStyle}> Top order batter </Text>
                        </View>
                    </View>
                    <View style={{ paddingTop: 10 }}>
                    <Image style={styles.image1} source={require('../assets/Line.svg')}></Image>
                </View>
                    <View style={styles.contantview}>
                        <View style={styles.viewStyleOne4}>
                            <Text style={styles.textStyle}>Daniel Bell</Text>
                        </View>
                        <View style={styles.viewStyleTwo4}>
                            <Text style={styles.textStyle}> Top order batter </Text>
                        </View>
                    </View>
                    <View style={{ paddingTop: 10 }}>
                    <Image style={styles.image1} source={require('../assets/Line.svg')}></Image>
                </View>
                    <View style={styles.contantview}>
                        <View style={styles.viewStyleOne4}>
                            <Text style={styles.textStyle}>Jack Leaning (c)</Text>
                        </View>
                        <View style={styles.viewStyleTwo4}>
                            <Text style={styles.textStyle}> Top order batter </Text>
                        </View>
                    </View>
                </View>
                <View style={{ paddingTop: 10 }}>
                    <Image style={styles.image1} source={require('../assets/Line.svg')}></Image>
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
        backgroundColor: "#EEF1F4",
        marginTop: 10
    },
    contantview: {
        flexDirection: 'row',
    },
    contantview1: {
        flexDirection: 'row',
        backgroundColor: '#96BEFB'
    },
    footerview: {
        backgroundColor: '#bdbfbe',
        flexDirection: 'row',
        // justifyContent:"flex-end"
    },
    viewStyleOne: {
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#b642f4',
        padding: 5,
        width: "40%",
    },
    viewStyleTwo: {
        padding: 5,
        width: "60%",
        // backgroundColor: '#c226a4',
        flexDirection: 'row',
        justifyContent: "space-around",
        paddingLeft: 10,
        paddingTop: 10
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
    viewStyleOne1: {
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#b642f4',
        padding: 5,
        width: "30%",
    },
    viewStyleTwo2: {
        padding: 5,
        width: "70%",
        // backgroundColor: '#c226a4',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingLeft: 20,
        paddingTop: 10
    },
    viewStyleTwo3: {
        padding: 5,
        width: "70%",
        // backgroundColor: '#c226a4',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingLeft: 15,
        paddingTop: 10
    },
    textStyle: {
        // textAlign: 'center',
        fontSize: 16,
        color: '#170F49',
    },
    subtextStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#010101'
    },
    image1: {
        height: 1.5,
        backgroundColor: '#DADADA',
    },
    total: {
        backgroundColor: '#BCBCBC',
        width: "auto",
        height: 30,
        justifyContent: 'center',
        justifyContent: 'space-evenly',
        flexDirection: "row",
        paddingLeft: 100,
        color: '#010101'
    },
    totaltext: {
        fontSize: 15,
        color: '#010101',
        fontWeight: 'bold'
    },
    viewStyleOne: {
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#b642f4',
        padding: 5,
        width: "40%",
    },
    viewStyleTwo4: {
        width: "60%",
        paddingLeft: 50,
        padding: 5,
        color: '#170F49'
    },
    viewStyleOne4: {
        width: "40%",
        padding: 5,
        color: '#170F49'
    }
})

export default Scorecard