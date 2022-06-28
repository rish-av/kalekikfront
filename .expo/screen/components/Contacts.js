import React, { useEffect, useState } from "react";
import * as Contacts from "expo-contacts";
import { Appbar } from 'react-native-paper';
import { createGroup } from "../services/Userservices";
import { Card } from 'react-native-paper';
import {Text,View,StyleSheet,FlatList,ScrollView,TextInput,TouchableOpacity,Image,Alert} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import Constants from 'expo-constants';
function Contact({ navigation }) {

  const Back = () => {
    setProducts([])
    navigation.navigate('Landingpage')
  }
  const _handleSearch = () => console.log('Searching');
  const _handleMore = () => console.log('Shown more');

  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.PHONE_NUMBERS],
        });
        if (data.length > 0) {
          setContacts(data);
          // console.log(data[1]);
        }
      }
    })();
  }, []);

  const [K_OPTIONS, setK_OPTIONS] = useState([]);
  //console.log("contacts===>",contacts);
  contacts.map((contact, index) => {
    // console.log(option.name,"hai")
    let sendingData = {
      name: contact.name,
      number: contact.phoneNumbers[0].number,
      id: index + 1, isChecked: false
    }
    K_OPTIONS.push(sendingData)
  });
  // console.log("K_OPTIONS re==>", K_OPTIONS)


  const [group, setGroup] = useState([])

  const Groupnamesave = () => {
    // console.log("Group name====>", group)
    //  console.log("Select Group member ====>", selected)
    createGroup({ group: group, select: selected }).then(res => {
      console.log("response msg ====>",res.data);
      if (res.data.status === 200) {
        createTwoButtonAlert(res.data.message)
        navigation.navigate('Mychat')
      } else {
        createTwoButtonAlert("Please Enter the Group Name...")
      }
    })
  }
  const createTwoButtonAlert = (AlertMsg) =>
    Alert.alert(
      "Success",
      AlertMsg,
      [
        { text: "OK", onPress: () => console.log("OK Pressed", group, selected) }
      ]
    );


  //dummy
  const [products, setProducts] = useState(K_OPTIONS);
  //console.log("products data===>", products)
  const handleChange = (id) => {
    // console.log("id===>", id)
    let temp = products.map((product) => {
      // console.log("productstemppp ===>", product)
      if (id === product.id) {
        return { ...product, isChecked: !product.isChecked };
      }
      return product;
    });
    // console.log("tempvalue===>", temp)
    setProducts(temp);
    // setChecked(!checked)
  };

  let selected = products.filter((product) => product.isChecked);
  console.log("select contant=====>", selected);
  // setSelectgroup(selected)

  const ContactList = (SendcontactData) => {
    console.log("selectitem==>",SendcontactData);
    return (
      <FlatList
        data={SendcontactData}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        renderItem={({ item, index }) => (
          
          <Card style={{ margin: 5 }}>
           
            <View style={item.isChecked == true ? styles.selectcard : styles.card}>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'space-between',
                  
                }}>
                <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
                  <View>
                    <Image style={styles.image1} source={require('../assets/user1.jpg')}></Image>
                  </View>
                  <View>
                    
                    <Text style={{ marginTop: 10, marginLeft: 10 }} key={index}>{item.name}</Text>
                  </View>
                </View>
                <EvilIcons EvilIcons name="plus" size={30}
                  style={{ marginTop: 10 }}
                  onPress={() => {
                    handleChange(item.id)
                  }} />
              </View>
            </View>
          </Card>
        )}
      />
    );
  };
  // const [favList,setFavList] = useState([]);
  const Selectcontact = (SelectData) => {
    return (
      <ScrollView horizontal={true} >
        {SelectData.map((item, index) => (
          // console.log("items====>",item)
          <View
            style={{
              // backgroundColor: "red",
              margin: 5,
            }} key={index}>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <View>
                <Image style={styles.image1} source={require('../assets/user1.jpg')}></Image>
              </View>
              <View>
                <AntDesign name="closecircleo" size={20}
                  onPress={() => {
                    handleChange(item.id)
                  }} />
              </View>
            </View>
            <View>
              <Text >{item.name}</Text>
            </View>

          </View>
        ))}
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ padding: 18 }}>
        <Text style={{ fontSize: 20, paddingBottom: 5 }}>Group Name</Text>
        <TextInput
          style={styles.input}
          placeholder=" Type group subject here...."
          onChangeText={value => setGroup(value)}
        />
      </View>
      <View style={{ margin: 5 }}>
        {Selectcontact(selected)}
      </View>
      <View style={{ marginTop: 2 }}>
        <Text style={styles.text}>Contacts</Text>
      </View>
      <ScrollView >
        <View >{ContactList(products)}</View>
      </ScrollView>
      <View style={styles.buttonbar}>
        <TouchableOpacity style={styles.buttonstyle} onPress={() => Groupnamesave()}>
          <View >
            <Text style={{ color: "white" }}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    borderRadius: 7
  },
  buttonbar: {
    marginTop: 10,
    flexDirection: 'row',
    // backgroundColor: "green",
    justifyContent: "space-around",
    marginBottom: 10

  },
  buttonstyle: {
    padding: 10,
    backgroundColor: "#96BEFB",
    borderRadius: 5
  },
  ///dummy
  container: {
    flex: 1,
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
  },
  card: {
    padding: 5,
     //backgroundColor:"red"
    // margin: 5,
  },
  selectcard:{
    padding: 5,
    backgroundColor:"#96BEFB"
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 5,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});



export default Contact;