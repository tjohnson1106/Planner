import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { CurrentExercise } from "../stores/WorkoutStore";
import { Card } from "./Card";

interface Props {
  header: string;
  currentExercises: CurrentExercise[];
}

const exerciseShortName = {
  squat: "SQ",
  Deadlift: "DL",
  "Bench Press": "BP",
  OverheadPress: "OP",
  "Barbell Row": "ROW"
};

export const HistoryCard: React.FC<Props> = ({ header, currentExercises }) => {
  return (
    <Card>
      <Text>{header}</Text>
    </Card>
  );
};
