//Member Dashboard

import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Picker } from "@react-native-community/picker";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Appbar } from "react-native-paper";

const dashboard = ({ navigation }) => {
  const [location, setLocation] = useState("a");

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header10}>
        <Appbar.Content
          title={
            <Image
              source={require("../assets/medylifeline1_1-removebg-preview.png")}
            />
          }
          titleStyle={styles.logoImage}
          style={styles.imageStyle}
        />
        <Appbar.Content
          title="Dashboard"
          titleStyle={styles.header10Text}
          style={styles.headerStyle}
        />
      </Appbar.Header>
      <ScrollView style={styles.content}>
        <View style={styles.head}>
          <Text style={styles.text}>Hi, Member</Text>
          <TouchableOpacity>
            <Ionicons name="md-notifications-outline" size={35} />
          </TouchableOpacity>
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
        <View style={styles.cardView}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("myCard")}
          >
            <Icon name="id-card" size={35} color="#1573d6" />
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
            onPress={() => navigation.navigate("renewal")}
          >
            <MaterialCommunityIcons
              name="autorenew"
              size={35}
              color="#1573d6"
            />
            <Text style={styles.cardText}>Renewal Details</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("hardcopyRequest")}
          >
            <MaterialCommunityIcons
              name="content-copy"
              size={35}
              color="#1573d6"
            />
            <Text style={styles.cardText}>Hardcopy Request</Text>
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
          
          <TouchableOpacity style={styles.card}
          onPress={() => navigation.navigate("about")}
          >

            <Ionicons name="md-information-circle" size={35} color="#1573d6" />
            <Text style={styles.cardText}>About</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.bottomText}>
            Do you want to become a cluster?
          </Text>
          <TouchableOpacity
            style={styles.bottomButton}
            onPress={() => navigation.navigate("cluster")}
          >
            <Text style={styles.buttonText}>Click Here</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.version}>
        <Text style={styles.versionText}>Valid through May 2021</Text>
        <Text style={styles.versionText}>Version 1.0.0.1</Text>
      </View>
    </View>
  );
};

export default dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header10: {
    backgroundColor: "#fff",
  },
  header10Text: {
    fontSize: 25,
    width: wp("30%"),
    fontWeight: "bold",
    color: "#1573d6",
  },
  logoImage: {
    width: wp("50%"),
    height: hp("11%"),
    marginBottom: 30,
  },
  headerStyle: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  imageStyle: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  content: {
    padding: 5,
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
    margin: 5,
    marginTop: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  locationText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  cardText: {
    fontSize: 19,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 7,
    color: "#1573d6",
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
  cardView: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
  },
  card: {
    borderWidth: 0,
    borderRadius: 20,
    alignItems: "center",
    height: hp("15%"),
    width: wp("40%"),
    justifyContent: "center",
    // backgroundColor: '#8ac3ff',
    // elevation: 15,
  },
  bottom: {
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  bottomText: {
    fontSize: 23,
    fontWeight: "bold",
  },
  bottomButton: {
    backgroundColor: "#1573d6",
    borderRadius: 20,
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: wp("30%"),
  },
  buttonText: {
    fontWeight: "bold",
    alignSelf: "center",
    justifyContent: 'center',
    textTransform: "uppercase",
    color: "#fff",
  },
  version: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    // bottom: 0,
  },
  versionText: {
    fontWeight: "bold",
    fontSize: 12,
  },
});
