import React, { useState, useMemo, useRef, useEffect} from 'react';
import { Animated, KeyboardAvoidingView, Platform, View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, ScrollView, Dimensions, useWindowDimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Provider as PaperProvider, Portal, Modal, RadioButton } from 'react-native-paper';
import breeds from '../../shared/data/breeds.json';
import BreedCard from '../../components/BreedCard';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets }      from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Keyboard, StyleProp, ViewStyle} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../theme';
import { TextInput as PaperTextInput } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { Pressable } from 'react-native';

/* ──────────────────────────── 1. constants / helpers ────────────────────────────────────── */

const CUSTOM_SIZE_ORDER = ['X-Small', 'Small', 'Medium', 'Large', 'Giant'];

/* ──────────────────────────────────── 2. main screen ────────────────────────────────────── */

function HomeScreen() {
  const [search, setSearch]           = useState('');
  const [sizeFilter, setSizeFilter]   = useState('all');
  const [originFilter, setOrigin]     = useState('all');
  const router = useRouter(); //router instance 

  /* bottom-sheet state */
  const [sheetVisible, setSheetVisible] = useState(false);
  const [sheetStage, setSheetStage] = useState('menu');   // // 'menu' => 'size' | 'origin'

  /* memoised option arrays */
  const sizeOptions = useMemo(() => {
    const set = new Set(breeds.map(b => b.size).filter(Boolean));
    return [
      'all',
      ...CUSTOM_SIZE_ORDER.filter(s => set.has(s)),
      ...[...set].filter(s => !CUSTOM_SIZE_ORDER.includes(s)).sort(),
    ];
  }, []);

  const originOptions = useMemo(() => {
    const set = [...new Set(breeds.map(b => b.origin).filter(Boolean))].sort();
    return ['all', ...set];
  }, []);

  /* breed filtering */
  const filteredBreeds = breeds.filter(b =>
    b.name.toLowerCase().includes(search.toLowerCase()) &&
    (sizeFilter   === 'all' || b.size   === sizeFilter) &&
    (originFilter === 'all' || b.origin === originFilter)
  );

  /* ── animation helpers ── */
  const slideY = useRef(new Animated.Value(120)).current; // start off-screen

  const openSheet = () => {
    slideY.setValue(120);                 // reset position
    setSheetStage('menu');
    setSheetVisible(true);
    Animated.timing(slideY, { toValue: 0, duration: 250, useNativeDriver: true }).start();
  };

  const closeSheet = () => {
    Animated.timing(slideY, { toValue: 70, duration: 200, useNativeDriver: true }).start(() => setSheetVisible(false));
  };

  /* ── keyboard handling ── */
  const kbShift  = useRef(new Animated.Value(0)).current;     // lift when keyboard

  useEffect(() => {
    const show = Keyboard.addListener('keyboardDidShow', e => {
      Animated.timing(kbShift, {
        toValue: e.endCoordinates.height,   // lift exactly keyboard height
        duration: 250,
        useNativeDriver: true,
      }).start();
    });
    const hide = Keyboard.addListener('keyboardDidHide', () => {
      Animated.timing(kbShift, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    });
    return () => { show.remove(); hide.remove(); };
  }, []);


  // const tabBar    = useBottomTabBarHeight();  // ≈ 56 px (varies)
  // const { bottom: insetBottom } = useSafeAreaInsets();
  // const EXTRA_UI = 50;                         // search row **excluded** for Android
  

  // const kavOffset = Platform.select({
  //   ios:     tabBar + insetBottom + EXTRA_UI, // include every persistent element
  //   android: tabBar + insetBottom,            // NO search-row offset ⇒ no gap
  // });

  const handleBreedPress = (breed) => {
  // If your detail screen is at: /screens/BreedProfile.jsx and you pass the breed name (or id) as a param:
      router.push({
    pathname: '/(home)/AllBreedsDetails/BreedDetails', // The new static path
    params: { breedId: breed.id }                 // Pass breedId as a parameter
  });
  };

  const insets = useSafeAreaInsets();        // ⬇︎ Notch / gesture nav
  const tabBarHeight = useBottomTabBarHeight();    // ⬇︎ Dynamic tab-bar height
  // const SEARCH_ROW_HEIGHT = 56;   // height of <View style={styles.searchRow}>
  const [searchH, setSearchH] = useState(0);      // runtime height of search row

  const keyboardOffset = Platform.OS === 'ios' ? tabBarHeight + insets.bottom + searchH : insets.bottom + searchH;

  const { width } = useWindowDimensions();
  const [listWidth, setListWidth] = useState(width);

  const minCardWidth = 180; // Minimum width you want for a card

  const GAP = 16;

  let numColumns = Math.floor((listWidth + GAP) / (minCardWidth + GAP));
  numColumns = Math.max(2, Math.min(numColumns, 5));



  

  /* ─────────────── render ─────────────── */
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={keyboardOffset}
      >
      <FlatList
        key={numColumns}
        onLayout={e => setListWidth(e.nativeEvent.layout.width)}
        data={filteredBreeds}
        keyExtractor={item => item.name}
        numColumns={numColumns}
        renderItem={({ item }) => (
          <BreedCard 
          breed ={item} 
          onPress={() => handleBreedPress(item)} 
          numColumns={numColumns} 
          listWidth={listWidth}
          />
        )}
        columnWrapperStyle={{
          justifyContent: 'center',
          // paddingHorizontal: 0,
        }}
        contentContainerStyle={styles.flatListContent}
        style={{ flex: 1 }}
      />
      {/* search-bar + filter pill */}
      <View
        style={styles.dockedSearchBarContainer}
      >
        <LinearGradient
          colors={['#F0EFEA', '#faf8f4']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.dockedSearchBarGradient}
        >
          <PaperTextInput
            mode="outlined"
            placeholder="Search …"
            value={search}
            onChangeText={setSearch}
            style={styles.dockedSearchBarInput}
            placeholderTextColor="#8b8155"
            outlineColor="transparent"
            activeOutlineColor="#8b8155"
            left={<PaperTextInput.Icon icon={() => <Feather name="search" size={22} color="#8b8155" />} />}
            theme={{ roundness: 20 }}
          />
          <Pressable
            onPress={openSheet}
            style={({ pressed }) => [
              styles.dockedFilterButton,
              pressed && styles.dockedFilterButtonPressed,
            ]}
          >
            <Feather name="filter" size={22} color="#355833" />
          </Pressable>
        </LinearGradient>
      </View>
      {/* bottom-sheet */}
{/* -------- bottom-sheet -------- */}
      <Portal>
        <Modal visible={sheetVisible} 
        onDismiss={() => setSheetVisible(false)} 
        contentContainerStyle={styles.sheetWrapper}
        dismissable={true}
        >
          <Animated.View
            style={[
              styles.sheet,
              {
                transform: [
                  { translateY: slideY },
                  { translateY: Animated.multiply(kbShift, -1) },
                ],
              },
            ]}
          >
              {sheetStage === 'menu' && (
                <View>
                  <Text style={styles.sheetTitle}>Choose filter</Text>
                  <TouchableOpacity
                    style={styles.bigBtn}
                    onPress={() => setSheetStage('size')}>
                    <Text style={styles.bigBtnTxt}>Size</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.bigBtn}
                    onPress={() => setSheetStage('origin')}>
                    <Text style={styles.bigBtnTxt}>Origin</Text>
                  </TouchableOpacity>
                </View>
              )}

              {sheetStage === 'size' && (
                <FilterList
                  title="Size"
                  options={sizeOptions}
                  value={sizeFilter}
                  onChange={v => { setSizeFilter(v); closeSheet(); }}
                  onBack={() => setSheetStage('menu')}
                />
              )}

              {sheetStage === 'origin' && (
                <FilterList
                  title="Origin"
                  options={originOptions}
                  value={originFilter}
                  onChange={v => { setOrigin(v); closeSheet(); }}
                  onBack={() => setSheetStage('menu')}
                />
              )}
            </Animated.View>
        </Modal>
      </Portal>
    </KeyboardAvoidingView>
  );
}

