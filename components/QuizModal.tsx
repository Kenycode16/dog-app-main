import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Pressable, TouchableWithoutFeedback } from 'react-native';

const QUESTIONS = [
  {
    text: "What's your home like?",
    options: [
      'House with a small yard',
      'Apartment',
      'House with a big yard',
    ],
  },
  {
    text: "Do you have other animals at home?",
    options: ['Yes', 'No'],
  },
  {
    text: "How much time will you spend with a dog each day? (estimate)",
    options: ['1-5 hours', '6-10 hours', 'More than 10 hours'],
  },
  {
    text: "What's your activity level?",
    options: ['Adventure lover', 'Walks around the neighborhood', 'Hang out on the couch'],
  },
];

type QuestionnaireModalProps = {
  visible: boolean;
  onClose: () => void;
};

export default function QuestionnaireModal({ visible, onClose }: QuestionnaireModalProps) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(null));
  const [outsideTapCount, setOutsideTapCount] = useState(0);

  // Reset state on open/close
  useEffect(() => {
    if (!visible) {
      setCurrent(0);
      setAnswers(Array(QUESTIONS.length).fill(null));
      setOutsideTapCount(0);
    }
  }, [visible]);

  // Don't render anything if not visible
  if (!visible) return null;

  // Defensive: prevent out-of-bounds crash
  const q = QUESTIONS[current];
  if (!q) return null;

  // Handle outside tap for double tap-to-close
  const handleOutsidePress = () => {
    setOutsideTapCount(count => {
      if (count + 1 >= 2) {
        onClose();
        return 0;
      }
      return count + 1;
    });
  };

  const handleOption = (idx: number) => {
    const newAnswers = [...answers];
    newAnswers[current] = idx;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (current < QUESTIONS.length - 1) {
      setCurrent(current + 1);
    } else {
      // Could handle results here
      onClose();
    }
  };

  const progress = `${current + 1} of ${QUESTIONS.length}`;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={handleOutsidePress}>
        <View style={styles.centeredView}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={styles.root}>
              <Text style={styles.stepText}>Question {progress}</Text>
              <Text style={styles.questionText}>
                <Text style={{ color: 'red' }}>* </Text>
                {q.text}
              </Text>
              <View style={{ marginTop: 16 }}>
                {q.options.map((option, idx) => (
                  <Pressable
                    key={option}
                    style={[
                      styles.option,
                      answers[current] === idx && styles.optionSelected,
                    ]}
                    onPress={() => handleOption(idx)}
                  >
                    <View style={styles.radioCircle}>
                      {answers[current] === idx && <View style={styles.radioDot} />}
                    </View>
                    <Text style={styles.optionLabel}>{option}</Text>
                  </Pressable>
                ))}
              </View>
              <TouchableOpacity
                style={[
                  styles.nextButton,
                  answers[current] === null && { opacity: 0.5 },
                ]}
                disabled={answers[current] === null}
                onPress={handleNext}
              >
                <Text style={styles.nextButtonText}>
                  {current < QUESTIONS.length - 1 ? "Next \u2192" : "Finish"}
                </Text>
              </TouchableOpacity>
              {outsideTapCount === 1 && (
                <Text style={{ color: '#777', fontSize: 13, marginTop: 8, textAlign: 'center' }}>
                  Tap once more outside the box to close
                </Text>
              )}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
// ...styles (same as before)

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.22)',
  },
  root: {
    backgroundColor: '#f4eada',
    paddingTop: 32,
    paddingHorizontal: 16,
    borderRadius: 16,
    width: '90%',
    minHeight: 380,
    alignItems: 'stretch',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  stepText: {
    color: '#3a7af5',
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 6,
  },
  questionText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 12,
    color: '#241d09',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#e8e6de',
    borderWidth: 2,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#fff9ef',
  },
  optionSelected: {
    borderColor: '#3a7af5',
    backgroundColor: '#f1f8ff',
  },
  radioCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 2,
    borderColor: '#3a7af5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    backgroundColor: '#fff',
  },
  radioDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#3a7af5',
  },
  optionLabel: {
    fontSize: 18,
    color: '#222',
  },
  nextButton: {
    marginTop: 32,
    marginBottom: 16,
    backgroundColor: '#f9f6f2',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    borderColor: '#dccfb0',
    borderWidth: 1,
  },
  nextButtonText: {
    color: '#352a0c',
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 1,
  },
});
