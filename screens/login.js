//Log In

import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Icon3 from "react-native-vector-icons/MaterialCommunityIcons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as Animatable from "react-native-animatable";

const loginScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    password: "",
    secureTextEntry: true,
  });

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = (val) => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <Animatable.View style={styles.header} animation="fadeInDownBig">
        
        <Image
            source={require("../assets/logo3.png")}
            style={styles.logo } 
          />
        
      </Animatable.View>

      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <View style={styles.input}>
          <View style={styles.search}>
            <Icon style={styles.icon} name="md-person" size={23} />
            <TextInput
              style={styles.textInput}
              selectTextOnFocus={false}
              placeholder="Email or Phone Number"
            />
          </View>
          <View style={styles.search}>
            <Icon3 style={styles.icon} name="lock" size={23} />
            <TextInput
              style={styles.textInput}
              secureTextEntry={data.secureTextEntry ? true : false}
              placeholder="Password"
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Icon3 name="eye-off" size={23} color="#4a4a4a" />
              ) : (
                <Icon3 name="eye" size={23} color="#4a4a4a" />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.forgot}>
            <TouchableOpacity
              onPress={() => navigation.navigate("forgotPassword")}
            >
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.button1}>
          <TouchableOpacity
            style={styles.buttonDesign}
            onPress={() => navigation.navigate("dashboard")}
          >
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonDesign}
            onPress={() => navigation.navigate("signup")}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default loginScreen;

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
  },
  headerText1: {
    color: "#fff",
    fontSize: 35,
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
  forgot: {
    marginLeft: 30,
    marginBottom: 10,
  },
  forgotText: {
    fontSize: 13,
    fontWeight: "bold",
  },
  logo: {
    width: 200,
    height: 200,
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
});
