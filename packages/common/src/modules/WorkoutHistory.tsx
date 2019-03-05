import React, { useContext } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { observer } from "mobx-react-lite";
import { RouteComponentProps } from "react-router";

import { RootStoreContext } from "../stores/RootStore";
import { HistoryCard } from "../ui/HistoryCard";
import { CurrentExercise } from "../stores/WorkoutStore";

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
    <View>
      <Text>Workout History Page</Text>
      <Button
        title="create workout"
        onPress={() => {
          rootStore.workoutStore.currentExercises.push(
            {
              exercise: "squat",
              numSets: 5,
              reps: 5,
              sets: ["", "", "", "", ""],
              weight: 260
            },

            {
              exercise: "Bench Press",
              numSets: 5,
              reps: 5,
              sets: ["", "", "", "", ""],
              weight: 200
            },
            {
              exercise: "Deadlift",
              numSets: 1,
              reps: 5,
              sets: ["5", "X", "X", "X", "5"],
              weight: 360
            }
          );
          history.push("/current-workout");
        }}
      />

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
    </View>
  );
});

const styles = StyleSheet.create({
  row: {
    flexDirection: "row"
  },
  cardContainer: {
    flex: 1,
    margin: 10
  }
});
