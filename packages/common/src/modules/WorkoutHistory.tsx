import React, { useContext } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { observer } from "mobx-react-lite";
import { RouteComponentProps } from "react-router";

import { RootStoreContext } from "../stores/RootStore";
import { HistoryCard } from "../ui/HistoryCard";
import { CurrentExercise } from "../stores/WorkoutStore";
import { FloatingActionButton } from "../ui/FloatingActionButton";

interface Props extends RouteComponentProps {}

export const WorkoutHistory: React.FC<Props> = observer(({ history }) => {
  const rootStore = useContext(RootStoreContext);

  // array of arrays
  const rows: Array<
    Array<{
      date: string;
      exercises: CurrentExercise[];
    }>
  > = [];
  Object.entries(rootStore.workoutStore.history).forEach(
    ([date, exercises], i) => {
      if (i % 3 === 0) {
        rows.push([
          {
            date,
            exercises
          }
        ]);
      } else {
        rows[rows.length - 1].push({ date, exercises });
      }
    }
  );

  return (
    <View style={styles.root}>
      <FlatList
        renderItem={({ item }) => (
          <View style={styles.row}>
            {item.map(({ date, exercises }) => (
              <View key={date} style={styles.cardContainer}>
                <HistoryCard
                  onPress={() => {
                    // split by /year/month/day
                    const parts = date.split("-");
                    history.push(
                      `/workout/${parts[0]}/${parts[1]}/${parts[2]}`
                    );
                  }}
                  header={date}
                  currentExercises={exercises}
                />
              </View>
            ))}

            {item.length < 3 ? <View style={styles.cardContainer} /> : null}
            {item.length < 2 ? <View style={styles.cardContainer} /> : null}
          </View>
        )}
        data={rows}
        //  keyExtractor should be array of dates: string
        keyExtractor={(item) => item.reduce((pv, cv) => pv + " " + cv.date, "")}
      />
      <FloatingActionButton
        onPress={() => {
          if (!rootStore.workoutStore.hasCurrentWorkout) {
            const {
              currentBarbellRow,
              currentBench,
              currentDeadLift,
              currentSquat,
              currentOverHeadPress
            } = rootStore.workoutStore;

            const emptySets = ["", "", "", "", ""];

            // temp hard code

            if (rootStore.workoutStore.lastWorkoutType === "b") {
              rootStore.workoutStore.currentExercises.push(
                {
                  exercise: "squat",
                  numSets: 5,
                  reps: 5,
                  sets: [...emptySets],
                  weight: currentSquat
                },

                {
                  exercise: "Bench Press",
                  numSets: 5,
                  reps: 5,
                  sets: [...emptySets],
                  weight: currentBench
                },
                {
                  exercise: "Deadlift",
                  numSets: 1,
                  reps: 5,
                  sets: ["", "X", "X", "X", "X"],
                  weight: currentDeadLift
                }
              );

              rootStore.workoutStore.currentSquat += 2.5;
              rootStore.workoutStore.currentBench += 2.5;
              rootStore.workoutStore.currentDeadLift += 2.5;
            } else {
            }

            rootStore.workoutStore.lastWorkoutType =
              rootStore.workoutStore.lastWorkoutType === "a" ? "b" : "a";
          }

          history.push("/current-workout");
        }}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  row: {
    flexDirection: "row"
  },
  root: {
    flex: 1
  },
  cardContainer: {
    flex: 1,
    margin: 10
  }
});
