import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { scale, moderateScale } from 'react-native-size-matters';
import Svg, { Path } from 'react-native-svg';
import moment from 'moment';
import { Avatar, ListItem } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';


export function Client({ msg }) {
  return (
    <View style={[styles.item, styles.itemIn]}>
      <View style={[styles.balloon1]}>
        <Text style={{ paddingTop: 5, color: 'white' }}>{msg}</Text>
        <View
          style={[
            styles.arrowContainer,
            styles.arrowLeftContainer,
          ]}
        >
        </View>
      </View>
    </View>

  )
}

export function User({ msg, usermsg }) {
  //console.log("msgs---------->",usermsg[0].group);
  const login_user = useSelector(state => state);
  let Mobile = login_user.userReducer.user.Mobile;
  let Group_Name = usermsg[0].group;
  let time = moment(usermsg[0].createdAt).format("LT");

  return (
    <View style={{ backgroundColor: '#E5E5E5', paddingTop: 10 }}>
      <View style={usermsg[0].mobile_no == Mobile ? styles.itemOut : styles.itemIn}>
        <View>
          <Image style={styles.image1} source={require('../assets/user1.jpg')}></Image>
        </View>
        <View style={[styles.balloon2]}>
          <View style={styles.namewithdate}>
            <View>
              <Text style={{ color: '#170F49',  fontWeight: 'bold' }}>{Group_Name}</Text>
              <Text style={{ color: '#170F49',  fontWeight: 'bold' }}>{msg}</Text>
              {
                usermsg[0].mobile_no == Mobile ? null : <Text style={{color: '#170F49', fontWeight: 'bold' }}>{usermsg[0].owner}</Text>
              }
            </View>
            <View style={{flexDirection:"column-reverse",marginTop:25,marginLeft:10}}>
              <Text style={{ color: '#170F49' }}>{time} </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  itemIn: {
    // marginVertical: moderateScale(7, 2),
    flexDirection: 'row',
    alignSelf: "flex-start",
    marginLeft: 5
  },
  itemOut: {
    flexDirection: "row-reverse",
    alignSelf: 'flex-end',
    marginRight: 10
  },
  balloon1: {
    maxWidth: moderateScale(250, 2),
    paddingHorizontal: moderateScale(5, 2),
    paddingTop: moderateScale(5, 2),
    paddingBottom: moderateScale(7, 2),
    borderRadius: 20,
    backgroundColor: 'red'
  },
  balloon2: {
    // maxWidth: moderateScale(250, 2),
    paddingHorizontal: moderateScale(5, 2),
    paddingTop: moderateScale(3, 2),
    paddingBottom: moderateScale(5, 2),
    borderRadius: 20,
    backgroundColor: '#b0e0e6'

  },
  arrowContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    flex: 1
  },
  arrowLeftContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    backgroundColor: 'red'
  },

  arrowRightContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  arrowLeft: {
    left: moderateScale(-6, 0.5),
  },

  arrowRight: {
    right: moderateScale(-6, 0.5),
  },
  namewithdate: {
    flexDirection: 'row',
    justifyContent: "space-around"
  },
  image1: {
    borderRadius: 30,
    alignSelf: 'flex-end'
  }
});