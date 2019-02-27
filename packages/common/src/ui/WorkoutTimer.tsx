import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  onXPress: () => void;
}

export const WorkoutTimer: React.FC<Props> = ({ onXPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>Workout Timer</Text>
      <TouchableOpacity onPress={onXPress}>
        <Text style={styles.check}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: 50,
    width: "100%",
    backgroundColor: "#486550",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  timeText: {
    color: "#fff",
    fontSize: 18
  },
  check: {
    color: "#B2A1A1",
    fontSize: 30
  }
});
