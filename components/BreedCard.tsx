import React, { useRef } from 'react';
import { View, Text, Image, StyleSheet, Pressable, Animated, Dimensions } from 'react-native';

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



export default function BreedCard({ breed, onPress, numColumns, listWidth }) {
  const GAP = 16;


  const CARD_WIDTH = (listWidth - GAP * (numColumns + 1)) / numColumns;


  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, { toValue: 0.97, useNativeDriver: true }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start();
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={({ pressed }) => [{ opacity: pressed ? 0.9 : 1 }]}
    >
      <Animated.View style={[
        styles.card, 
        { width: CARD_WIDTH, marginBottom: GAP, marginHorizontal: GAP / 2, transform: [{ scale }]   }]}>
        <View style={styles.imageWrapper}>
          <View style={styles.imagePad}>
            <Image
              source={breedImages[breed.image]}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        </View>
        <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">{breed.name}</Text>
        <Text style={styles.info}>Origin: {breed.origin}</Text>
        <Text style={styles.info}>Size: {breed.size}</Text>
        <Text style={styles.info}>Life: {breed.lifespan} yrs</Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    height: 260,
  },
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
  imagePad: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 13,
    marginBottom: 6,
    textAlign: 'center',
  },
  info: {
    fontSize: 11,
    color: '#555',
    textAlign: 'center',
  },
});