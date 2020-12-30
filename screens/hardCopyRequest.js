//Hard Copy Request

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CheckBox from "@react-native-community/checkbox";
import { Appbar } from "react-native-paper";

const hardCopy = ({ navigation }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(true);

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content
          title="Hard Copy Request"
          titleStyle={styles.headerText}
        />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>

      <ScrollView>
        <View style={styles.heading}>
          <Text style={{ ...styles.underline, ...styles.headingText }}>
            Terms and Conditions
          </Text>
        </View>

        <View style={styles.modalSection}>
          <Text style={styles.modalHeaderText}>Introduction</Text>
          <Text style={styles.modalText}>
            These Website Standard Terms and Conditions written on this webpage
            shall manage your use of our website, Webiste Name accessible at
            Website.com. These Terms will be applied fully and affect to your
            use of this Website. By using this Website, you agreed to accept all
            terms and conditions written in here. You must not use this Website
            if you disagree with any of these Website Standard Terms and
            Conditions. Minors or people below 18 years old are not allowed to
            use this Website.
          </Text>
        </View>
        <View style={styles.modalSection}>
          <Text style={styles.modalHeaderText}>
            Intellectual Property Rights
          </Text>
          <Text style={styles.modalText}>
            Other than the content you own, under these Terms, Company Name
            and/or its licensors own all the intellectual property rights and
            materials contained in this Website. You are granted limited license
            only for purposes of viewing the material contained on this Website.
          </Text>
        </View>
        <View style={styles.modalSection}>
          <Text style={styles.modalHeaderText}>
            Intellectual Property Rights
          </Text>
          <Text style={styles.modalText}>
            Other than the content you own, under these Terms, Company Name
            and/or its licensors own all the intellectual property rights and
            materials contained in this Website. You are granted limited license
            only for purposes of viewing the material contained on this Website.
          </Text>
        </View>
        <View style={styles.modalSection}>
          <Text style={styles.modalHeaderText}>
            Intellectual Property Rights
          </Text>
          <Text style={styles.modalText}>
            Other than the content you own, under these Terms, Company Name
            and/or its licensors own all the intellectual property rights and
            materials contained in this Website. You are granted limited license
            only for purposes of viewing the material contained on this Website.
          </Text>
        </View>
        <View style={styles.modalSection}>
          <Text style={styles.modalHeaderText}>
            Intellectual Property Rights
          </Text>
          <Text style={styles.modalText}>
            Other than the content you own, under these Terms, Company Name
            and/or its licensors own all the intellectual property rights and
            materials contained in this Website. You are granted limited license
            only for purposes of viewing the material contained on this Website.
          </Text>
        </View>

        <View style={styles.check}>
          <CheckBox
            value={!toggleCheckBox}
            onValueChange={() => setToggleCheckBox(!toggleCheckBox)}
          />
          <Text style={styles.text}>I agree to the Terms and Conditions</Text>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.buttonContainer}
            disabled={toggleCheckBox}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default hardCopy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#1573d6",
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  heading: {
    padding: 10,
  },
  underline: {
    textDecorationLine: "underline",
  },
  headingText: {
    fontSize: 27,
    fontWeight: "bold",
  },
  modalHeaderText: {
    fontSize: 25,
    fontWeight: "600",
  },
  modalText: {
    fontSize: 15,
  },
  modalSection: {
    marginBottom: 10,
    justifyContent: "flex-start",
    padding: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
  check: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    padding: 5,
    margin: 5,
  },
  button: {
    marginRight: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
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
