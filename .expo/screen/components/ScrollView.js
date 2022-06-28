import React from 'react';
import { View, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';

const SquareView = (props) => {
  //   return (
  //     <View
  //       style={{
  //         height: props.size,
  //         width: props.size,
  //         backgroundColor: props.color,
  //       }}
  //     />
  //   );
};

export default function HomeScreen() {
  return (
    <ScrollView horizontal={true} style={{ marginTop: 400 }}>

      <Button size={100} color="red">
        Press me
      </Button>
      <Button size={100} color="red">
        Press me
      </Button>
      <Button size={100} color="red">
        Press me
      </Button>
      <Button size={100} color="red">
        Press me
      </Button>
      <Button size={100} color="red">
        Press me
      </Button>
      <Button size={100} color="red">
        Press me
      </Button>
      {/* <SquareView size={100} color="blue" />
      <SquareView size={100} color="green" />
      <SquareView size={100} color="yellow" />
      <SquareView size={100} color="gray" />
      <SquareView size={100} color="cyan" />
      <SquareView size={100} color="black" /> */}
    </ScrollView>
  );
}