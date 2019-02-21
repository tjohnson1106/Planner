import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

import { RouterStoreContext } from "./stores/RouterStore";
import { WorkoutHistory } from "./modules/WorkoutHistory";
import { CurrentWorkout } from "./modules/CurrentWorkout";

export const Router = observer(() => {
  const routerStore = useContext(RouterStoreContext);

  return routerStore.screen === "WorkoutHistory" ? (
    <WorkoutHistory />
  ) : (
    <CurrentWorkout />
  );
});
