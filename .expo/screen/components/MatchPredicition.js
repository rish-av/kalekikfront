import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';


const MatchPredicition = ({navigation}) => {
    const Back = () =>{
        navigation.navigate('Predicitions')
    }
    const [value, setvalue] = useState('');
    return (
        <View>
            <View style={styles.appbar}>
                <Appbar.Header style={{ backgroundColor: '#9bb9fb' }}>
                <Appbar.BackAction onPress={() => Back()} />
                    <Appbar.Content  title="Match Prediction" icon="person-add" />
                </Appbar.Header>
            </View>
            <Text style={styles.mainview}>CSK Batting(19 over)</Text>
            <Text style={styles.runs}>Runs Scored</Text>
            <View style={{paddingTop: 0}}>
                <TextInput 
                style={{height: 20,paddingLeft:10}}
                placeholder="Number comes here"
                onChangevalue={newvalue => setvalue(newvalue)}
                defaultValue={value}/>
                <Text style={{padding: 0}}>
                    {value.split('').map((value) => value && '').join('')}
                </Text>
            </View>
            <Text style={styles.bound}>Boundaries</Text>
            <View style={{paddingTop: 0}}>
                <TextInput 
                style={{height: 20,paddingLeft:10}}
                placeholder="Number comes here"
                onChangevalue={newvalue => setvalue(newvalue)}
                defaultValue={value}/>
                <Text style={{padding: 0}}>
                    {value.split('').map((value) => value && '').join('')}
                </Text>
            </View>
            <Text style={styles.six}>Sixers</Text>
            <View style={{paddingTop:0}}>
                <TextInput 
                style={{height: 20,paddingLeft:10}}
                placeholder="Number comes here"
                onChangevalue={newvalue => setvalue(newvalue)}
                defaultValue={value}/>
                <Text style={{padding: 0}}>
                    {value.split('').map((value) => value && '').join('')}
                </Text>
            </View>
            <Text style={styles.wicket}>Wickets Lost</Text>
            <View style={{paddingTop: 10,paddingLeft:10}}>
                <TextInput 
                style={{height: 20}}
                placeholder="Number comes here"
                onChangevalue={newvalue => setvalue(newvalue)}
                defaultValue={value}/>
                <Text style={{padding: 0}}>
                    {value.split('').map((value) => value && '').join('')}
                </Text>
            </View>
            <Text style={styles.mainview2}>MI Bowling(19 over)</Text>
            <Text style={styles.runs2}>Runs Concealed</Text>
            <View style={{paddingTop: 0}}>
                <TextInput 
                style={{height: 20,paddingLeft:10}}
                placeholder="Number comes here"
                onChangevalue={newvalue => setvalue(newvalue)}
                defaultValue={value}/>
                <Text style={{padding: 0}}>
                    {value.split('').map((value) => value && '').join('')}
                </Text>
            </View>
            <Text style={styles.bound2}>Boundaries Concealed</Text>
            <View style={{paddingTop: 0}}>
                <TextInput 
                style={{height: 20,paddingLeft:10}}
                placeholder="Number comes here"
                onChangevalue={newvalue => setvalue(newvalue)}
                defaultValue={value}/>
                <Text style={{padding: 0}}>
                    {value.split('').map((value) => value && '').join('')}
                </Text>
            </View>
            <Text style={styles.six2}>Sixers Concealed</Text>
            <View style={{paddingTop:0}}>
                <TextInput 
                style={{height: 20,paddingLeft:10}}
                placeholder="Number comes here"
                onChangevalue={newvalue => setvalue(newvalue)}
                defaultValue={value}/>
                <Text style={{padding: 0}}>
                    {value.split('').map((value) => value && '').join('')}
                </Text>
            </View>
            <Text style={styles.wicket2}>Wickets Taken</Text>
            <View style={{paddingTop: 10}}>
                <TextInput 
                style={{height: 20,paddingLeft:10}}
                placeholder="Number comes here"
                onChangevalue={newvalue => setvalue(newvalue)}
                defaultValue={value}/>
                <Text style={{padding: 0}}>
                    {value.split('').map((value) => value && '').join('')}
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
      mainview: {
        marginLeft: 10,
        fontSize: 25,
        fontWeight: "bold",
        paddingTop:10
      },
      runs:{
        marginLeft: 10,
        fontWeight: "bold",
        paddingTop:10,
        fontSize:20
      },
      bound: {
        marginLeft: 10,
        fontWeight: "bold",
        paddingBottom: 1,
        fontSize:20
      },
      six: {
        marginLeft: 10,
       fontWeight: "bold",
       fontSize:20
      },
      wicket: {
        marginLeft: 10,
        fontWeight: "bold",
        fontSize:20
      },
      mainview2:{
        marginLeft: 10,
        fontSize: 25,
        fontWeight: "bold"
      },
      runs2:{
        marginLeft: 10,
        fontWeight: "bold",
        paddingTop:10,
        fontSize:20
      },
      bound2: {
        marginLeft: 10,
        fontWeight: "bold",
        paddingBottom: 1,
        fontSize:20
      },
      six2: {
        marginLeft: 10,
       fontWeight: "bold",
       fontSize:20
      },
      wicket2: {
        marginLeft: 10,
        fontWeight: "bold",
        fontSize:20
      }

})
export default MatchPredicition