import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';


// Trait bar component
const TraitBar = ({ title, value, max = 5, leftLabel, rightLabel, description }) => {
  const activeBars = Math.min(value, max);

  return (
    <View style={styles.traitBlock}>
      <Text style={styles.traitTitle}>{title.toUpperCase()}</Text>
      <View style={styles.barLabels}>
        <Text style={styles.labelText}>{leftLabel}</Text>
        <Text style={styles.labelText}>{rightLabel}</Text>
      </View>
      <View style={styles.barContainer}>
        {[...Array(max)].map((_, i) => (
          <View
            key={i}
            style={[
              styles.barSegment,
              i < activeBars ? styles.barActive : styles.barInactive,
            ]}
          />
        ))}
      </View>
      <Text style={styles.traitDescription}>{description}</Text>
    </View>
  );
};

// Trait tag list
const TraitTags = ({ title, options = [], selected }) => (
  <View style={styles.tagBlock}>
    <Text style={styles.traitTitle}>{title.toUpperCase()}</Text>
    <View style={styles.tagList}>
      {options.map((option) => (
        <View
          key={option}
          style={[
            styles.tag,
            selected.includes(option) ? styles.tagActive : styles.tagInactive,
          ]}
        >
          <Text
            style={{
              color: selected.includes(option) ? '#224488' : '#bbb',
              fontWeight: 'bold',
            }}
          >
            {selected.includes(option) ? '✓' : '✕'} {option}
          </Text>
        </View>
      ))}
    </View>
  </View>
);

export default function BreedMoreInfo() {
  const {
    name,
    shedding = '3',
    grooming = '4',
    drooling = '2',
    coatTypes = 'Smooth,Double',
    coatLength = 'Short',
  } = useLocalSearchParams();

  if (!name) {
    return (
      <View style={styles.container}>
        <Text>Breed not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{name} Traits & Characteristics</Text>

      <TraitBar
        title="Shedding Level"
        value={parseInt(Array.isArray(shedding) ? shedding[0] : shedding)}
        leftLabel="No Shedding"
        rightLabel="Hair Everywhere"
        description="Breeds with high shedding need frequent brushing and may trigger allergies."
      />

      <TraitBar
        title="Coat Grooming Frequency"
        value={parseInt(Array.isArray(grooming) ? grooming[0] : grooming)}
        leftLabel="Monthly"
        rightLabel="Daily"
        description="Some breeds require high grooming effort including trimming and brushing."
      />

      <TraitBar
        title="Drooling Level"
        value={parseInt(Array.isArray(drooling) ? drooling[0] : drooling)}
        leftLabel="Less Likely to Drool"
        rightLabel="Always Have a Towel"
        description="Breeds that drool more need frequent face wiping and care."
      />

      <TraitTags
        title="Coat Type"
        options={[
          'Wiry', 'Rough', 'Curly', 'Hairless', 'Corded', 'Wavy',
          'Smooth', 'Double', 'Silky',
        ]}
        selected={(typeof coatTypes === 'string' ? coatTypes.split(',') : [])}
      />

      <TraitTags
        title="Coat Length"
        options={['Short', 'Medium', 'Long']}
        selected={[coatLength]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#111',
  },
  traitBlock: {
    marginBottom: 30,
  },
  traitTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1c2e4a',
    marginBottom: 6,
  },
  barLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  labelText: {
    fontSize: 11,
    color: '#999',
  },
  barContainer: {
    flexDirection: 'row',
    gap: 4,
    marginBottom: 6,
  },
  barSegment: {
    flex: 1,
    height: 10,
    borderRadius: 4,
  },
  barActive: {
    backgroundColor: '#8b8155',
  },
  barInactive: {
    backgroundColor: '#ddd',
  },
  traitDescription: {
    fontSize: 14,
    color: '#444',
  },
  tagBlock: {
    marginBottom: 30,
  },
  tagList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1.5,
  },
  tagActive: {
    borderColor: '#8b8155',
    backgroundColor: '#8b8155',
  },
  tagInactive: {
    borderColor: '#ccc',
    backgroundColor: '#ddd',
  },
});
