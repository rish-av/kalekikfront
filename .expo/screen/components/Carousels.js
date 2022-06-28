import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

export const SLIDER_WIDTH = Dimensions.get('window').width + 10;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const data = [
  {
    id: 1,
    name: 'React JS',
    url: 'https://i.pinimg.com/originals/a1/de/a2/a1dea2cf213703688b3d040e1c112a53.png',
  },
  {
    id: 2,
    name: 'JavaScript',
    url: 'https://resize.indiatvnews.com/en/resize/newbucket/715_-/2019/04/rcb-vs-rr-live-cricket-streaming-ipl-1556633460.jpg',
  },
  {
    id: 3,
    name: 'Node JS',
    url: 'https://www.cricketcountry.com/wp-content/uploads/2016/04/MI-vs-KKR-Live-blog.jpg',
  },
  {
    id: 4,
    name: 'Node JS',
    url: 'https://i.ytimg.com/vi/ilG0s98L9Zo/maxresdefault.jpg',
  },
  {
    id: 5,
    name: 'Node JS',
    url: 'https://images.indianexpress.com/2020/09/RCB-vs-MI.jpg',
  },
];
 
const renderItem = ({ item }) => {
  return (
    <View style={styles.aboutlogo}>
      <View style={styles.title}>
        <View style={{ padding: 15 }}>
          <Text>Result. 59th Match. T20. Wankhede </Text>
          <View style={{ flexDirection: "row", padding: 5, justifyContent: "space-evenly" }}>
            <View>
              <Image style={styles.icon} source={require('../assets/csk1.jpg')} />
            </View>
            <View style={styles.logocontant}>
              <View >
                <Text>CSK</Text>
              </View>
              <View >
                <Text>150</Text>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: "row", padding: 5, justifyContent: "space-evenly" }}>
            <View>
              <Image style={styles.icon} source={require('../assets/MI.png')} />
            </View>
            <View style={styles.logocontant}>
              <View >
                <Text>MI</Text>
              </View>
              <View >
                <Text>(14.5/20 over.Target:98) 103/5</Text>
              </View>
            </View>
          </View>
          <View style={{ width: '100%', height: 1, backgroundColor: 'black' }} />
          <View style={{ marginTop: 10 }}>
            <Text>Mumbai need to 47 (with 31 balls remaining)</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

function Carousels() {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  return (
    <Carousel
      ref={isCarousel}
      data={data}
      renderItem={renderItem}
      sliderWidth={SLIDER_WIDTH}
      itemWidth={ITEM_WIDTH}
      onSnapToItem={index => setIndex(index)}
    />
  );
};

const styles = StyleSheet.create({
  aboutlogo: {
    backgroundColor: "#96BEFB",
    padding: 10,
    borderRadius: 10,
  },
  title: {
    //paddingVertical: 70,
    // borderWidth: 2,
    borderRadius: 6,
    backgroundColor: "white"

  },
  logocontant: {
    padding: 2,
    flexDirection: "row",
    //backgroundColor: "red",
    width: "90%",
    justifyContent: "space-between"
  }


})

export default Carousels;