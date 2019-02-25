import * as React from "react";
import { View, StyleSheet } from "react-native";

import { WorkoutCard } from "../ui/WorkoutCard";

interface Props {}

export const CurrentWorkout: React.FC<Props> = () => {
  return (
    <View style={styles.root}>
      <WorkoutCard
        exercise="Squat"
        repsAndWeight="5X5 260"
        sets={["5", "5", "5", "", "X"]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#fafafa",
    margin: 10
  }
});
