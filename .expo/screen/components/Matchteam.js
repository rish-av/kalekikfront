import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput,TouchableOpacity  } from 'react-native';
import { Appbar } from 'react-native-paper';
import { RadioButton } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import { Picker } from '@react-native-picker/picker';
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
} from '@expo-google-fonts/inter';

function Matchteam({ navigation, route }) {
    let [fontsLoaded] = useFonts({
        Inter_100Thin,
        Inter_200ExtraLight,
        Inter_300Light,
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_800ExtraBold,
        Inter_900Black,
    });
    // console.log("match",route.params.Loginuser);
    //let loginuser3 = route.params.Loginuser;
    const [selectedValue, setSelectedValue] = useState("CSK vs RCB - live");
    const [CSKnumber, onCSKChangeNumber] = useState(null);
    const [RCBnumber, onRCBChangeNumber] = useState(null);
    const [CSKdropdown, setCSKDropdown] = useState(null);
    const [CSKdropdown1, setCSKDropdown1] = useState(null);
    const [CSKdropdown2, setCSKDropdown2] = useState(null);
    const [RCBdropdown, setRCBDropdown] = useState(null);
    const [RCBdropdown1, setRCBDropdown1] = useState(null);
    const [RCBdropdown2, setRCBDropdown2] = useState(null);
    const [checked, setChecked] = useState('first');

    const CSKdata = [
        { label: 'Ruturaj Gaikwad (R)', value: '1' },
        { label: 'MS Dhoni (R)', value: '2' },
        { label: 'Hari Nishanth', value: '3' },
        { label: 'Subhranshu Senapati', value: '4' },
        { label: 'Devon Conway', value: '5' },
        { label: 'Robin Uthappa', value: '6' },
        { label: 'N Jagadeesan', value: '7' },
        { label: 'Ambati Rayudu', value: '8' },
        { label: 'Ravindra Jadeja (R)', value: '9' },
        { label: 'Moeen Ali (R)', value: '10' },
        { label: 'Bhagath Varma', value: '11' },
        { label: 'Chris Jordan', value: '12' },
    ];
    const CSKdata1 = [
        { label: 'Mohammed Siraj (R)', value: '1' },
        { label: 'Chama Milind', value: '2' },
        { label: 'Siddarth Kaul', value: '3' },
        { label: 'Karn Sharma', value: '4' },
        { label: 'Harshal Patel', value: '5' },
        { label: 'Akash Deep', value: '6' },
        { label: 'Jason Behrendorff', value: '7' },
        { label: 'Josh Hazlewood', value: '8' },
        { label: 'Virat Kohli (R)', value: '9' },
    ];
    const data2 = [
        { label: '0 - 50', value: '1' },
        { label: '50 - 100', value: '2' },
        { label: '100 - 150', value: '3' },
        { label: '150 - 200', value: '4' },
        { label: '200 - 250', value: '5' },
        { label: '250 and above', value: '6' },
    ];

    const RCBdata = [
        { label: 'Virat Kohli (R)', value: '1' },
        { label: 'Suyash Prabhudessai', value: '2' },
        { label: 'Faf du Plessis', value: '3' },
        { label: 'Subhranshu Senapati', value: '4' },
        { label: 'Rajat Patidar', value: '5' },
        { label: 'Finn Allen', value: '6' },
        { label: 'Anuj Rawat', value: '7' },
        { label: 'Dinesh Karthik', value: '8' },
        { label: 'Glenn Maxwell (R)', value: '9' },
        { label: 'Sherfane Rutherford', value: '10' },
        { label: 'Aneeshwar Gautam', value: '11' },
        { label: 'David Willey', value: '12' },
    ];
    const RCBdata1 = [
        { label: 'KM Asif', value: '1' },
        { label: 'Tushar Deshpande', value: '2' },
        { label: 'Maheesh Theekshana', value: '3' },
        { label: 'Mukesh Choudhary', value: '4' },
        { label: 'Simarjeet Singh', value: '5' },
        { label: 'Rajvardhan Hangargekar', value: '6' },
        { label: 'Prashant Solanki', value: '7' },
        { label: 'Chris Jordan', value: '8' },
        { label: 'Dwayne Bravo', value: '9' },
    ];


    const Back = () => {
        navigation.navigate('SelectEvent')
    }
    const _renderItem = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
            </View>
        );
    };

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (

            <View style={styles.container}>
                <View style={styles.appbar}>
                    <Appbar.Header style={{ backgroundColor: 'white' }}>
                        <Appbar.BackAction onPress={() => Back()} />
                        <Appbar.Content title="Match Predicition" />
                    </Appbar.Header>
                </View>
                <ScrollView >

                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 200 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        title="other matches"
                    >
                        {/* <Text style={{color:'black',fontWeight:'bold',fontSize:18}} label="Other Matches"></Text> */}
                        <Picker.Item label="CSK vs RCB -live" value="CSK vs RCB - live" />
                        <Picker.Item label="RR vs KKR" value="RR vs KKR" />
                        <Picker.Item label="DC vs PBKS" value="DC vs PBKS" />
                    </Picker>
                    <Text style={styles.selectteam}>Supproting Team</Text>
                    <View >
                        <RadioButton.Group >
                            <View style={{ flexDirection: "row"}}>
                                <RadioButton value="first" status={checked === 'first' ? 'checked' : 'unchecked'} onPress={() => setChecked('first')} />
                                <Text style={styles.match}>CSK</Text>
                                <RadioButton value="second" status={checked === 'second' ? 'checked' : 'unchecked'} onPress={() => setChecked('second')} />
                                <Text style={styles.match}>RCB</Text>
                                <RadioButton value="thrid" status={checked === 'thrid' ? 'checked' : 'unchecked'} onPress={() => setChecked('thrid')} />
                                <Text style={styles.match}>Neutral </Text>
                            </View>
                        </RadioButton.Group>
                    </View>
                    <View>
                        {checked == 'first' ?
                            <View style={styles.main}>
                                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                    <Text style={styles.textmain}>CSK Score</Text>
                                    <Dropdown
                                    fontFamily={"Inter_400Regular"}
                                        style={styles.dropdown}
                                        containerStyle={styles.shadow}
                                        data={data2}
                                        search
                                        searchPlaceholder="Search"
                                        labelField="label"
                                        valueField="value"
                                        label="Dropdown"
                                        placeholder="Select Score"
                                        value={CSKdropdown}
                                        onChange={item => {
                                            setCSKDropdown(item.value);
                                            console.log('selected', item);
                                        }}
                                        renderItem={item => _renderItem(item)}
                                    // textError="Error"
                                    />
                                </View>
                                {/* <View style={styles.numbtn1}>
                                <Button mode="text" onPress={() => console.log('Pressed')} color='black'>300 above</Button>
                            </View> */}
                                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                    <Text style={styles.textmain}>CSK Best Batsman</Text>
                                    <Dropdown
                                    fontFamily={"Inter_400Regular"}
                                        style={styles.dropdown1}
                                        containerStyle={styles.shadow}
                                        data={CSKdata}
                                        search
                                        searchPlaceholder="Search"
                                        labelField="label"
                                        valueField="value"
                                        label="Dropdown"
                                        placeholder="Select Score"
                                        value={CSKdropdown1}
                                        onChange={item => {
                                            setCSKDropdown1(item.value);
                                            console.log('selected', item);
                                        }}
                                        renderItem={item => _renderItem(item)}
                                    // textError="Error"
                                    />
                                </View>
                                {/* <View>
                                <Text style={styles.textmain3}>Number of Boundaries</Text>
                                <Increment />
                            </View> */}
                                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                    <Text style={styles.textmain}>Wickets Taken</Text>
                                    <TextInput
                                        style={styles.wicketdropdown}
                                        // onChangeText={text => onChangeText(text)}
                                        // value={value}
                                        placeholder="Enter wicket"
                                        keyboardType="numeric"
                                        value={CSKnumber}
                                        onChangeText={onCSKChangeNumber}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                    <Text style={styles.textmain}>RCB Best Bowler</Text>
                                    <Dropdown
                                    fontFamily={"Inter_400Regular"}
                                        style={styles.dropdown2}
                                        containerStyle={styles.shadow}
                                        data={CSKdata1}
                                        search
                                        searchPlaceholder="Search"
                                        labelField="label"
                                        valueField="value"
                                        label="Dropdown"
                                        placeholder="Select Score"
                                        value={CSKdropdown2}
                                        onChange={item => {
                                            setCSKDropdown2(item.value);
                                            console.log('selected', item);
                                        }}
                                        renderItem={item => _renderItem(item)}
                                    // textError="Error"
                                    />
                                </View>
                            </View>
                            :
                            <View style={styles.main}>
                                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                    <Text style={styles.textmain}>RCB Score</Text>
                                    <Dropdown
                                    fontFamily={"Inter_400Regular"}
                                        style={styles.dropdown}
                                        containerStyle={styles.shadow}
                                        data={data2}
                                        search
                                        searchPlaceholder="Search"
                                        labelField="label"
                                        valueField="value"
                                        label="Dropdown"
                                        placeholder="Select Score"
                                        value={RCBdropdown}
                                        onChange={item => {
                                            setRCBDropdown(item.value);
                                            console.log('selected', item);
                                        }}
                                        renderItem={item => _renderItem(item)}
                                    // textError="Error"
                                    />
                                </View>
                                {/* <View style={styles.numbtn1}>
                            <Button mode="text" onPress={() => console.log('Pressed')} color='black'>300 above</Button>
                        </View> */}
                                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                    <Text style={styles.textmain}>RCB Best Batsman</Text>
                                    <Dropdown
                                    fontFamily={"Inter_400Regular"}
                                        style={styles.dropdown1}
                                        containerStyle={styles.shadow}
                                        data={RCBdata}
                                        search
                                        searchPlaceholder="Search"
                                        labelField="label"
                                        valueField="value"
                                        label="Dropdown"
                                        placeholder="Select Score"
                                        value={RCBdropdown1}
                                        onChange={item => {
                                            setRCBDropdown1(item.value);
                                            console.log('selected', item);
                                        }}
                                        renderItem={item => _renderItem(item)}
                                        // fontFamily={"Inter_700Bold"}
                                    // textError="Error"
                                    />
                                </View>
                                {/* <View>
                            <Text style={styles.textmain3}>Number of Boundaries</Text>
                            <Increment />
                        </View> */}
                                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                    <Text style={styles.textmain}>Wickets Taken</Text>
                                    <TextInput
                                        style={{ width: 180, marginLeft: 55, maxHeight: 50, borderColor: 'black', borderWidth: 2, borderRadius: 5, backgroundColor: 'white', fontSize: 16, paddingLeft: 5 }}
                                        // onChangeText={text => onChangeText(text)}
                                        // value={value}
                                        placeholder="Enter wicket"
                                        keyboardType="numeric"
                                        value={RCBnumber}
                                        onChangeText={onRCBChangeNumber}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                    <Text style={styles.textmain}>CSK Best Bowler</Text>
                                    <Dropdown
                                    fontFamily={"Inter_400Regular"}
                                        style={styles.dropdown2}
                                        containerStyle={styles.shadow}
                                        data={RCBdata1}
                                        search
                                        searchPlaceholder="Search"
                                        labelField="label"
                                        valueField="value"
                                        label="Dropdown"
                                        placeholder="Select Score"
                                        value={RCBdropdown2}
                                        onChange={item => {
                                            setRCBDropdown2(item.value);
                                            console.log('selected', item);
                                        }}
                                        renderItem={item => _renderItem(item)}
                                    // textError="Error"
                                    />
                                </View>
                            </View>}
                    </View >

                    <View style={styles.save}>
                        <Button mode="contained" color='#96BEFB' onPress={() => { navigation.navigate('Landingpage') }}  ><Text style={{color: 'white',fontFamily:"Inter_600SemiBold",fontSize:16}}>Save Prediction</Text></Button>
                    </View >
                </ScrollView>
            </View>

        )
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red',
    },
    appbar: {
        marginTop: 10,
        textAlign: 'center',
        marginRight: 30,
    },
    selectteam: {
        marginTop: 10,
        fontSize: 18,
        marginLeft: 10,
        fontFamily:"Inter_700Bold"
    },
    match: {
        marginTop: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#597393',
        fontFamily:"Inter_500Medium",

    },
    main: {
        marginLeft: 10
    },
    textmain: {
        marginTop: 10,
        // fontWeight: 'bold',
        fontSize: 18,
        fontFamily:"Inter_700Bold"
    },
    wicketdropdown:{
        backgroundColor: 'white',
        // borderBottomColor: 'gray',
        borderWidth: 2,
        borderRadius: 5,
        width: 180,
        marginLeft:63,
        maxHeight: 50,
        paddingLeft: 5,
        borderColor:"#C9C9C9",
        color:"#2E2E2E",
        fontFamily:"Inter_500Medium"
    },
    dropdown: {
        backgroundColor: 'white',
        color:"#2E2E2E",
        borderWidth: 2,
        borderRadius: 5,
        width: 180,
        marginLeft: 99,
        maxHeight: 50,
        paddingLeft: 5,
        borderColor:"#C9C9C9",
        fontFamily:"Inter_300Light"
    },
    dropdown1: {
        color:"#2E2E2E",
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 5,
        width: 180,
        marginLeft: 29,
        height: "auto",
        paddingLeft: 5,
        borderColor:"#C9C9C9",
        fontFamily:"Inter_300Light"
    },
    dropdown2: {
        color:"#2E2E2E",
        backgroundColor: 'white',
        // borderBottomColor: 'gray',
        borderWidth: 2,
        borderRadius: 5,
        width: 180,
        marginLeft: 45,
        maxHeight: 50,
        paddingLeft: 5,
        borderColor:"#C9C9C9",
        // color:"#2E2E2E"
    },
    item: {
        paddingVertical: 10,
        paddingHorizontal: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: 18,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    save: {
        width: 200,
        height: 60,
        marginLeft: 100,
        marginTop: 50,
        // borderRadius: 10,
    },
    appbar: {
        marginTop: 0,
    },
})


export default Matchteam;