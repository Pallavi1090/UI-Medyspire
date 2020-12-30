//Log In

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Animated from "react-native-reanimated";
import * as Animatable from "react-native-animatable";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import dashboard from "./dashboard";

const forgotPassword = ({ navigation }) => {
  const [enable, setEnable] = React.useState(false);

  const otpText = (val) => {
    if (val.trim().length == 6) {
      setEnable(true);
    } else {
      setEnable(false);
    }
  };

  const [data, setData] = React.useState({
    password: "",
    confirm_password: "",
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = (val) => {
    setData({
      ...data,
      confirm_password: val,
    });
  };

  const updateSecureTextEntry = (val) => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = (val) => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
	};
	
	const validatePassword = (password, confirm_password) => {
    if(password != confirm_password) {
      console.log('not match');
    } else {
      navigation.navigate("dashboard");
    }
  };

  bs = React.createRef();
  fall = new Animated.Value(1);

  return (
    <View style={styles.container}>
      <Animatable.View style={styles.header} animation="fadeInDownBig">
        <View style={styles.header0}>
          <Text style={styles.headerText0}>Reset Password</Text>
          {/* <Text style={styles.headerText1}>Register Now</Text> */}
        </View>
      </Animatable.View>

      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <View style={styles.input}>
          <View style={styles.search}>
            <MaterialCommunityIcons
              style={styles.icon}
              name="chat-processing"
              size={23}
            />
            <TextInput
              style={styles.textInput}
              selectTextOnFocus={false}
              placeholder="Enter OTP sent to your phone number"
              keyboardType="numeric"
              onChangeText={(val) => otpText(val)}
            />
          </View>
          <View style={styles.search}>
            <MaterialCommunityIcons style={styles.icon} name="lock" size={23} />
            <TextInput
              style={styles.textInput}
              secureTextEntry={data.secureTextEntry ? true : false}
              editable={enable}
              placeholder="New Password"
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <MaterialCommunityIcons
                  name="eye-off"
                  size={23}
                  color="#4a4a4a"
                />
              ) : (
                <MaterialCommunityIcons name="eye" size={23} color="#4a4a4a" />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.search}>
            <MaterialCommunityIcons style={styles.icon} name="lock" size={23} />
            <TextInput
              style={styles.textInput}
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              editable={enable}
              placeholder="Confirm New Password"
              onChangeText={(val) => handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {data.confirm_secureTextEntry ? (
                <MaterialCommunityIcons
                  name="eye-off"
                  size={23}
                  color="#4a4a4a"
                />
              ) : (
                <MaterialCommunityIcons name="eye" size={23} color="#4a4a4a" />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.button1}>
          <TouchableOpacity
            style={styles.buttonDesign}
            disabled={!enable}
            onPress={(password, confirm_password) => validatePassword(password, confirm_password)}
          >
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default forgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    padding: 35,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: {
    flex: 4,
    backgroundColor: "#1573d6",
    borderBottomStartRadius: 60,
    borderBottomEndRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  header0: {
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 5,
  },
  headerText0: {
    color: "#fff",
    fontSize: 50,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 5,
  },
  headerText1: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  search: {
    // backgroundColor: "#dbdbdb",
    borderRadius: 20,
    margin: 20,
    padding: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomWidth: 2,
  },
  icon: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 3,
  },
  textInput: {
    padding: 7,
    // backgroundColor: '#f5f5f5',
    width: wp("72%"),
    height: hp("4.5%"),
  },
  input: {
    marginTop: 25,
    marginBottom: 25,
  },
  button1: {
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  buttonDesign: {
    backgroundColor: "#1573d6",
    borderRadius: 25,
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: wp("30%"),
  },
  buttonText: {
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 20,
    textTransform: "uppercase",
    color: "#fff",
  },
  button2: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonIcon: {
    alignSelf: "center",
    textTransform: "uppercase",
  },
  panel: {
    padding: 20,
    backgroundColor: "#f5f5f5",
    paddingTop: 20,
    height: hp("60%"),
  },
  header1: {
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
    marginBottom: 20,
    fontSize: 30,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#1573d6",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textTransform: "uppercase",
  },
  panelText: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 60,
  },
  otpSection: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 60,
  },
  otpInput: {
    height: hp("7%"),
    width: wp("7%"),
    backgroundColor: "#bdbdbd",
    textAlign: "center",
  },
});
