import React from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';

export default function OnboardingItem({ item }) {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Image source={item.image} style={[styles.image, { width, resizeMode: 'contain' }]} />

      <View style={{ flex: 0.3, paddingHorizontal: 20, paddingTop: 20 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 275,
    height: 250,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: "#EB389A",
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: "#000",
    textAlign: 'center',
  },
});
