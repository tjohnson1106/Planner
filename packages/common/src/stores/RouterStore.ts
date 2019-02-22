import { observable } from "mobx";
import { createContext } from "react";

// union
type Routes = "WorkoutHistory" | "CurrentWorkout";

class RouterStore {
  @observable screen: Routes = "CurrentWorkout";
}

export const RouterStoreContext = createContext(new RouterStore());
