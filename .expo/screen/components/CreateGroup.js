import React, { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView, SafeAreaView } from "react-native";
import { getGroup } from "../services/Userservices";
import EvilIcons from 'react-native-vector-icons/EvilIcons';


const Create = ({ navigation }) => {
    const [chatMessage, setChatMessage] = useState();
    const [groupdata, setGroupData] = useState([]);
    //console.log("all group====>",groupdata)
    //console.log("chatMessage=====>",chatMessage)
    useEffect(() => {
        getGroupMembers()
    }, []);


    const getGroupMembers = () => {
        getGroup().then(res => {
            //console.log("allchat data==>",res.data);
            let groupMemberChatRoom = res.data.chatroom
            let userDetails = res.data.chatIO
            // console.log("details===>",groupMemberChatRoom,userDetails)
            // console.log("hello Iam array", res.data, res.data.chatroom);
            setChatMessage(userDetails)
            setGroupData(groupMemberChatRoom)

        })
    }
    const arrangeMessage = (item, Grp_Name) => {
        //  console.log("item==>", item)
        // console.log("Grp_Name==>", Grp_Name)
        let membersData = item.Grp_Members
        let filterMessage = []
        // let id =1
        membersData.map(item => {
            //console.log("item==>", item,)
            chatMessage.filter(obj => {
                //console.log("chat data====>",obj)
                //console.log("member number==>",item.number)
                // console.log("chat number==>",obj.user.number)
                let memberphone = item.number.replace(/[^\d]/g, "");
                //let phone = obj.user.number.replace(/[^\d]/g, "");
                // console.log("member number==>", memberphone)
                //  console.log("phone number==>", obj.user.number)
                //  console.log("Group name==>", obj.user.Grp_Name)
                if (Grp_Name == obj.user.Grp_Name) {
                    if (Number(memberphone) == Number(obj.user.number)) {
                        let sendingData = {
                            _id: obj._id + 1,
                            text: obj.text,
                            user: {
                                "_id": obj.user._id,
                                "name": item.item
                            },
                            createdAt: obj.createdAt

                        }
                        //console.log("sendingData===>",sendingData)
                        filterMessage.push(sendingData)
                    }
                }
            })

        })
        //console.log("filterMessage==>", filterMessage);
    }
    const createsave = () => {
        navigation.navigate('Contacts')
    }
    const renderItem = ({ item, index }) => {
        //console.log("item=======>",item);
        return (
            <TouchableOpacity onPress={() => { arrangeMessage(item, item.Grp_Name) }}>
                <View key={index} style={styles.item}>
                    <View>
                        <Image source={require('../assets/user1.jpg')}></Image>
                    </View>
                    <View>
                        <Text style={{ marginTop: 5, marginLeft: 10, fontSize: 18, }}>{item.Grp_Name}</Text>
                    </View>
                    {/* <Icon style={styles.item} name="user-circle" > {item.Grp_Name}</Icon> */}
                </View>
            </TouchableOpacity>
        )
    };

    return (
        <View style={styles.container}>
            {/* <ScrollView  style={{ marginTop: 10 }} > */}
            <FlatList
                data={groupdata}
                renderItem={renderItem}
                keyExtractor={(item, index) => {
                    return index.toString();
                }} />

            {/* </ScrollView> */}
            <View style={styles.createbtn}>
                <View style={{ marginRight: 30 }}>
                    <EvilIcons name="plus" size={60} onPress={() => createsave()} />
                </View>
                <Text style={{ marginRight: 20 }}>Create Group</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    createbtn: {
        // backgroundColor: "green",
        padding: 1,
        alignItems: 'flex-end',
    },
    item: {
        marginTop: 5,
        backgroundColor: 'white',
        padding: 8,
        marginVertical: 2,
        marginHorizontal: 5,
        flexDirection: 'row', 
        // justifyContent: "space-around"
    }

})

export default Create;