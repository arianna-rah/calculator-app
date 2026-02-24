import { SliderExample } from "@/components/slider";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  const [sliderVal, setSliderVal] = useState(0.015625);
  const [sliderVal2, setSliderVal2] = useState(0.015625);

  const dateOperation = () => {
    return sliderVal * sliderVal2; // PLACEHOLDER BC I HAVENT STARTED THE DATE SELECTOR YET
  };

  return (
    <View style={styles.container}>
      <SliderExample value={sliderVal} onValueChange={setSliderVal} />

      <SliderExample value={sliderVal2} onValueChange={setSliderVal2} />
    </View>
  );
}

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
