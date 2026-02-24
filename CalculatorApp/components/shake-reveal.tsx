import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Accelerometer } from 'expo-sensors';

interface ShakeRevealProps {
  value: number;
}

export function ShakeReveal({ value }: ShakeRevealProps) {
  const [hasShaken, setHasShaken] = useState(false);
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    Accelerometer.setUpdateInterval(100); // update interval is 100ms, can be changed

    const subscription = Accelerometer.addListener(accelerometerData => {
      setData(accelerometerData);
      
      const { x, y, z } = accelerometerData;
      const totalForce = Math.sqrt(x * x + y * y + z * z);

      if (totalForce > 2.2) { // idk about the numbers for this icl
        setHasShaken(true);
      }
    });

    return () => subscription.remove();
  }, []);

  useEffect(() => {
    setHasShaken(false);
  }, [value]);

  return (
    <View style={styles.container}>
      {hasShaken ? (
        <View style={styles.revealBox}>
          <Text style={styles.resultText}>Result: {value.toFixed(4)}</Text>
        </View>
      ) : (
        <View style={styles.hiddenBox}>
          <Text style={styles.hintText}>Shake to Reveal Result!</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  revealBox: {
    padding: 20,
    backgroundColor: '#e1ffc7',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#4CAF50',
  },
  hiddenBox: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: '#ccc',
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  hintText: {
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
  },
});