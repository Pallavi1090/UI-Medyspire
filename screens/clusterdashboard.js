//Cluster Dashboard

import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Picker } from "@react-native-community/picker";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Appbar } from "react-native-paper";

const cluster = ({ navigation }) => {
  const [location, setLocation] = useState("a");

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header10}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content
          title="Cluster Dashboard"
          titleStyle={styles.header10Text}
        />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
      <ScrollView style={styles.content}>
        <View style={styles.head}>
          <View>
            <Text style={styles.text}>Hi, Cluster</Text>
            <Text style={styles.underlinedText}>Logged in as Cluster</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Ionicons name="md-notifications-outline" size={35} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputs}>
          <Text style={styles.locationText}>Location:</Text>
          <View style={styles.location}>
            <Picker
              style={styles.dropDown}
              selectedValue={location}
              onValueChange={(itemValue) => setLocation(itemValue)}
            >
              <Picker.Item label="Saraswathipuram" value="a" />
              <Picker.Item label="Hebbal" value="b" />
              <Picker.Item label="Vidyarayapuram" value="c" />
            </Picker>
          </View>
        </View>
        <View style={styles.cardSection}>
          <View style={styles.cardView}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("form")}
            >
              <Ionicons name="md-person-add" size={35} color="#1573d6" />
              <Text style={styles.cardText}>Enroll New Member</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("myCard")}
            >
              <Ionicons name="md-card" size={35} color="#1573d6" />
              <Text style={styles.cardText}>My Card</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("networkCenters")}
            >
              <Ionicons name="md-git-network" size={35} color="#1573d6" />
              <Text style={styles.cardText}>Network Centers</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardView}>
            <TouchableOpacity
              style={styles.card}
              // onPress={() => navigation.navigate("cluster")}
            >
              <MaterialCommunityIcons
                name="account-details"
                size={35}
                color="#1573d6"
              />
              <Text style={styles.cardText}>Member {"\n"}Details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <MaterialCommunityIcons
                name="content-copy"
                size={35}
                color="#1573d6"
              />
              <Text
                style={styles.cardText}
                onPress={() => navigation.navigate("hardcopyRequest")}
              >
                Hardcopy Request
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <MaterialCommunityIcons
                name="cash-multiple"
                size={35}
                color="#1573d6"
              />
              <Text
                style={styles.cardText}
                onPress={() => navigation.navigate("earnings")}
              >
                My Earnings
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardView}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("settings")}
            >
              <Ionicons name="md-settings" size={35} color="#1573d6" />
              <Text style={styles.cardText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.card}
              // onPress={() => navigation.navigate("cluster")}
            >
              <Ionicons
                name="md-information-circle"
                size={35}
                color="#1573d6"
              />
              <Text style={styles.cardText}>About</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.version}>
        <Text style={styles.versionText}>Valid through May 2021</Text>
        <Text style={styles.versionText}>Version 1.0.0.1</Text>
      </View>
    </View>
  );
};

export default cluster;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header10: {
    backgroundColor: "white",
  },
  header10Text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#1573d6",
  },
  content: {
    padding: 10,
    flex: 1,
  },
  head: {
    padding: 5,
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputs: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
    marginBottom: 5,
    marginTop: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  underlinedText: {
    fontSize: 10,
  },
  locationText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  location: {
    borderBottomWidth: 2,
    width: wp("50%"),
    height: hp("4%"),
  },
  dropDown: {
    width: wp("50%"),
    height: hp("4%"),
  },
  cardSection: {
    justifyContent: "space-evenly",
    height: hp("72%"),
  },
  cardText: {
    fontSize: 19,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 7,
    color: "#1573d6",
  },
  cardView: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
  },
  card: {
    borderWidth: 0,
    borderRadius: 20,
    alignItems: "center",
    height: hp("20%"),
    width: wp("33%"),
    justifyContent: "center",
    // backgroundColor: "#8ac3ff",
  },
  version: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-end",
    margin: 3,
  },
  versionText: {
    fontWeight: "bold",
    fontSize: 12,
  },
});
