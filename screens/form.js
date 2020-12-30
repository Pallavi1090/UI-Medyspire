//Member Registration

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RadioButton } from "react-native-paper";
import { Picker } from "@react-native-community/picker";
import CheckBox from "@react-native-community/checkbox";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
import { Appbar } from "react-native-paper";
import Modal from "react-native-modal";

const form = ({ navigation }) => {
  const [checked, setChecked] = useState("first");
  const [toggleCheckBox, setToggleCheckBox] = useState(true);
  const [empDetails, setEmpDetails] = useState("a");
  const [selectedValue, setSelectedValue] = useState("d");
  const [martialStatus, setMartialStatus] = useState("h");
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  bs = React.createRef();
  fall = new Animated.Value(1);

  renderInner = () => (
    <View style={styles.panel}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
      </View>
      <TouchableOpacity style={styles.panelButton}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bs.current.snapTo(1)}
      >
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  renderHeader = () => (
    <View style={styles.header0}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header10}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content
          title="Member Registration"
          titleStyle={styles.header10Text}
        />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
      <ScrollView>
        <View>
          <TouchableOpacity
            style={styles.person}
            onPress={() => bs.current.snapTo(0)}
          >
            <View style={styles.iconWrapper}>
              <MaterialCommunityIcons
                name="camera-plus"
                size={35}
                color="#fff"
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.inputs}>
          <Text style={styles.text}>*Full Name:</Text>
          <TextInput style={styles.textInput} placeholder="e.g. Rahul Sharma" />
        </View>
        <View style={styles.inputs}>
          <Text style={styles.text}>*DOB:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="dd-mm-yyyy"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputs}>
          <Text style={styles.text}>*Father/Husband Name:</Text>
          <TextInput style={styles.textInput} placeholder="e.g. Rahul Sharma" />
        </View>
        <View style={styles.inputs}>
          <Text style={styles.text}>*Gender:</Text>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "row" }}>
              <RadioButton
                value="Male"
                status={checked === "Male" ? "checked" : "unchecked"}
                onPress={() => setChecked("Male")}
              />
              <Text style={{ margin: 10, marginRight: 40 }}>Male</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <RadioButton
                value="Female"
                status={checked === "Female" ? "checked" : "unchecked"}
                onPress={() => setChecked("Female")}
              />
              <Text style={{ margin: 10 }}>Female</Text>
            </View>
          </View>
        </View>
        <View style={styles.inputs}>
          <Text style={styles.text}>*Address: </Text>
          <TextInput
            style={styles.textAreaInput}
            multiline={true}
            numberOfLines={8}
            placeholder="Address"
          />
        </View>
        <View style={styles.inputs}>
          <Text style={styles.text}>*Area:</Text>
          <TextInput style={styles.textInput} placeholder="e.g. Mysore" />
        </View>
        <View style={styles.inputs}>
          <Text style={styles.text}>*Pincode:</Text>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            placeholder="e.g. 570001"
          />
        </View>
        <View style={styles.inputs}>
          <Text style={styles.text}>*Mobile Number:</Text>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            placeholder="e.g. +91 7032647558"
          />
        </View>
        <View style={styles.inputs}>
          <Text style={styles.text}>Alternate Mobile Number:</Text>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            placeholder="e.g. +91 7032647558"
          />
        </View>
        <View style={styles.inputs}>
          <Text style={styles.text}>*Employement Details:</Text>
          <View style={styles.picker}>
            <Picker
              style={styles.dropDown}
              selectedValue={empDetails}
              onValueChange={(itemValue) => setEmpDetails(itemValue)}
            >
              <Picker.Item label="A" value="a" />
              <Picker.Item label="B" value="b" />
              <Picker.Item label="C" value="c" />
            </Picker>
          </View>
        </View>
        <View style={styles.inputs}>
          <Text style={styles.text}>*Annual Income:</Text>
          <View style={styles.picker}>
            <Picker
              style={styles.dropDown}
              selectedValue={selectedValue}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="< 1 Lakh" value="d" />
              <Picker.Item label="1 Lakh - 5 Lakh" value="e" />
              <Picker.Item label="5 Lakh - 10 Lakh" value="f" />
              <Picker.Item label="> 10 Lakh" value="g" />
            </Picker>
          </View>
        </View>
        <View style={styles.inputs}>
          <Text style={styles.text}>Email ID:</Text>
          <TextInput
            style={styles.textInput}
            keyboardType="email-address"
            placeholder="e.g. xyz@gmail.com"
          />
        </View>
        <View style={styles.inputs}>
          <Text style={styles.text}>*Martial Status:</Text>
          <View style={styles.picker}>
            <Picker
              style={styles.dropDown}
              selectedValue={martialStatus}
              onValueChange={(itemValue) => setMartialStatus(itemValue)}
            >
              <Picker.Item label="Single" value="h" />
              <Picker.Item label="Married" value="i" />
            </Picker>
          </View>
        </View>
        <View style={styles.inputs}>
          <Text style={styles.text}>*Photo:</Text>
          <TouchableOpacity
            style={styles.appButtonContainer}
            onPress={() => bs.current.snapTo(0)}
          >
            <Text style={styles.appButtonText}>Choose a Photo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.check}>
          <CheckBox
            disabled={false}
            value={!toggleCheckBox}
            onValueChange={() => setToggleCheckBox(!toggleCheckBox)}
          />
          <Text style={{ ...styles.text, fontWeight: "normal" }}>
            I agree to the{" "}
          </Text>
          <Text style={styles.text} onPress={toggleModal}>
            Terms and Condtitions
          </Text>
        </View>

        <Modal isVisible={isModalVisible}>
          <View style={styles.container}>
            <Appbar style={styles.header10}>
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
              <View style={styles.modalSection}>
                <Text style={styles.modalHeaderText}>
                  Intellectual Property Rights
                </Text>
                <Text style={styles.modalText}>
                  Other than the content you own, under these Terms, Company
                  Name and/or its licensors own all the intellectual property
                  rights and materials contained in this Website. You are
                  granted limited license only for purposes of viewing the
                  material contained on this Website.
                </Text>
              </View>
              <View style={styles.modalSection}>
                <Text style={styles.modalHeaderText}>
                  Intellectual Property Rights
                </Text>
                <Text style={styles.modalText}>
                  Other than the content you own, under these Terms, Company
                  Name and/or its licensors own all the intellectual property
                  rights and materials contained in this Website. You are
                  granted limited license only for purposes of viewing the
                  material contained on this Website.
                </Text>
              </View>
              <View style={styles.modalSection}>
                <Text style={styles.modalHeaderText}>
                  Intellectual Property Rights
                </Text>
                <Text style={styles.modalText}>
                  Other than the content you own, under these Terms, Company
                  Name and/or its licensors own all the intellectual property
                  rights and materials contained in this Website. You are
                  granted limited license only for purposes of viewing the
                  material contained on this Website.
                </Text>
              </View>
              <View style={styles.modalSection}>
                <Text style={styles.modalHeaderText}>
                  Intellectual Property Rights
                </Text>
                <Text style={styles.modalText}>
                  Other than the content you own, under these Terms, Company
                  Name and/or its licensors own all the intellectual property
                  rights and materials contained in this Website. You are
                  granted limited license only for purposes of viewing the
                  material contained on this Website.
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

        <View style={styles.end}>
          <Text style={styles.text}>*Required Fields</Text>
          <TouchableOpacity
            style={styles.appButtonContainer}
            disabled={toggleCheckBox}
          >
            <Text style={styles.appButtonText}>Payment</Text>
          </TouchableOpacity>
        </View>
        <Text></Text>
        <StatusBar style="auto" />
      </ScrollView>
      <BottomSheet
        ref={bs}
        snapPoints={[290, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
        enabledContentTapInteraction={false}
      />
    </View>
  );
};

