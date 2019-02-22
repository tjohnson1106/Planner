import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

interface Props {
  exercise: string;
  repsAndWeight: string;
  sets: string[];
}
export const WorkoutCard: React.FC<Props> = ({
  exercise,
  repsAndWeight,
  sets
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.topRowText}>{exercise}</Text>
        <Text style={styles.topRowText}>{repsAndWeight}</Text>
      </View>
      <View style={styles.bottomRow}>
        {sets.map((set, index) => {
          if (set === "X") {
            return (
              <View
                style={[styles.circle, styles.fadedBackground]}
                key={set + index}
              >
                <Text style={[styles.circleText, styles.grayText]}>X</Text>
              </View>
            );
          }

          if (set === "") {
            return (
              <View
                style={[styles.circle, styles.fadedBackground]}
                key={set + index}
              />
            );
          }

          return (
            <View style={styles.circle} key={set + index}>
              <Text style={[styles.whiteText, styles.circleText]}>{set}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 3,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    // android
    elevation: 5,
    flexDirection: "column",
    padding: 10
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  topRowText: {
    fontSize: 16
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14
  },
  circle: {
    borderRadius: 100,
    backgroundColor: "#8FB299",
    padding: 15
  },
  whiteText: {
    color: "#fff"
  },
  circleText: {
    fontSize: 16
  },
  grayText: {
    color: "#7F7F7F"
  },
  fadedBackground: {
    backgroundColor: "#B2A1A1"
  }
});
