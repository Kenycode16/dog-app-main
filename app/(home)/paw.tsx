import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Paw: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Account Details Screen</Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2023 Dog Breeds App. All rights reserved.
        </Text>
      </View>
    </View>
  );
};

export default Paw;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    padding: 16,
    alignItems: 'center',
  },
  footerText: {
    color: '#8b8155',
    fontSize: 12,
  },
});
