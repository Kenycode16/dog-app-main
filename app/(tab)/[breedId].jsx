// BreedDetails.jsx (your screen file)
import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; 
import { useLocalSearchParams } from 'expo-router';
import breeds from '../../shared/data/breeds.json'; 
import BreedProfile from '../../components/BreedProfile'; 
 



export default function BreedDetails() {
  const { breedId } = useLocalSearchParams(); // This is the actual ID from the route

  // Fetch the breed using the ID
  const breed = breeds.find(b => String(b.id) === String(breedId));

  if (!breed) {

    return (
      <View style={styles.centeredMessage}>
        <Text>Breed not found.</Text>
      </View>
    );
  }


  return <BreedProfile breed={breed} />;
}

const styles = StyleSheet.create({
  centeredMessage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F0F0F0', 
  },
});