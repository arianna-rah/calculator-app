import Slider from "@react-native-community/slider";
import { StyleSheet, Text, View } from "react-native";

interface SliderProps {
  value: number;
  onValueChange: (val: number) => void;
}

export const SliderExample = ({ value, onValueChange }: SliderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.valueText}>Current Value: {value.toFixed(4)}</Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0.015625}
        maximumValue={64}
        step={0.001}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        onValueChange={onValueChange}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ecf0f1",
  },
  valueText: {
    fontSize: 20,
    marginBottom: 10,
  },
});
