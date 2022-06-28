import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { chatio, getchatio } from '../services/Userservices';
import { Appbar } from 'react-native-paper';
// import Group from 'react-select/dist/declarations/src/components/Group';

function ChatRoom({ navigation, route }) {
  //console.log("this is msg ==>", route.params.Messages);
  //let Grp_Name=route.params.Grp_Name;
  //console.log("this is Grp_Name ==>",Grp_Name);
  const [selection, setSelection] = useState();
  const [Grpsummon, setGrpsummon] = useState(false)
  const [groupdata, setGroupData] = useState([]);
  const [msg, setmsg] = useState('');
  const [reqmessages, setReqmessages] = useState([]);
  const [textboxMsg, setTextboxMsg] = useState('');


  //console.log(selection,"hi msg");
  //console.log("req message",reqmessages);
  // useEffect(() => {
  //   setReqmessages(route.params.Messages.reverse())
  // }, []);

  useEffect(() => {
    getchatio().then(res => {
      // console.log(res.data.chatroom);
      setReqmessages(res.data.chatroom.reverse())
    })
  })

  const _handleSearch = () => console.log('Searching');

  const Back = () => {
    navigation.navigate('Create')
  }

  const _handleMore = () => {
    navigation.navigate('Profile')
  }

  const onSend = useCallback((messages = []) => {
    // console.log("msg", messages)
    chatio(messages[0]).then(res => {
    })
    setReqmessages((previousMessages) =>
      //console.log("previousMessages",previousMessages)
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  const checkmsgforgrp = (value) => {
    console.log("value-------->", value);
    if (value == "@") {
      setGrpsummon(true)
    }
    else {
      setGrpsummon(false)
      setmsg(value)
    }
  }

  const renderItem = ({ item }) => {
    console.log("item=======>",item);
    return (
      <TouchableOpacity onPress={() => {
        setTextboxMsg(textboxMsg + item.Grp_Name)
        setSelectedGrp(item.Grp_Name)
        setGrpsummon(false)
      }}>
        <View >
          <Icon style={styles.item} name="user-circle"> {item.Grp_Name}</Icon>
        </View>
      </TouchableOpacity>
    )
  };
 
  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name="send-circle"
            style={{ marginBottom: 5, marginRight: 5 }}
            size={32}
            color="#2e64e5"
          />
        </View>
      </Send>
    );
  };

  const renderBubble = (props) => {
     console.log("msg ====>",props)
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: 'grey',
          },
          left: {
            backgroundColor: '#2e65',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  };

  const scrollToBottomComponent = () => {
    return (
      <FontAwesome name='angle-double-down' size={22} color='#333' />
    );
  }

  // const textbtn = () => {
  //   return (
  //     <View style={{ flexDirection: "row" }}>
  //       <SafeAreaView style={styles.contain}>
  //         <View style={styles.btnGroup}>
  //           <TouchableOpacity style={[styles.btn, selection === 6 ? { backgroundColor: "blue" } : { backgroundColor: "black" }]} onPress={() => setSelection(6)}  >
  //             <Text style={[styles.btnText, selection === 6 ? { color: "white" } : { color: "white" }]}> 6 </Text>
  //           </TouchableOpacity>
  //           <TouchableOpacity style={[styles.btn, selection === 4 ? { backgroundColor: "blue" } : { backgroundColor: "black" }]} onPress={() => setSelection(4)}>
  //             <Text style={[styles.btnText, selection === 4 ? { color: "white" } : { color: "white" }]}> 4 </Text>
  //           </TouchableOpacity>
  //           <TouchableOpacity style={[styles.btn, selection === "W" ? { backgroundColor: "blue" } : { backgroundColor: "black" }]} onPress={() => setSelection("W")}>
  //             <Text style={[styles.btnText, selection === "W" ? { color: "white" } : { color: "white" }]}> W </Text>
  //           </TouchableOpacity>
  //           <TouchableOpacity style={[styles.btn, selection === "O" ? { backgroundColor: "blue" } : { backgroundColor: "black" }]} onPress={() => setSelection("O")}>
  //             <Text style={[styles.btnText, selection === "O" ? { color: "white" } : { color: "white" }]}> O </Text>
  //           </TouchableOpacity>
  //           <TouchableOpacity style={[styles.btn, selection === 3 ? { backgroundColor: "blue" } : { backgroundColor: "black" }]} onPress={() => setSelection(3)}>
  //             <Text style={[styles.btnText, selection === 3 ? { color: "white" } : { color: "white" }]}> 3 </Text>
  //           </TouchableOpacity>
  //           <TouchableOpacity style={[styles.btn, selection === 2 ? { backgroundColor: "blue" } : { backgroundColor: "black" }]} onPress={() => setSelection(2)}>
  //             <Text style={[styles.btnText, selection === 2 ? { color: "white" } : { color: "white" }]}> 2 </Text>
  //           </TouchableOpacity>
  //           <TouchableOpacity style={[styles.btn, selection === 1 ? { backgroundColor: "blue" } : { backgroundColor: "black" }]} onPress={() => setSelection(1)}>
  //             <Text style={[styles.btnText, selection === 1 ? { color: "white" } : { color: "white" }]}> 1 </Text>
  //           </TouchableOpacity>
  //         </View>
  //       </SafeAreaView >
  //     </View>

  //   )
  // }
  const textbtn = () => {
    return(
    <View style={styles.flat}>
      {/* <Text>hjbhjvbjh</Text> */}
      {/* {Grpsummon ? */}
        {/* <FlatList
          data={groupdata}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.key}
        />  */}
        {/* :
        null
      } */}
    </View>
    )

  }

  return (
    <>
      <View style={styles.appbar}>
        <Appbar.Header style={{ backgroundColor: 'transparent' }}>
          <Appbar.BackAction onPress={() => Back()} />
          <Appbar.Content title="Lobby" />
          <Appbar.Content title="My Chats" onPress={() => { navigation.navigate('Create') }} />
          <Appbar.Action icon="magnify" onPress={_handleSearch} />
          <Appbar.Action icon="dots-vertical" dark='boolean' onPress={_handleMore} />
        </Appbar.Header>
      </View>
      {/* <View>
        <Text>{Grp_Name}</Text>
      </View> */}
      {/* <View style={styles.corsol}>
        <Text style={styles.textInside}>CSK Vs RCB - live</Text>
      </View> */}


      <GiftedChat
        renderUsernameOnMessage={true}
        messages={reqmessages}
        onSend={(messages) => onSend(messages)}
        onInputTextChanged={(text) => { checkmsgforgrp(text) }}
        user={{
          _id: 2,
          name: 'Lavanya',
          number: '9042520296',
          //Grp_Name
        }}
        showUserAvatar
        alwaysShowSend
        scrollToBottom
        renderBubble={renderBubble}
  
        // renderFooter={textbtn}
        renderFooter={() => {
          return (
            <View>
                <FlatList
          data={groupdata}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.key}
        /> 
            </View>
          );
        }}
        renderSend={renderSend}
        // scrollToBottom
        // renderAvatarOnTop={true}
        // showUserAvatar={true}
        // showAvatarForEveryMessage={true}
        // renderAvatar={null}  
        scrollToBottomComponent={scrollToBottomComponent}
      />
    </>
  );

};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contain: {
    flex: 1,
  },
  flat:{
backgroundColor:"red"
  },
  item: {
    fontSize: 20,
    marginTop: 5,
    backgroundColor: 'red',
    borderRadius: 30,
    padding: 5,
    // marginVertical: 5,
    // marginHorizontal: 5,
  },
  btnGroup: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-evenly',
    marginBottom: 10

  },
  btn: {
    borderColor: '#6B7280',
    borderRadius: 50,

  },
  btnText: {
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 17,
    width: 45,
    height: 45
  },
  corsol: {
    marginTop: 10,
    height: 150,
    backgroundColor: "#9bb9fb"
  },
  textInside: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10
  },
  textTitle: {
    marginTop: 10,
    fontSize: 50,
    color: 'black',
    marginLeft: 20
  },
  add: {
    fontSize: 15,
    marginLeft: 10
  }
});
export default ChatRoom;