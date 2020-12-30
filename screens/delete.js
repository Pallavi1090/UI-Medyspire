//MedyLifeLine

import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Icon1 from "react-native-vector-icons/FontAwesome";
import Icon3 from "react-native-vector-icons/MaterialCommunityIcons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const medylifeline = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.tabBar}>
          <TouchableOpacity>
            <Icon name="md-menu" size={35} color="#fff" />
          </TouchableOpacity>
          <View style={styles.icon}>
            <TouchableOpacity>
              <Icon
                style={{ marginRight: 20 }}
                name="md-notifications"
                size={35}
                color="#fff"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="md-person" size={35} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.header0}>
          <Text style={styles.headerText0}>Welcome</Text>
          <Text style={styles.headerText1}>to</Text>
          <Text style={styles.headerText2}>MedyLifeLine</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.card}>
          <TouchableOpacity
            style={{ ...styles.option, ...{ backgroundColor: "#ea3639" } }}
            onPress={() => navigation.navigate("myCard")}
          >
            <Icon1 name="id-card" size={40} color="#fff" />
            <Text style={styles.cardText}>My Card</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.option, ...{ backgroundColor: "#eb9234" } }}
            
            onPress={() => navigation.navigate("networkCenters")}
          >
            <Icon name="md-git-network" size={45} color="#fff" />
            <Text style={styles.cardText}>Network Centers</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line}></View>
        <View style={styles.card}>
          <TouchableOpacity
            style={{ ...styles.option, ...{ backgroundColor: "#c0cf15" } }}
            onPress={() => navigation.navigate("renewal")}
          >
            <Icon3 name="autorenew" size={45} color="#fff" />
            <Text style={styles.cardText}>Renewal Details</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.option, ...{ backgroundColor: "#00a305" } }}
            onPress={() => navigation.navigate("hardcopyRequest")}
          >
            <Icon3 name="credit-card-plus-outline" size={45} color="#fff" />
            <Text style={styles.cardText}>Request For New Card</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <TouchableOpacity
            style={{ ...styles.option, ...{ backgroundColor: "#2ca0e8" } }}
            onPress={() => navigation.navigate("settings")}
          >
            <Icon name="md-settings" size={45} color="#fff" />
            <Text style={styles.cardText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.option, ...{ backgroundColor: "#a226e0" } }}
            onPress={() => navigation.navigate("about")}
          >
            <Icon name="md-information-circle" size={45} color="#fff" />
            <Text style={styles.cardText}>About</Text>
          </TouchableOpacity>
          
        </View>
      </View>
     
        <View style={styles.version}>
        
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
     
    </View>
    
    
  );
};

export default medylifeline;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottom: {
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  bottomText: {
    justifyContent: 'center',
    fontSize: 18,
    fontWeight: "bold",
  },
  bottomButton: {
    backgroundColor: "#1573d6",
    borderRadius: 20,
    marginTop: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: wp("25%"),
  },
  version: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 1,
    // bottom: 0,
  },
  versionText: {
    fontWeight: "bold",
    fontSize: 12,
  },
 // bottomButton: {
    
  //  justifyContent: 'center',
  //  alignItems: 'center',
  //  backgroundColor: "#1573d6",
 //   borderRadius: 20,
    
  //  marginTop: 3,
 //   paddingVertical: 10,
  //  paddingHorizontal: 12,
  //  width: wp("25%"),
//  },
  tabBar: {
    padding: 35,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: {
    flex: 2,
    backgroundColor: "#1573d6",
    borderBottomStartRadius: 60,
    borderBottomEndRadius: 60,
  },
  header0: {
    marginTop: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 3,
    marginTop: -35,
  },
  headerText0: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  headerText1: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
  headerText2: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -1,
  },
  cardText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 5,
  },
  option: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    margin: 15,
    height: hp("18%"),
    width: wp("34%"),
  },
  icon: {
    flexDirection: "row",
  },
});
