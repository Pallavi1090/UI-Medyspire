import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function homeScreen() {
  return (
    <ScrollView style={styles.main}>
      <View style={styles.list}> 
        <View style={styles.imageView}>
          <Image
            source={require("../assets/hospital.jpg")}
            style={styles.image}
          />
        </View>
        <View style={styles.imageText}>
          <Text style={styles.imageTextContentHeader}>Hospital Name</Text>
          <Text style={styles.imageTextContent}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Text>
        </View>
      </View>

      <View style={styles.list}>
        <View style={styles.imageView}>
          <Image
            source={require("../assets/hospital.jpg")}
            style={styles.image}
          />
        </View>
        <View style={styles.imageText}>
          <Text style={styles.imageTextContentHeader}>Hospital Name</Text>
          <Text style={styles.imageTextContent}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Text>
        </View>
      </View>

      <View style={styles.list}>
        <View style={styles.imageView}>
          <Image
            source={require("../assets/hospital.jpg")}
            style={styles.image}
          />
        </View>
        <View style={styles.imageText}>
          <Text style={styles.imageTextContentHeader}>Hospital Name</Text>
          <Text style={styles.imageTextContent}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Text>
        </View>
      </View>

      <View style={styles.list}>
        <View style={styles.imageView}>
          <Image
            source={require("../assets/hospital.jpg")}
            style={styles.image}
          />
        </View>
        <View style={styles.imageText}>
          <Text style={styles.imageTextContentHeader}>Hospital Name</Text>
          <Text style={styles.imageTextContent}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Text>
        </View>
      </View>

      <View style={styles.list}>
        <View style={styles.imageView}>
          <Image
            source={require("../assets/hospital.jpg")}
            style={styles.image}
          />
        </View>
        <View style={styles.imageText}>
          <Text style={styles.imageTextContentHeader}>Hospital Name</Text>
          <Text style={styles.imageTextContent}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  list: {
    height: hp("20%"),
    width: wp("90%"),
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    borderWidth: 0.5,
    borderColor: "#dddddd",
    flexDirection: "row",
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
  },
  imageView: {
    flex: 1,
  },
  imageText: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 10,
  },
  imageTextContentHeader: {
    fontSize: 20,
    fontWeight: "bold",
  },
  imageTextContent: {
    fontSize: 15,
    fontWeight: "300",
  },
});
