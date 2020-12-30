//Settings page

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Appbar } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import Icon1 from "react-native-vector-icons/MaterialIcons";

const settings = ({ navigation }) => {
  const [isAutoLock, setIsAutoLock] = useState(false);
  const toggleSwitch0 = () => setIsAutoLock((previousState) => !previousState);

  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleSwitch1 = () => setIsDarkTheme((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Settings" titleStyle={styles.header10Text} />
      </Appbar.Header>
      <ScrollView>
        <View style={styles.search}>
          <Icon style={styles.icon} name="md-search" size={23} />
          <TextInput
            style={styles.textInput}
            placeholder="Search in settings"
          />
        </View>

        <View style={styles.content}>
          <View style={styles.settingSection}>
            <Text style={styles.sectionHeader}>Recommended Settings</Text>
            <View style={styles.settingItem}>
              <Text style={styles.settingText}>Auto-lock security</Text>
              <Switch
                onValueChange={toggleSwitch0}
                value={isAutoLock}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isAutoLock ? "#1573d6" : "#f4f3f4"}
              />
            </View>
            <View style={styles.settingItem}>
              <TouchableOpacity style={styles.touchableSetting}>
                <Text style={styles.settingText}>Notifcations</Text>
                <Icon1 name="navigate-next" size={23} />
              </TouchableOpacity>
            </View>
            <View style={styles.settingItem}>
              <TouchableOpacity style={styles.touchableSetting}>
                <Text style={styles.settingText}>Sound</Text>
                <Icon1 name="navigate-next" size={23} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.settingSection}>
            <Text style={styles.sectionHeader}>Payment Settings</Text>
            <View style={styles.settingItem}>
              <TouchableOpacity style={styles.touchableSetting}>
                <Text style={styles.settingText}>Manage Payment Options</Text>
                <Icon1 name="navigate-next" size={23} />
              </TouchableOpacity>
            </View>
            <View style={styles.settingItem}>
              <TouchableOpacity style={styles.touchableSetting}>
                <Text style={styles.settingText}>Manage Card Details</Text>
                <Icon1 name="navigate-next" size={23} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.settingSection}>
            <Text style={styles.sectionHeader}>System Settings</Text>
            <View style={styles.settingItem}>
              <TouchableOpacity style={styles.touchableSetting}>
                <Text style={styles.settingText}>Language</Text>
                <Icon1 name="navigate-next" size={23} />
              </TouchableOpacity>
            </View>
            <View style={styles.settingItem}>
              <TouchableOpacity style={styles.touchableSetting}>
                <Text style={styles.settingText}>Data Transfer</Text>
                <Icon1 name="navigate-next" size={23} />
              </TouchableOpacity>
            </View>
            <View style={styles.settingItem}>
              <TouchableOpacity style={styles.touchableSetting}>
                <Text style={styles.settingText}>Back up & Restore</Text>
                <Icon1 name="navigate-next" size={23} />
              </TouchableOpacity>
            </View>
            <View style={styles.settingItem}>
              <Text style={styles.settingText}>Dark Theme</Text>
              <Switch
                onValueChange={toggleSwitch1}
                value={isDarkTheme}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isDarkTheme ? "#1573d6" : "#f4f3f4"}
              />
            </View>
          </View>

          <View style={styles.settingSection}>
            <Text style={styles.sectionHeader}>Privacy Settings</Text>
            <View style={styles.settingItem}>
              <TouchableOpacity style={styles.touchableSetting}>
                <Text style={styles.settingText}>User Agreement</Text>
                <Icon1 name="navigate-next" size={23} />
              </TouchableOpacity>
            </View>
            <View style={styles.settingItem}>
              <TouchableOpacity style={styles.touchableSetting}>
                <Text style={styles.settingText}>Privacy</Text>
                <Icon1 name="navigate-next" size={23} />
              </TouchableOpacity>
            </View>
            <View style={styles.settingItem}>
              <TouchableOpacity style={styles.touchableSetting}>
                <Text style={styles.settingText}>About</Text>
                <Icon1 name="navigate-next" size={23} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#1573d6",
  },
  search: {
    backgroundColor: "#dbdbdb",
    borderRadius: 20,
    margin: 20,
    padding: 1,
    flexDirection: "row",
  },
  icon: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 3,
  },
  content: {
    flex: 1,
  },
  settingSection: {
    margin: 10,
  },
  sectionHeader: {
    fontSize: 27,
    fontWeight: "bold",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 7,
  },
  settingText: {
    fontSize: 17,
  },
  touchableSetting: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  textInput: {
    width: wp("80%"),
    height: hp("4%"),
  },
});
