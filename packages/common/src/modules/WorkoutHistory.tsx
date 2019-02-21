import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { observer } from "mobx-react-lite";

import { RouterStoreContext } from "../stores/RouterStore";

interface Props {}

export const WorkoutHistory: React.FC<Props> = observer(() => {
  const routerStore = useContext(RouterStoreContext);
  return (
    <View>
      <Text>Workout History Page</Text>
      <Button
        title="create workout"
        onPress={() => {
          routerStore.screen = "CurrentWorkout";
        }}
      />
    </View>
  );
});
