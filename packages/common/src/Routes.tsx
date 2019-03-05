import * as React from "react";

import { WorkoutHistory } from "./modules/WorkoutHistory";
import { CurrentWorkout } from "./modules/CurrentWorkout";
import { Router, Switch, Route } from "./router/index";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={WorkoutHistory} />
        <Route exact path="/current-workout" component={CurrentWorkout} />
        <Route
          exact
          path="/workout/:year/:month/:daty"
          component={CurrentWorkout}
        />
      </Switch>
    </Router>
  );
};
