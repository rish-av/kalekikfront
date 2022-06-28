import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Appbar } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat';
import React, { useState, useEffect, useCallback } from 'react';
function LobbyChatRoom({ navigation }) {
  const [reqmessages, setReqmessages] = useState([]);
  console.log("reqqqqqqq",reqmessages)
  const Back = () => {
    navigation.navigate('Home')
  }
  const _handleSearch = () => console.log('Searching');
  const _handleMore = () => console.log('Shown more');

  const onSend = useCallback((messages = []) => {
    //console.log("msg", messages)
    // chatio(messages[0]).then(res => {
    // })
    setReqmessages((previousMessages) =>
      //console.log("previousMessages",previousMessages)
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

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
    // console.log("msg ====>",props)
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
      <View style={styles.corsol}>
        <Text style={styles.textInside}>CSK Vs MI - live</Text>
      </View>
      <GiftedChat
        renderUsernameOnMessage={true}
        messages={reqmessages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
          name: 'Karthick',
          number: '9688770194',
          // Grp_Name
        }}
        renderBubble={renderBubble}
        alwaysShowSend
        renderSend={renderSend}
        // scrollToBottom
        // renderAvatarOnTop={true}
        showUserAvatar
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
export default LobbyChatRoom;