import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function enrollScreen() {
  return (
    <View style={styles.main}>
      <Text>Enroll</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
