import { observable } from "mobx";
import { createContext } from "react";

class RouterStore {
  @observable path = "WorkoutHistory";
}

export const RouterStoreContext = createContext(new RouterStore());
