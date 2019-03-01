import React from "react";
import { StyleSheet, View } from "react-native";

import { Routes } from "./Routes";

export const App = () => {
  return (
    <View style={styles.root}>
      <View style={styles.wrapper}>
        <Routes />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  },
  wrapper: {
    flex: 1,
    width: "100%",
    maxWidth: 425,
    backgroundColor: "#F5FCFF"
  }
});
