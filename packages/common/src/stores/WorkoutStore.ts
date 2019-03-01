import * as React from "react";
import { observable } from "mobx";
import { persist } from "mobx-persist";

import { RootStore } from "./RootStore";

type WorkoutDay = "a" | "b";

interface CurrentExercise {
  weight: number;
  reps: number;
  numSets: number;
  exercise: string;
  sets: string[];
}

interface WorkoutHistory {
  [key: string]: CurrentExercise[];
}

export class WorkoutStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
  @persist @observable currentSquat: number;
  @persist @observable currentBench: number;
  @persist @observable currentOverHeadPress: number;
  @persist @observable currentDeadLift: number;
  @persist @observable currentBarbellRow: number;

  // required:  specify data type to persist for non-primitives
  @persist @observable lastWorkoutType: WorkoutDay;
  @persist("list") @observable currentExercises: CurrentExercise[] = [];
  @persist("object") @observable history: WorkoutHistory = {};
}
