import React from "react";
import { render } from "react-dom";
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default class about extends React.Component {
     state={
         services: [
             {name: "service1"},
             {name: "service2"},
             {name: "services3"},
         ]
     }
   render() {
       const mylist = this.state.services.map(item=> {
           return <Text style={styles.mytext}>{item.name}</Text>
       })
         return (
      <View>
          {mylist}
          <Text style={styles.mytext}> service1</Text>
      </View>
    
    );
  }
}
  const styles = StyleSheet.create({
    mytext: {
        fontSize:40
    }
  });