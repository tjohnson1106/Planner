import * as React from "react";
import { observable, computed } from "mobx";
import { persist } from "mobx-persist";

import { RootStore } from "./RootStore";

type WorkoutDay = "a" | "b";

export interface CurrentExercise {
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
  @persist @observable currentSquat: number = 45;
  @persist @observable currentBench: number = 45;
  @persist @observable currentOverHeadPress: number = 45;
  @persist @observable currentDeadLift: number = 45;
  @persist @observable currentBarbellRow: number = 45;

  // required:  specify data type to persist for non-primitives
  @persist @observable lastWorkoutType: WorkoutDay = "a";

  @persist("list") @observable currentExercises: CurrentExercise[] = [];

  // boolean checking for values in current exercise
  @computed get hasCurrentWorkout() {
    return !!this.currentExercises.length;
  }

  @persist("object") @observable history: WorkoutHistory = {};
}
