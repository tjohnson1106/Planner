import * as React from "react";
import { View, StyleSheet } from "react-native";

interface Props {}

export const Card: React.FC<Props> = ({ children }) => {
  return <View>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 3,
    flexDirection: "column",
    padding: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    // android
    elevation: 5
  }
});
