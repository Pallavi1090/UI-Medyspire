// main screen

import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import hospitals from "./hospitals";
import laboratories from "./laboratories";
import enroll from "./enroll";
import ayurvediccenters from "./ayurvediccenters";

const Tab = createMaterialTopTabNavigator();

const network = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header10}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Network" titleStyle={styles.header10Text} />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>

      <Tab.Navigator>
        <Tab.Screen name="Hospitals" component={hospitals} />
        <Tab.Screen name="Laboratories" component={laboratories} />
        <Tab.Screen name="Enroll" component={enroll} />
        <Tab.Screen name="Ayurvedic Centers" component={ayurvediccenters} />
      </Tab.Navigator>
    </View>
  );
};

export default network;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header10: {
    backgroundColor: "#1573d6",
  },
  header10Text: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
