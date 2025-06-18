// BreedProfile.js Component
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import QuizModal from './QuizModal'; // Assuming QuizModal.tsx is in the same directory
// If QuizModal.tsx is elsewhere, adjust the import path accordingly. e.g. '../components/QuizModal'

const breedImages = {
  // Main breeds
  "labrador.jpg": require('../shared/assets/breedsImages/labrador.jpg'),
  "germanshepherd.jpg": require('../shared/assets/breedsImages/germanshepherd.jpg'),
  "beagle.jpg": require('../shared/assets/breedsImages/beagle.jpg'),
  "poodle.jpg": require('../shared/assets/breedsImages/poodle.jpg'),
  "bulldog.jpg": require('../shared/assets/breedsImages/bulldog.jpg'),
  "golden-retriever.jpg": require('../shared/assets/breedsImages/golden-retriever.jpg'),
  "dachshund.jpg": require('../shared/assets/breedsImages/dachshund.jpg'),
  "shibainu.jpg": require('../shared/assets/breedsImages/shibainu.jpg'),
  "boxer.jpg": require('../shared/assets/breedsImages/boxer.jpg'),
  "corgi.jpg": require('../shared/assets/breedsImages/corgi.jpg'),
  "siberianhusky.jpg": require('../shared/assets/breedsImages/siberianhusky.jpg'),
  "alaskanmalamute.jpg": require('../shared/assets/breedsImages/alaskanmalamute.jpg'),
  "chihuahua.jpg": require('../shared/assets/breedsImages/chihuahua.jpg'),
  "pug.jpg": require('../shared/assets/breedsImages/pug.jpg'),
  "rottweiler.jpg": require('../shared/assets/breedsImages/rottweiler.jpg'),
  "dalmatian.jpg": require('../shared/assets/breedsImages/dalmatian.jpg'),
  "greatdane.jpg": require('../shared/assets/breedsImages/greatdane.jpg'),
  "pomeranian.jpg": require('../shared/assets/breedsImages/pomeranian.jpg'),
  "bullmastiff.jpg": require('../shared/assets/breedsImages/bullmastiff.jpg'),
  "caucasian-shepherd.jpg": require('../shared/assets/breedsImages/caucasian-shepherd.jpg'),
  "yorkshire-terrier.jpg": require('../shared/assets/breedsImages/yorkshire-terrier.jpg'),
  "cocker-spaniel.jpg": require('../shared/assets/breedsImages/cocker-spaniel.jpg'),
  "boston-terrier.jpg": require('../shared/assets/breedsImages/boston-terrier.jpg'),
  "shetland-sheepdog.jpg": require('../shared/assets/breedsImages/shetland-sheepdog.jpg'),
  "bichon-frise.jpg": require('../shared/assets/breedsImages/bichon-frise.jpg'),
  "shih-tzu.jpg": require('../shared/assets/breedsImages/shih-tzu.jpg'),
  "schnauzer.jpg": require('../shared/assets/breedsImages/schnauzer.jpg'),
  "border-collie.jpg": require('../shared/assets/breedsImages/border-collie.jpg'),




  // // Variants for Labrador
  // "english-lab.jpg": require('../../shared/assets/breedsImages/english-lab.jpg'),
  // "american-lab.jpg": require('../../shared/assets/breedsImages/american-lab.jpg'),

  // // Variants for German Shepherd
  // "european-gsd.jpg": require('../../shared/assets/breedsImages/european-gsd.jpg'),
  // "american-gsd.jpg": require('../../shared/assets/breedsImages/american-gsd.jpg'),


  // // Variants for Poodle
  // "standard-poodle.jpg": require('../../shared/assets/breedsImages/standard-poodle.jpg'),
  // "miniature-poodle.jpg": require('../../shared/assets/breedsImages/miniature-poodle.jpg'),

  // // Variants for Bulldog
  // "english-bulldog.jpg": require('../../shared/assets/breedsImages/english-bulldog.jpg'),
  // "french-bulldog.jpg": require('../../shared/assets/breedsImages/french-bulldog.jpg'),

  // // Variants for Golden Retriever
  // "english-golden.jpg": require('../../shared/assets/breedsImages/english-golden.jpg'),
  // "american-golden.jpg": require('../../shared/assets/breedsImages/american-golden.jpg'),
  
  // // Variants for Dachshund
  // "standard-dachshund.jpg": require('../../shared/assets/breedsImages/standard-dachshund.jpg'),
  // "miniature-dachshund.jpg": require('../../shared/assets/breedsImages/miniature-dachshund.jpg'),

  // // Variants for Shiba Inu
  // "shiba-inu.jpg": require('../../shared/assets/breedsImages/shiba-inu.jpg'),
  // "shiba-inu-variant.jpg": require('../../shared/assets/breedsImages/shiba-inu-variant.jpg'),

  // // Variants for Boxer
  // "boxer.jpg": require('../../shared/assets/breedsImages/boxer.jpg'),
  // "boxer-variant.jpg": require('../../shared/assets/breedsImages/boxer-variant.jpg'),

  // // Variants for Corgi
  // "pembroke-corgi.jpg": require('../../shared/assets/breedsImages/pembroke-corgi.jpg'),
  // "cardigan-corgi.jpg": require('../../shared/assets/breedsImages/cardigan-corgi.jpg'),

  // // Variants for Beagle
  // "tri-color-beagle.jpg": require('../../shared/assets/breedsImages/tri-color-beagle.jpg'),
  // "lemon-beagle.jpg": require('../../shared/assets/breedsImages/lemon-beagle.jpg'),
 

};

