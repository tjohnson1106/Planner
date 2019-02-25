import * as React from "react";
import { View, StyleSheet } from "react-native";
import { observer } from "mobx-react-lite";

import { WorkoutCard } from "../ui/WorkoutCard";
import { RootStoreContext } from "../stores/RootStore";

interface Props {}

export const CurrentWorkout: React.FC<Props> = observer(() => {
  const rootStore = React.useContext(RootStoreContext);

  return (
    <View style={styles.root}>
      {rootStore.workoutStore.currentExercises.map((e) => {
        return (
          <WorkoutCard
            key={e.exercise}
            exercise={e.exercise}
            repsAndWeight={`${e.numSets}X${e.reps} ${e.weight}`}
            sets={e.sets}
          />
        );
      })}
    </View>
  );
});

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#fafafa",
    margin: 10
  }
});
