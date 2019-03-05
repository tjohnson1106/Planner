import * as React from "react";
import { View, StyleSheet, Button, ScrollView } from "react-native";
import { observer } from "mobx-react-lite";
import dayjs from "dayjs";

import { WorkoutCard } from "../ui/WorkoutCard";
import { RootStoreContext } from "../stores/RootStore";
import { WorkoutTimer } from "../ui/WorkoutTimer";
import { RouteComponentProps } from "react-router";

interface Props
  extends RouteComponentProps<{
    year?: string;
    month?: string;
    day?: string;
  }> {}

export const CurrentWorkout: React.FC<Props> = observer(
  ({
    history,
    match: {
      params: { day, month, year }
    }
  }) => {
    const rootStore = React.useContext(RootStoreContext);
    React.useEffect(() => {
      return () => {
        rootStore.workoutTimerStore.stopTimer();
      };
    }, []);

    const isCurrentWorkout = !year && !month && !day;
    const dateKey = `${year}-${month}-${day}`;

    return (
      <View style={styles.root}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="always"
        >
          {(isCurrentWorkout
            ? rootStore.workoutStore.currentExercises
            : rootStore.workoutStore.history[dateKey]
          ).map((e) => {
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
          <Button
            title="SAVE"
            onPress={() => {
              // only if it is a current workout does it need to be saved in history
              if (isCurrentWorkout) {
                rootStore.workoutStore.history[dayjs().format("YYYY-MM-DD")] =
                  rootStore.workoutStore.currentExercises;
                rootStore.workoutStore.currentExercises = [];
              }

              history.push("/");
            }}
          />
        </ScrollView>
        {rootStore.workoutTimerStore.isRunning ? (
          <WorkoutTimer
            currentTime={rootStore.workoutTimerStore.display}
            onXPress={() => rootStore.workoutTimerStore.stopTimer()}
          />
        ) : null}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fafafa"
  },
  scrollContainer: {
    padding: 10,
    marginBottom: 50
  }
});
