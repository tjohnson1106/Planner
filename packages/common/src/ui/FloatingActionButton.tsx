import * as React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface Props {
  onPress: () => void;
}

export const FloatingActionButton: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.root}>
      <Text style={styles.rootText}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    backgroundColor: "pink",
    position: "absolute",
    bottom: 10,
    right: 10,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    // android
    elevation: 5
  },
  rootText: {
    fontSize: 18,
    marginLeft: 2,
    marginRight: 2
  }
});