export default function BreedProfile({ breed }) {
  
  if (!breed) {
    return (
      <View style={styles.centeredMessage}>
        <Text>Breed information not available.</Text>
      </View>
    );
  }
   const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const imageSource = breedImages[breed.image];
  const router  = useRouter();
    const [isQuizVisible, setIsQuizVisible] = useState(false);

  // Cleanup timeout on component unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  return (
    // This View can act as the overall screen background if BreedDetails doesn't provide one
    <View style={styles.screen}>
      <View style={styles.container}>
        <Image source={imageSource} style= {styles.image}/>
        <View style= {styles.detailsContainer}>
          <Text style= {styles.name}>{breed.name}</Text>
          <Text style= {styles.info}>Origin: {breed.origin}</Text>
          <Text style= {styles.info}>Size: {breed.size}</Text>
          <Text style= {styles.info}>Lifespan: {breed.lifespan} years</Text>
          {breed.description && breed.description.trim() !== "" && (
            <Text style={styles.description_profile}>{breed.description}</Text>
          )}
        </View>

        <TouchableOpacity
        style={styles.button}
        onPress={() => router.push({
        pathname: '/AllBreedsDetails/BreedMoreInfo',
        params: {
        name: breed.name,
        origin: breed.origin,
        size: breed.size,
        lifespan: breed.lifespan,
        description: breed.description,
        image: breed.image,
        }
        })}
>         <Ionicons name="information-circle-outline" size={24} color="#333333" style={{marginRight: 10}} />
          <Text style={styles.buttonText}>Learn More</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => {
            console.log('Compare Breeds button pressed for:', breed.name);
            // Clear any existing timeout to prevent multiple navigations
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout(() => {
               setIsQuizVisible(true); 
            }, 5000); // 5000 milliseconds = 5 seconds
          }}>
          <Ionicons name="swap-horizontal" size={24} color="#333333" style={{marginRight: 10}} />
          <Text style={styles.buttonText}>Compare Breeds</Text>
        </TouchableOpacity>
      </View>
      <QuizModal
        visible={isQuizVisible}
        onClose={() => setIsQuizVisible(false)}

      />
    </View>
  );
}

// Use the StyleSheet developed previously for the visual appearance
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F0F0F0', // Light grey background for the whole screen view of this component
    // paddingVertical: 20, // Add padding if this component is the root view and needs spacing from screen edges
  },
  centeredMessage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  container: { // This is the card
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginHorizontal: 20,
    marginVertical: 20, // If screen has paddingVertical:0, this gives space to the card
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    overflow: 'hidden',
  },
  /* dog image */
  imageWrapper: {
    width: '100%',
    aspectRatio: 1.6,
    borderRadius: 16,
    backgroundColor: '#faf8f4',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    overflow: 'hidden',
  },
  image: {
    width: '70%',
    height: '40%',
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 20,
  },
  detailsContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10, // Space before description or buttons
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 12,
  },
  info: {
    fontSize: 16,
    color: '#555555',
    marginBottom: 8,
    lineHeight: 22,
  },
  description_profile: { // Added a distinct style name in case of conflict
    fontSize: 15,
    color: '#333333',
    marginTop: 8,
    marginBottom: 10, // Space before the buttons start if description is present
    lineHeight: 21,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderTopWidth: 1,
    borderTopColor: '#EFEFEF',
  },
  buttonText: {
    fontSize: 16,
    color: '#333333',
    fontWeight: '600',
  },
  // buttonIcon: { marginRight: 12, }, // Example if you add icons
});