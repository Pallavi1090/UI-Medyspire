//My Earnings

import React from "react";
import { StyleSheet, View } from "react-native";
import { Table, Row } from "react-native-table-component";
import { Appbar } from "react-native-paper";

const earnings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header10}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="My Earnings" titleStyle={styles.header10Text} />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
      <View style={styles.table}>
        <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Row
            data={["", "ACCOUNTS", "NAME", "PRICE"]}
            flexArr={[1, 4, 4, 4]}
            style={styles.head}
            textStyle={{ color: "#fff", fontWeight: "bold", margin: 10, fontSize: 17, }}
          />
          <Row
            data={["1", "5", "A", "20000"]}
            flexArr={[1, 4, 4, 4]}
            textStyle={{ margin: 10 }}
          />
          <Row
            data={["2", "10", "B", "30000"]}
            flexArr={[1, 4, 4, 4]}
            textStyle={{ margin: 10 }}
          />
          <Row
            data={["TOTAL", "50000"]}
            flexArr={[9, 4]}
            textStyle={{ margin: 10, fontWeight: "bold" }}
          />
        </Table>
      </View>
    </View>
  );
};

export default earnings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    height: 40,
    backgroundColor: "#1573d6",
  },
  table: {
    padding: 10,
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  header10: {
    backgroundColor: "#1573d6",
  },
  header10Text: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
