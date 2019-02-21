import React, { useContext } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { observer } from "mobx-react-lite";
import { CounterStoreContext } from "./stores/CounterStore";

export const App = observer(() => {
  const counterStore = useContext(CounterStoreContext);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Planner</Text>
      <Text style={styles.instructions}>Just a hooks example</Text>
      <Text style={styles.instructions}>{counterStore.count}</Text>
      <Button title="increment" onPress={() => counterStore.count++} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
