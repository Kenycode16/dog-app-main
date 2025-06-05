import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const breedImages = {
  // Main breeds
  "labrador.jpg": require('../shared/assets/breedsImages/labrador.jpg'),
  "germanshepherd.jpg": require('../shared/assets/breedsImages/germanshepherd.jpg'),
  "beagle.jpg": require('../shared/assets/breedsImages/beagle.jpg'),
  "poodle.jpg": require('../shared/assets/breedsImages/poodle.jpg'),
  "bulldog.jpg": require('../shared/assets/breedsImages/bulldog.jpg'),
  "goldenretriever.jpg": require('../shared/assets/breedsImages/goldenretriever.jpg'),
  "dachshund.jpg": require('../shared/assets/breedsImages/dachshund.jpg'),
  "shibainu.jpg": require('../shared/assets/breedsImages/shibainu.jpg'),
  "boxer.jpg": require('../shared/assets/breedsImages/boxer.jpg'),
  "corgi.jpg": require('../shared/assets/breedsImages/corgi.jpg'),
  "siberianhusky.jpg": require('../shared/assets/breedsImages/siberianhusky.jpg'),
  "alaskanmalamute.jpg": require('../shared/assets/breedsImages/alaskanmalamute.jpg'),
  "chihuahua.jpg": require('../shared/assets/breedsImages/chihuahua.jpg'),
  "pug.jpg": require('../shared/assets/breedsImages/pug.jpg'),
  "rottweiler.jpg": require('../shared/assets/breedsImages/rottweiler.jpg'),
  // "yorkshireterrier.jpg": require('../shared/assets/breedsImages/yorkshireterrier.jpg'),
  "dalmatian.jpg": require('../shared/assets/breedsImages/dalmatian.jpg'),
  // "schnauzer.jpg": require('../shared/assets/breedsImages/schnauzer.jpg'),
  // "bordercollie.jpg": require('../shared/assets/breedsImages/bordercollie.jpg'),
  // "cavalierkingcharles.jpg": require('../shared/assets/breedsImages/cavalierkingcharles.jpg'),
  "greatdane.jpg": require('../shared/assets/breedsImages/greatdane.jpg'),
  // "shhih-tzu.jpg": require('../shared/assets/breedsImages/shih-tzu.jpg'),
  "pomeranian.jpg": require('../shared/assets/breedsImages/pomeranian.jpg'),
  "bullmastiff.jpg": require('../shared/assets/breedsImages/bullmastiff.jpg'),
  // "cocker-spaniel.jpg": require('../shared/assets/breedsImages/cocker-spaniel.jpg'),
  // "bostonterrier.jpg": require('../shared/assets/breedsImages/bostonterrier.jpg'),
  // "shetland-sheepdog.jpg": require('../shared/assets/breedsImages/shetland-sheepdog.jpg'),
  // "bichonfrise.jpg": require('../shared/assets/breedsImages/bichon-frise.jpg'),
  "caucasianshepherd.jpg": require('../shared/assets/breedsImages/caucasianshepherd.jpg'),




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


// export default function BreedCard({ breed }) {
//   return (
//     <TouchableOpacity style={styles.card} activeOpacity={0.8}>
//       <Image
//         source={breedImages[breed.image]}
//         style={styles.image}
//         resizeMode="contain"
//       />
//       <Text style={styles.name}>{breed.name}</Text>
//       <Text style={styles.info}>Origin: {breed.origin}</Text>
//       <Text style={styles.info}>Size: {breed.size}</Text>
//       <Text style={styles.info}>Lifespan: {breed.lifespan} years</Text>
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     flex: 1,
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     margin: 8,
//     padding: 10,
//     alignItems: 'center',
//     elevation: 2,
//   },
//   image: {
//     width: 110,
//     height: 110,
//     borderRadius: 12,
//     marginBottom: 8,
//   },
//   name: { fontWeight: 'bold', fontSize: 15, marginBottom: 2 },
//   info: { fontSize: 13, color: '#444' },
// });


// export default function BreedCard({ breed }) {
//   return (
//     <TouchableOpacity style={styles.card} activeOpacity={0.8}>
//       <View style={styles.imageWrapper}>
//         <Image
//           source={breedImages[breed.image]}
//           style={styles.image}
//           resizeMode="contain"
//         />
//       </View>
//       <Text style={styles.name}>{breed.name}</Text>
//       <Text style={styles.info}>Origin: {breed.origin}</Text>
//       <Text style={styles.info}>Size: {breed.size}</Text>
//       <Text style={styles.info}>Lifespan: {breed.lifespan} years</Text>
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     flex: 1,
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     margin: 8,
//     padding: 10,
//     alignItems: 'center',
//     elevation: 2,
//   },
//   imageWrapper: {
//     width: 100,
//     height: 100,
//     borderRadius: 14,
//     backgroundColor: '#fff', // subtle bg helps if img isn't square
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 8,
//     overflow: 'hidden',
//   },
//   image: {
//     width: '90%',
//     height: '90%',
//   },
//   name: { fontWeight: 'bold', fontSize: 15, marginBottom: 2 },
//   info: { fontSize: 13, color: '#444' },
// });


export default function BreedCard({ breed, onPress }) {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={onPress} // ← Add this!
    >
      <View style={styles.imageWrapper}>
        <Image
          source={breedImages[breed.image]}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.name}>{breed.name}</Text>
      <Text style={styles.info}>Origin: {breed.origin}</Text>
      <Text style={styles.info}>Size: {breed.size}</Text>
      <Text style={styles.info}>Lifespan: {breed.lifespan} years</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 15,
    margin: 8,
    padding: 10,
    alignItems: 'center',
    // elevation: 2,
  },
  imageWrapper: {
  width: 120,
  height: 100,
  borderRadius: 16,
  // backgroundColor: '#faf8f4',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 8,
  overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    lineHeight: 20,
    width: '100%',
  },
  info: {
    fontSize: 11,
    color: '#444',
    textAlign: 'center',
    width: '100%',
  },
});
