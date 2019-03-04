import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { observer } from "mobx-react-lite";
import { RouteComponentProps } from "react-router";

import { RootStoreContext } from "../stores/RootStore";
import { HistoryCard } from "../ui/HistoryCard";

interface Props extends RouteComponentProps {}

export const WorkoutHistory: React.FC<Props> = observer(({ history }) => {
  const rootStore = useContext(RootStoreContext);
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
      {/* map through array of objects */}
      {Object.entries(rootStore.workoutStore.history).map(([dt, v]) => {
        return <HistoryCard key={dt} header={dt} currentExercises={v} />;
      })}
    </View>
  );
});