export default form;

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
  inputs: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
    margin: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
  textInput: {
    borderBottomWidth: 2,
    width: wp("50%"),
    height: hp("4%"),
  },
  textAreaInput: {
    borderBottomWidth: 2,
    width: wp("50%"),
    height: hp("20%"),
  },
  dropDown: {
    width: wp("50%"),
    height: hp("4%"),
  },
  picker: {
    width: wp("50%"),
    height: hp("4%"),
    borderBottomWidth: 2,
  },
  check: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 0.5,
    padding: 5,
    margin: 5,
  },
  panel: {
    padding: 20,
    backgroundColor: "#f5f5f5",
    paddingTop: 20,
  },
  header0: {
    backgroundColor: "#f5f5f5",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: wp("10%"),
    height: hp("1%"),
    borderRadius: 4,
    backgroundColor: "#00000040",
  },
  panelTitle: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 27,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#1573d6",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#fff",
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
    textTransform: "uppercase",
    color: "#fff",
  },
  end: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  modalContent: {
    backgroundColor: "white",
  },
  modalHeaderText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  modalText: {
    fontSize: 16.5,
  },
  modalSection: {
    marginBottom: 10,
    justifyContent: "flex-start",
    padding: 10,
  },
  modalButton: {
    flex: 1,
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    marginRight: 10,
    width: wp("15%"),
  },
  person: {
    alignSelf: "center",
  },
  iconWrapper: {
    borderWidth: 5,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: wp("25%"),
    height: wp("25%"),
    backgroundColor: "#1573d6",
    borderRadius: wp("25%") / 2,
  },
});
