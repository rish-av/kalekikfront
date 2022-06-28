import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { Client, User } from './UserClient';
import { getGroup, getchatbot, postchatbot } from "../services/Userservices";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useSelector, useDispatch } from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


function ChatBot({ navigation, route }) {
    const [textboxMsg, setTextboxMsg] = useState('');
    const [chatdata, setChatData] = useState([]);
    const [msg, setmsg] = useState('');
    const [Grpsummon, setGrpsummon] = useState(false)
    const [selectedGrp, setSelectedGrp] = useState("")
    const [Datasetted, setDatasetted] = useState(false)
    const [sendchat, setsendchat] = useState([])
    const login_user = useSelector(state => state);
    let scrollViewRef = useRef();
    let Mobile = login_user.userReducer.user.Mobile;
    let Name = login_user.userReducer.user.Name;
    //console.log('mobilenumber----------->', Mobile, Name);
    //    console.log("MsgQuesend======>", messageQue);
    const [groupdata, setGroupData] = useState([]);
    // console.log("all group====>",groupdata[0].Grp_Name)
    //console.log("chatMessage=====>",chatMessage)
    useEffect(() => {
        getGroupMembers()
    }, []);

    const getGroupMembers = () => {
        getGroup().then(res => {
            //console.log("allchat data==>",res.data);
            let groupMemberChatRoom = res.data.chatroom
            // console.log("details===>",groupMemberChatRoom,userDetails)
            setGroupData(groupMemberChatRoom)
        })
    }

    //console.log("chatdatas====>",chatdata)
    //console.log("chatMessage=====>",chatMessage)
    useEffect(() => {
        getchat_msg()
    }, [chatdata]);

    const getchat_msg = () => {
        getchatbot().then(res => {
            //console.log("allchat data==>",res.data);
            let getchatdata = res.data.chatbot
            // console.log("Chatbot=====>", getchatdata);
            getchatdata.map((data) => {
                let obj = {
                    createdAt: data.createdAt,
                    mobile_no: data.mobile_no,
                    msg: data.msg,
                    owner: data.owner,
                    group: data.group,
                }
                chatdata.push(obj)
                //setChatData(chatdatas)
            })
            var result = Object.keys(chatdata).map((key) => [chatdata[key]]);
            setsendchat(result)
            // console.log("Datasetted...", result)
            setDatasetted(true)
        })
    }
    // console.log("msg",messageQue);
    const send = async () => {
        setDatasetted(false)
        // console.log("send textbox===>", textboxMsg);
        // console.log("loginuser mobile number", Mobile)
        // console.log("loginuser name", Name)
        // let data=textboxMsg
        const sendingData = {
            msg: textboxMsg, mobile_no: Mobile, owner: Name, group: selectedGrp
        }
        setChatData([])
        getchat_msg()
        postchatbot(sendingData).then(res => {
            //console.log("createchatbot data==>", res.data);
            setDatasetted(true)
        })
        setTextboxMsg('')
    }

    const checkmsgforgrp = (value) => {
        if (value == "@") {
            setGrpsummon(true)
        }
        else {
            setGrpsummon(false)
            setmsg(value)
        }
    }
    const renderItem = ({ item, index }) => {
        //console.log("item=======>",item);
        return (
            <TouchableOpacity onPress={() => {
                setTextboxMsg(textboxMsg + item.Grp_Name)
                setSelectedGrp(item.abbre)
                setGrpsummon(false)
            }}>
                <View key={index} >
                    <Icon style={styles.item} name="user-circle"> {item.Grp_Name}</Icon>
                </View>
            </TouchableOpacity>
        )
    };
    const _handleMore = () => {
        navigation.navigate('Profile')
    }
    const Back = () => {
        navigation.navigate('Create')
    }
    const notification = () => console.log('Searching');

    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.center}
                ref={scrollViewRef}>
                {
                    Datasetted ?
                        sendchat.map((msg, index) => {
                            //console.log("msg", msg)
                            return (
                                <User key={index} msg={msg[0].msg} usermsg={msg} />
                            )
                        }) : null
                }
            </ScrollView>
            <ScrollView>
                {Grpsummon ?
                    <FlatList
                        data={groupdata}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => {
                            return index.toString();
                        }}
                    /> :
                    null
                }
            </ScrollView>
            <View style={styles.bottom} >
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => {
                        checkmsgforgrp(text)
                        setTextboxMsg(text)
                    }}
                    value={textboxMsg}
                    placeholder='   Type a New Message' />
                <FontAwesome name="send" size={30} onPress={send} />
                {/* <Text onPress={send} > Send</Text> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3',
    },
    head: {
        backgroundColor: 'white',
        padding: 15,
        position: 'relative',
        top: 3,
        zIndex: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    center: {
        marginBottom: 15
    },
    online: {
        fontSize: 12,
        color: 'white'
    },
    send: {
        fontSize: 16,
    },
    bot: {
        fontWeight: 'bold',
        color: '#333333',
        fontSize: 18,
    },
    input: {
        borderColor: '#D1E2EC',
        borderWidth: 1,
        width: '85%',
        paddingLeft: 3,
        borderRadius: 20,
        padding: 6
    },
    bottom: {
        backgroundColor: '#EFF5F8',
        bottom: 5,
        //display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    paragraph: {
        margin: 24,
        marginTop: 0,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    logo: {
        height: 128,
        width: 128,
    },
    verticalCenter: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    item: {
        fontSize: 20,
        marginTop: 5,
        // backgroundColor: 'white',
        borderRadius: 30,
        padding: 5,
    },
    contantbar: {
        width: 500,
        height: 200,
        backgroundColor: "gray"
    },
    buttonstyle: {
        height: 25,
        width: "auto",
        marginTop: 5,
        backgroundColor: "#96BEFB",
        borderRadius: 10,
        borderWidth: 2
    },
    btnitem: {
        marginTop: 2,
        marginLeft: 10,
        marginRight: 10,

    }
});

export default ChatBot;