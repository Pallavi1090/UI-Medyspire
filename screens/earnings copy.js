//My Earnings

import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Appbar } from "react-native-paper";

const earnings = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header10}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="My Earnings" titleStyle={styles.header10Text} />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
      <View style={styles.content}>
        <View style={{ marginBottom: 55, marginTop: -60 }}>
          <MaterialCommunityIcons
            name="cash-multiple"
            size={80}
            color="#1573d6"
          />
        </View>
        <View style={styles.details}>
          <View style={styles.detailsSection}>
            <Text style={styles.detailsText}>ACCOUNTS: </Text>
            <TextInput
              style={styles.detailsContent}
              editable={false}
              placeholder="5"
            />
          </View>
          <View style={styles.detailsSection}>
            <Text style={styles.detailsText}>PRICE: </Text>
            <TextInput
              style={styles.detailsContent}
              editable={false}
              placeholder="20000"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default earnings;

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