/* ──────────────────────────────────── 3. reusable radio-list component ────────────────────────────────────── */
function FilterList({ title, options, value, onChange, onBack }) {
  return (
    <ScrollView>
      <View style={styles.listHeader}>
        <TouchableOpacity onPress={onBack}>
          <Feather name="arrow-left" size={22} color="#6E6B3B" />
        </TouchableOpacity>
        <Text style={styles.listHeaderTxt}>{title}</Text>
      </View>
      <RadioButton.Group onValueChange={onChange} value={value}>
        {options.map(opt => (
          <RadioButton.Item
            key={opt}
            value={opt}
            label={opt === 'all' ? 'All' : opt}
            labelStyle={styles.radioLabel}
            color="#6E6B3B"
          />
        ))}
      </RadioButton.Group>
    </ScrollView>
  );
}




/* ──────────────────────────────────── 4. styles ────────────────────────────────────── */



const styles = StyleSheet.create({
  // container:   { flex: 1, backgroundColor: '#faf8f4', paddingTop: 20 },

  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around', // Or 'flex-end', 'center', etc.
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },

  /* sheet container */
  sheetWrapper: { flex: 1, justifyContent: 'flex-end', margin: 0 },

  sheet: {
    backgroundColor: '#fff',
    alignSelf: 'flex-end', // ↠ stick to right
    width: '80%',
    height: 250, // fixed height
    maxWidth: 200,
    maxHeight: '80%',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    paddingVertical: 18,
    paddingHorizontal: 20,
    elevation: 8,
    marginRight: 8,  // subtle shift right
  },
  sheetTitle:  { fontSize: 18, fontWeight: 'bold', color: '#6E6B3B', marginBottom: 12 },

  /* big buttons */
  bigBtn: {
    backgroundColor: '#faf8f4',
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginBottom: 10,
  },
  bigBtnTxt:   { fontSize: 16, fontWeight: '600', color: '#8b8155' },

  /* radio list */
  listHeader:  { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  listHeaderTxt: { marginLeft: 8, fontSize: 18, fontWeight: 'bold', color: '#6E6B3B' },
  radioLabel:  { fontSize: 16, color: '#8b8155' },


  /* flat list content */
  flatListContent: {
    paddingBottom: 90, // extra scroll space for search bar
    paddingTop: 20,
    backgroundColor: '#f5f6f7',
    minHeight: '100%',
    alignSelf: 'center',
  },


  /* docked search bar */
  dockedSearchBarContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 20, // tabBarHeight, but static fallback
    alignItems: 'center',
    zIndex: 10,
    pointerEvents: 'box-none',
  },
  dockedSearchBarGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 24,
    shadowColor: '#355833',
    shadowOpacity: 0.22,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 16,
    maxWidth: 600,
    width: '72%',
    alignSelf: 'center',
    padding: 6,
  },
  dockedSearchBarInput: {
    flex: 1,
    backgroundColor: 'transparent',
    borderRadius: 16,
    height: 52,
    fontSize: 15,
    fontWeight: '600',
    borderWidth: 0,
    marginRight: 8,
    color: '#355833',
  },

  /* docked filter button */
  dockedFilterButton: {
    backgroundColor: '#b6d7a8',
    borderRadius: 16,
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#355833',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 8,
    transform: [{ scale: 1 }],
  },
  dockedFilterButtonPressed: {
    backgroundColor: '#c7e6b8',
    transform: [{ scale: 0.96 }],
  },


  
  // paperSearchInput: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   borderRadius: 16,
  //   marginRight: 8,
  //   elevation: 2,
  //   fontSize: 15,
  // },

  // searchBarContainer: {
  //   alignItems: 'center',
  //   marginTop: 8,
  //   marginBottom: 12,
  // },
  // searchBarGradient: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   borderRadius: 24,
  //   shadowColor: '#355833',
  //   shadowOpacity: 0.22,
  //   shadowRadius: 18,
  //   shadowOffset: { width: 0, height: 8 },
  //   elevation: 16,
  //   maxWidth: 600,
  //   width: '95%',
  //   padding: 8,
  // },
  // searchBarInput: {
  //   flex: 1,
  //   backgroundColor: 'transparent',
  //   borderRadius: 20,
  //   height: 54,
  //   fontSize: 19,
  //   fontWeight: '700',
  //   borderWidth: 0,
  //   marginRight: 10,
  //   color: '#355833',
  //   paddingLeft: 0,
  // },
  // filterButton: {
  //   backgroundColor: '#b6d7a8',
  //   borderRadius: 20,
  //   height: 48,
  //   width: 48,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   shadowColor: '#355833',
  //   shadowOpacity: 0.28,
  //   shadowRadius: 10,
  //   shadowOffset: { width: 0, height: 3 },
  //   elevation: 10,
  //   marginLeft: 2,
  //   transform: [{ scale: 1 }],
  // },
  // filterButtonPressed: {
  //   backgroundColor: '#c7e6b8',
  //   transform: [{ scale: 0.94 }],
  // },



  // searchRow:   { flexDirection: 'row', height: 50, alignItems: 'center', marginTop:10, marginBottom: -2, marginHorizontal: 20,  
  //               backgroundColor: '#fff', borderRadius: 12, paddingBottom: 2, paddingHorizontal: 8, paddingVertical: 2, elevation: 5 },
  // searchInput: { flex: 1, fontSize: 13, paddingVertical: 10, paddingRight: 6 },
  // pill: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#e6eed8', borderRadius: 8, paddingHorizontal: 10, paddingVertical: 6 },
  // pillTxt:     { marginLeft: 4, color: '#355833', fontWeight: '600' },


});


/* ──────────────────────────────────── 5. export wrapped with PaperProvider ────────────────────────────────────── */
type PageProps = { style?: StyleProp<ViewStyle> };

export default function Page({ style }: PageProps) {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={[{ flex: 1 }, style]} edges={['top']}>
        <HomeScreen />
      </SafeAreaView>
    </PaperProvider>
  );
}