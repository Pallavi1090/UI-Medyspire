//Terms and Conditions

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Icon1 from "react-native-vector-icons/MaterialIcons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header0}>
          <Image
            source={require("../assets/medylifeline.png")}
            style={styles.image}
          />
        </View>
        <ScrollView style={styles.modalContent}>
          <View style={styles.heading}>
            <Text style={{ ...styles.underline, ...styles.headingText }}>
              Terms and Condition
            </Text>
          </View>

          <View style={styles.modalSection}>
            <Text style={styles.modalHeaderText}>Introduction</Text>
            <Text style={styles.modalText}>
              These Website Standard Terms and Conditions written on this
              webpage shall manage your use of our website, Webiste Name
              accessible at Website.com. These Terms will be applied fully and
              affect to your use of this Website. By using this Website, you
              agreed to accept all terms and conditions written in here. You
              must not use this Website if you disagree with any of these
              Website Standard Terms and Conditions. Minors or people below 18
              years old are not allowed to use this Website.
            </Text>
          </View>
          <View style={styles.modalSection}>
            <Text style={styles.modalHeaderText}>
              Intellectual Property Rights
            </Text>
            <Text style={styles.modalText}>
              Other than the content you own, under these Terms, Company Name
              and/or its licensors own all the intellectual property rights and
              materials contained in this Website. You are granted limited
              license only for purposes of viewing the material contained on
              this Website.
            </Text>
          </View>
          <View style={styles.modalSection}>
            <Text style={styles.modalHeaderText}>
              Intellectual Property Rights
            </Text>
            <Text style={styles.modalText}>
              Other than the content you own, under these Terms, Company Name
              and/or its licensors own all the intellectual property rights and
              materials contained in this Website. You are granted limited
              license only for purposes of viewing the material contained on
              this Website.
            </Text>
          </View>
          <View style={styles.modalSection}>
            <Text style={styles.modalHeaderText}>
              Intellectual Property Rights
            </Text>
            <Text style={styles.modalText}>
              Other than the content you own, under these Terms, Company Name
              and/or its licensors own all the intellectual property rights and
              materials contained in this Website. You are granted limited
              license only for purposes of viewing the material contained on
              this Website.
            </Text>
          </View>
          <View style={styles.modalSection}>
            <Text style={styles.modalHeaderText}>
              Intellectual Property Rights
            </Text>
            <Text style={styles.modalText}>
              Other than the content you own, under these Terms, Company Name
              and/or its licensors own all the intellectual property rights and
              materials contained in this Website. You are granted limited
              license only for purposes of viewing the material contained on
              this Website.
            </Text>
          </View>
          <View style={styles.footerImage}>
            <Image source={require("../assets/termsandcond.png")} />
          </View>
          <View style={styles.footerText}>
            <Icon1 name="phone" size={15} />
            <Text>18001239975</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
  },
  header0: {
    // flex: 1,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    resizeMode: "cover",
  },
  heading: {
    padding: 10,
  },
  underline: {
    textDecorationLine: "underline",
  },
  headingText: {
    fontSize: 23,
    fontWeight: "bold",
  },
  modalContent: {
    backgroundColor: "white",
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
  footerImage: {
    backgroundColor: "#1573d6",
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 5,
  },
});


