import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/Ionicons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header0}>
          <Image
            source={require("../assets/medyspire.png")}
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <View>
          <TouchableOpacity style={styles.person}>
            <View style={styles.iconWrapper}>
              <Icon name='md-camera' size={40} color='#fff' />
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
  },
  footer: {
    flex: 1,
    backgroundColor: "#1573d6",
  },
  header0: {
    marginTop: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    resizeMode: "cover",
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
    fontSize: 35,
    color: "#fff",
    marginBottom: 10,
  },
  bottomText: {
    fontSize: 15,
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
    borderWidth:5,
    borderColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    width: wp('40%'),
    height: wp('40%'),
    backgroundColor:'#1573d6',
    borderRadius: wp('40%')/2,
    marginTop: -wp('40%')/3,
  }
});
