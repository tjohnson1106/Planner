import * as React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  // possible undefined
  onPress?: () => void;
}

export const Card: React.FC<Props> = ({ children, onPress }) => {
  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} style={styles.card}>
        {children}
      </TouchableOpacity>
    );
  }

  return <View style={styles.card}>{children}</View>;
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
