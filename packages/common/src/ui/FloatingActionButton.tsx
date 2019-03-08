import * as React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface Props {}

export const FloatingActionButton: React.FC<Props> = () => {
  return (
    <TouchableOpacity style={styles.root}>
      <Text style={styles.rootText}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    width: 40,
    height: 40,
    backgroundColor: "pink",
    position: "absolute",
    bottom: 10,
    right: 10
  },
  rootText: {
    fontSize: 18
  }
});
