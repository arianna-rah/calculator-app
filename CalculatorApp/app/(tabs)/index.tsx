import { Calendar } from "@/components/calendar";
import { SliderExample } from "@/components/slider";
import { ShakeReveal } from "@/components/shake-reveal";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Float } from "react-native/Libraries/Types/CodegenTypes";

const operations = [" + ", " - ", " x ", " / ", " % ", " ^ "];

interface computeProps {
  num1: number,
  num2: number,
  operation: String
}

function CalculateOperatorGivenTime(date: Date): String {
  let year: number = date.getFullYear();
  let month: number = date.getMonth();
  let day: number = date.getDate();
  return operations[day % 6];
}

function compute({num1, num2, operation}: computeProps) {
    if (operation === " + ") {
      return num1 + num2;
    } else if (operation === " - ") {
      return num1 - num2;
    } else if (operation === " x ") {
      return num1 * num2;
    } else if (operation === " / ") {
      return num1 / num2;
    } else if (operation === " % ") {
      return num1 % num2;
    } else if (operation === " ^ ") {
      return num1 ** num2;
    }

    return 0;
}

export default function HomeScreen() {
  let today = new Date();
  const [sliderVal, setSliderVal] = useState(0.015625);
  const [calendarVal, setCalendarVal] = useState(today);
  const [operation, setOperation] = useState(CalculateOperatorGivenTime(today));
  const [sliderVal2, setSliderVal2] = useState(0.015625);

  useEffect(() => {
    setOperation(CalculateOperatorGivenTime(calendarVal));
  }, [calendarVal]);

  return (
    <View style={styles.container}>
      <SliderExample value={sliderVal} onValueChange={setSliderVal} />
      <Calendar
        value={calendarVal}
        onChange={(event, date) => {
        if (date) setCalendarVal(date);
        }}
        operation={operation}
      />
      <Text>{calendarVal.toDateString()}</Text>
      <SliderExample value={sliderVal2} onValueChange={setSliderVal2} />

      <ShakeReveal value={compute({ num1: sliderVal, num2: sliderVal2, operation: operation })} />
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
