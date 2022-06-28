import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image,ScrollView } from 'react-native';


const H_Splash = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('About')
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        {/* <Text style={styles.splashtext}>Kalekik</Text> */}
        <Image style={{ width: 300, height: 50,marginTop:60 }} source={require("../assets/kalekik.png")} />
      </View>
      <ScrollView >
        <View style={{flexDirection:"row", marginLeft:20,marginRight:20,justifyContent:"center",marginTop:20}}>
        <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Text>
        </View>
        
      </ScrollView>
      <View style={styles.createbtn}>
        <View>
          <Image style={styles.image} source={require('../assets/frontimage.png')}></Image>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'red',
  },
  createbtn: {
    marginTop:30,
    backgroundColor: "#96BEFB",
    //padding: 1,
    alignItems: 'flex-end',
  },
  textView: {
     marginTop: 130,
    //justifyContent: 'center',
    alignItems: 'center'
  },
  splashtext: {
    fontSize: 70,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#96BEFB'
  },
  image: {
    marginTop: -200,
    // width: 350,
    // height: 400,
  }

})

export default H_Splash;