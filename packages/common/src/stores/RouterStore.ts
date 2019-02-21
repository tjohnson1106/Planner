import { observable } from "mobx";
import { createContext } from "react";

// can be union
type Routes = "WorkoutHistory";

class RouterStore {
  @observable screen: Routes = "WorkoutHistory";
}

export const RouterStoreContext = createContext(new RouterStore());
