import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { observer } from "mobx-react-lite";

import { RootStoreContext } from "../stores/RootStore";

interface Props {}

export const WorkoutHistory: React.FC<Props> = observer(() => {
  const rootStore = useContext(RootStoreContext);
  return (
    <View>
      <Text>Workout History Page</Text>
      <Button
        title="create workout"
        onPress={() => {
          rootStore.routerStore.screen = "CurrentWorkout";
        }}
      />
    </View>
  );
});
