import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [heartRateRange, setHeartRateRange] = useState('');

  const calculate = () => {
    const parsedAge = parseFloat(age.replace(',', '.'));
    if (!isNaN(parsedAge)) {
      const lower = (220 - parsedAge) * 0.65;
      const upper = (220 - parsedAge) * 0.85;
      setHeartRateRange(`${lower.toFixed(0)}-${upper.toFixed(0)}`);
    } else {
      setHeartRateRange('Invalid input');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        onChangeText={(text) => setAge(text)}
        keyboardType="decimal-pad"
        value={age}
      />
      
      <Text style={styles.field}>Limits</Text>
     

      {heartRateRange ? (
        <Text style={styles.result}>{heartRateRange}</Text>
      ) : null}
      <Button title="Calculate" onPress={calculate} />
      <StatusBar style="auto" />
    </View>

     
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    paddingTop:20,
    margin:8,
  },
  field:{
    margintop:8,
    marginBottom:8,
    fontSize:18,
  },
});
