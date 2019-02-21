import { createContext } from "react";

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

class WorkoutStore {
  currentSquat: number;
  currentBench: number;
  currentOverHeadPress: number;
  currentDeadLift: number;
  currentBarbellRow: number;

  lastWorkoutType: WorkoutDay;

  history: WorkoutHistory;
}

export const WorkoutStoreContext = createContext(new WorkoutStore());
