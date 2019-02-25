import { createContext } from "react";

import { RootStore } from "./RootStore";

type WorkoutDay = "a" | "b";

interface WorkoutHistory {
  [key: string]: Array<{
    exercise: string;
    value: number;
  }>;
}

// example
// date: [
//     {
//         exercise: "squat",
//         value: 90
//     },
//     {
//         exercise: "benchpress",
//         value: 90
//     }
// ]

export class WorkoutStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
  currentSquat: number;
  currentBench: number;
  currentOverHeadPress: number;
  currentDeadLift: number;
  currentBarbellRow: number;

  lastWorkoutType: WorkoutDay;

  history: WorkoutHistory;
}
