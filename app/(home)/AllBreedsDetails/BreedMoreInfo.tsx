// app/AllBreedsDetails/BreedMoreInfo.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import breeds from '../../../shared/data/breeds.json';

export default function BreedMoreInfo() {
  const { breedId } = useLocalSearchParams();
  const breed = breeds.find(b => String(b.id) === String(breedId));

  if (!breed) {
    return <Text>Breed not found.</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{breed.name} - More Info</Text>
      <Text style={styles.body}>
        {/* Add more detailed info here! */}
        This is where you can put health, training, history, etc.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  body: { fontSize: 16 },
});


