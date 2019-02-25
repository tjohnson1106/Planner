import { createContext } from "react";

import { RootStore } from "./RootStore";
import { observable } from "mobx";

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

interface CurrentExercise {
  weight: number;
  reps: number;
  numSets: number;
  exercise: string;
}

export class WorkoutStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
  @observable currentSquat: number;
  @observable currentBench: number;
  @observable currentOverHeadPress: number;
  @observable currentDeadLift: number;
  @observable currentBarbellRow: number;
  @observable lastWorkoutType: WorkoutDay;
  @observable currentExercises: CurrentExercise[] = [];
  @observable history: WorkoutHistory;
}
