//Renew Page 2

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Icon1 from "react-native-vector-icons/MaterialIcons";
import { Appbar } from "react-native-paper";

const renew = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header10}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Renew" titleStyle={styles.header10Text} />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
      <View style={styles.content}>
        <View style={{ marginBottom: 55, marginTop: -60 }}>
          <Icon1 name="autorenew" size={80} color="#1573d6" />
        </View>
        <View style={styles.details}>
          <View style={styles.detailsSection}>
            <Text style={styles.detailsText}>MEMBER ID: </Text>
            <TextInput
              style={styles.detailsContent}
              editable={false}
              placeholder="Medid02902"
            />
          </View>
          <View style={styles.detailsSection}>
            <Text style={styles.detailsText}>EXPIRY DATE: </Text>
            <TextInput
              style={styles.detailsContent}
              editable={false}
              placeholder="12-12-2021"
            />
          </View>
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Pay and Renew</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default renew;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header10: {
    backgroundColor: "#1573d6",
  },
  header10Text: {
    fontSize: 25,
    fontWeight: "bold",
  },
  details: {
    padding: 20,
  },
  detailsSection: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    padding: 5,
  },
  detailsText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  detailsContent: {
    backgroundColor: "#e8e8e8",
    height: hp("3.5%"),
    width: wp("30%"),
    borderRadius: 7,
    fontWeight: "bold",
    paddingLeft: 10,
    fontSize: 17,
  },
  button: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: wp("44%"),
  },
  buttonContainer: {
    backgroundColor: "#1573d6",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
