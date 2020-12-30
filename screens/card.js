//ID Card + Terms and Conditions

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Icon1 from "react-native-vector-icons/MaterialIcons";
import { Appbar } from "react-native-paper";
import Modal from "react-native-modal";

const card = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header10}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      </Appbar.Header>
      <ScrollView>
        <View style={styles.content1}>
          <View style={styles.header}>
            <View style={styles.header0}>
              <Image
                source={require("../assets/medyspire1.png")}
                style={styles.image}
              />
            </View>
          </View>
        </View>
        <View style={styles.content2}>
          <View style={styles.footer}>
            <View>
              <TouchableOpacity style={styles.person}>
                <View style={styles.iconWrapper}>
                  {/* <Icon name="md-camera" size={40} color="#fff" /> */}
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.footerText}>
              <View style={styles.text}>
                <Text style={styles.mainText}>Shashidhara L.S</Text>
                <Text style={styles.mainText}>MEDID02902</Text>
              </View>
              <View style={styles.text}>
                <Text style={styles.bottomText}>Validity</Text>
                <Text style={styles.bottomText}>12-12-2021</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.content3}>
          <View style={styles.header}>
            <View style={styles.header0}>
              <Image
                source={require("../assets/medylifeline1.png")}
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
                  accessible at Website.com. These Terms will be applied fully
                  and affect to your use of this Website. By using this Website,
                  you agreed to accept all terms and conditions written in here.
                  You must not use this Website if you disagree with any of
                  these Website Standard Terms and Conditions. Minors or people
                  below 18 years old are not allowed to use this Website.
                </Text>
              </View>
              <View style={styles.modalButton1}>
                <TouchableOpacity
                  style={styles.appButtonContainer}
                  onPress={toggleModal}
                >
                  <Text style={styles.appButtonText}>
                    Agree and Continue
                  </Text>
                </TouchableOpacity>
              </View>

              <Modal isVisible={isModalVisible}>
                <View style={styles.container}>
                  <Appbar style={styles.modalHeader}>
                    <Appbar.BackAction onPress={toggleModal} />
                    <Appbar.Content
                      title="Terms and Conditions"
                      titleStyle={styles.header10Text}
                    />
                  </Appbar>
                  <ScrollView style={styles.modalContent}>
                    <View style={styles.modalSection}>
                      <Text style={styles.modalHeaderText}>Introduction</Text>
                      <Text style={styles.modalText}>
                        These Website Standard Terms and Conditions written on
                        this webpage shall manage your use of our website,
                        Webiste Name accessible at Website.com. These Terms will
                        be applied fully and affect to your use of this Website.
                        By using this Website, you agreed to accept all terms
                        and conditions written in here. You must not use this
                        Website if you disagree with any of these Website
                        Standard Terms and Conditions. Minors or people below 18
                        years old are not allowed to use this Website.
                      </Text>
                    </View>
                    <View style={styles.modalSection}>
                      <Text style={styles.modalHeaderText}>
                        Intellectual Property Rights
                      </Text>
                      <Text style={styles.modalText}>
                        Other than the content you own, under these Terms,
                        Company Name and/or its licensors own all the
                        intellectual property rights and materials contained in
                        this Website. You are granted limited license only for
                        purposes of viewing the material contained on this
                        Website.
                      </Text>
                    </View>
                    <View style={styles.modalSection}>
                      <Text style={styles.modalHeaderText}>
                        Intellectual Property Rights
                      </Text>
                      <Text style={styles.modalText}>
                        Other than the content you own, under these Terms,
                        Company Name and/or its licensors own all the
                        intellectual property rights and materials contained in
                        this Website. You are granted limited license only for
                        purposes of viewing the material contained on this
                        Website.
                      </Text>
                    </View>
                    <View style={styles.modalSection}>
                      <Text style={styles.modalHeaderText}>
                        Intellectual Property Rights
                      </Text>
                      <Text style={styles.modalText}>
                        Other than the content you own, under these Terms,
                        Company Name and/or its licensors own all the
                        intellectual property rights and materials contained in
                        this Website. You are granted limited license only for
                        purposes of viewing the material contained on this
                        Website.
                      </Text>
                    </View>
                    <View style={styles.modalSection}>
                      <Text style={styles.modalHeaderText}>
                        Intellectual Property Rights
                      </Text>
                      <Text style={styles.modalText}>
                        Other than the content you own, under these Terms,
                        Company Name and/or its licensors own all the
                        intellectual property rights and materials contained in
                        this Website. You are granted limited license only for
                        purposes of viewing the material contained on this
                        Website.
                      </Text>
                    </View>
                    <View style={styles.modalButton}>
                      <TouchableOpacity
                        style={styles.appButtonContainer}
                        onPress={toggleModal}
                      >
                        <Text style={styles.appButtonText}>Close</Text>
                      </TouchableOpacity>
                    </View>
                  </ScrollView>
                </View>
              </Modal>

              <View style={styles.footerImage}>
                <Image source={require("../assets/termsandcond.png")} />
              </View>
              <View style={styles.footerText1}>
                <Icon1 name="phone" size={15} />
                <Text>18001239975</Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 20,
  },
  header: {
    flex: 1,
  },
  footer: {
    flex: 1,
    backgroundColor: "#1573d6",
  },
  header0: {
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  header10: {
    backgroundColor: "#fff",
  },
  content1: {
    flex: 1,
    height: hp("100%") / 3,
  },
  content2: {
    flex: 1,
    height: hp("100%") / 3,
  },
  content3: {
    flex: 1,
    height: hp("63%"),
  },
  image: {
    resizeMode: "cover",
  },
  circle: {
    height: 220,
    width: 220,
    borderRadius: 220,
    borderWidth: 10,
    borderColor: "#fff",
    backgroundColor: "#1573d6",
  },
  person: {
    alignItems: "center",
    marginTop: -20,
  },
  text: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainText: {
    fontSize: 30,
    color: "#fff",
    marginBottom: 10,
  },
  bottomText: {
    fontSize: 14,
    color: "#fff",
    // marginBottom: 5,
  },
  footerSection: {
    // flexDirection: "row",
  },
  footerText: {
    flex: 1,
  },
  iconWrapper: {
    borderWidth: 5,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: wp("35%"),
    height: wp("35%"),
    backgroundColor: "#1573d6",
    borderRadius: wp("35%") / 2,
    marginTop: -wp("35%") / 3,
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
    justifyContent: "flex-start",
    padding: 10,
  },
  footerImage: {
    backgroundColor: "#1573d6",
    alignItems: "center",
    justifyContent: "center",
    // bottom: 0,
  },
  footerText1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 5,
  },
  moreText: {
    padding: 10,
  },
  button: {
    borderRadius: 20,
    justifyContent: "center",
    borderWidth: 1,
    width: wp("20%"),
    height: hp("5%"),
  },
  modalButton: {
    flex: 1,
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    marginRight: 10,
    width: "20%",
  },
  modalButton1: {
    padding: 10,
    marginRight: 10,
    width: wp("44%"),
  },
  appButtonContainer: {
    backgroundColor: "#1573d6",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  appButtonText: {
    fontWeight: "bold",
    alignSelf: "center",
    justifyContent: 'center',
    textTransform: "uppercase",
    color: "#fff",
  },
  modalHeader: {
    backgroundColor: "#1573d6",
  },
});
