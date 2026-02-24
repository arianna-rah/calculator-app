import { Image } from 'expo-image';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SliderExample } from '@/components/slider';


export default function HomeScreen() {
  const [sliderVal, setSliderVal] = useState(0.015625);
  const [sliderVal2, setSliderVal2] = useState(0.015625);

  const dateOperation = () => {
    return sliderVal * sliderVal2; // PLACEHOLDER BC I HAVENT STARTED THE DATE SELECTOR YET 
  };

  return (
    <View>
      <SliderExample 
        value={sliderVal} 
        onValueChange={setSliderVal} 
      />

      <SliderExample 
        value={sliderVal2} 
        onValueChange={setSliderVal2} 
      />
    </View>
  );
}
