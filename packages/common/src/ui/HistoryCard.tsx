import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { CurrentExercise } from "../stores/WorkoutStore";
import { Card } from "./Card";

interface Props {
  header: string;
  currentExercises: CurrentExercise[];
  onPress: () => void;
}

const exerciseShortName = {
  squat: "SQ",
  Deadlift: "DL",
  "Bench Press": "BP",
  OverheadPress: "OP",
  "Barbell Row": "ROW"
};

export const HistoryCard: React.FC<Props> = ({
  header,
  currentExercises,
  onPress
}) => {
  return (
    <Card onPress={onPress}>
      <Text>{header}</Text>
      {currentExercises.map((ce) => {
        return (
          // need to specify type of key in array for most strict
          <Text key={ce.exercise}>
            {`${
              exerciseShortName[ce.exercise as keyof typeof exerciseShortName]
            } ${ce.numSets}X${ce.reps} ${ce.weight}`}
          </Text>
        );
      })}
    </Card>
  );
};
