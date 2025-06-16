import React from "react";
import { View, Text } from "react-native";
export default function favorite() {
  return (
    <View style={{ flex: 1, justifyContent: 'space-between' }}>
      {/* Main Content */}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Favorite Screen</Text>
      </View>

      {/* Footer */}
      <View style={{ padding: 16, alignItems: 'center' }}>
        <Text style={{ color: '#8b8155', fontSize: 12 }}>
          © 2023 Dog Breeds App. All rights reserved.
        </Text>
      </View>
    </View>
  );
}