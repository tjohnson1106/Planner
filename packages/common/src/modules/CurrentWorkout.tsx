import * as React from "react";
import { View, StyleSheet, Button } from "react-native";
import { observer } from "mobx-react-lite";

import { WorkoutCard } from "../ui/WorkoutCard";
import { RootStoreContext } from "../stores/RootStore";
import { WorkoutTimer } from "../ui/WorkoutTimer";

interface Props {}

export const CurrentWorkout: React.FC<Props> = observer(() => {
  const rootStore = React.useContext(RootStoreContext);
  React.useEffect(() => {
    return () => {
      rootStore.workoutTimerStore.stopTimer();
    };
  }, []);

  return (
    <View style={styles.root}>
      {rootStore.workoutStore.currentExercises.map((e) => {
        return (
          <WorkoutCard
            onSetPress={(setIndex) => {
              rootStore.workoutTimerStore.startTimer();
              const v = e.sets[setIndex];

              // really do not like this
              let newValue: string;

              if (v === "") {
                newValue = `${e.reps}`;
              } else if (v === "0") {
                newValue = "";
              } else {
                newValue = `${parseInt(v) - 1}`;
              }

              e.sets[setIndex] = newValue;
            }}
            key={e.exercise}
            exercise={e.exercise}
            repsAndWeight={`${e.numSets}X${e.reps} ${e.weight}`}
            sets={e.sets}
          />
        );
      })}
      <Button title="SAVE" onPress={() => {}} />
      {rootStore.workoutTimerStore.isRunning ? (
        <WorkoutTimer
          currentTime={rootStore.workoutTimerStore.display}
          onXPress={() => rootStore.workoutTimerStore.stopTimer()}
        />
      ) : null}
    </View>
  );
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fafafa",
    padding: 10
  }
});
