import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Funny Fill-In Story</Text>
        <Text style={styles.subheading}>Space Adventure Edition 🚀</Text>

        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80',
          }}
          style={styles.image}
        />

        <View style={styles.card}>
          <Text style={styles.label}>Adjective</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter an adjective"
            placeholderTextColor="#7a7a7a"
          />

          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter a name"
            placeholderTextColor="#7a7a7a"
          />

          <Text style={styles.label}>Place</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter a place"
            placeholderTextColor="#7a7a7a"
          />

          <Text style={styles.label}>Noun</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter a noun"
            placeholderTextColor="#7a7a7a"
          />

          <Text style={styles.label}>Verb</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter a verb"
            placeholderTextColor="#7a7a7a"
          />

          <Text style={styles.label}>Color</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter a color"
            placeholderTextColor="#7a7a7a"
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Show My Story</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footerText}>
          Fill in the words and get ready for a funny story!
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF7E6',
  },
  container: {
    padding: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
    fontWeight: '800',
    color: '#5B2C83',
    marginTop: 10,
    textAlign: 'center',
  },
  subheading: {
    fontSize: 18,
    color: '#FF7A00',
    marginTop: 6,
    marginBottom: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  image: {
    width: 260,
    height: 180,
    borderRadius: 18,
    marginBottom: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  label: {
    fontSize: 15,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 6,
    marginTop: 8,
  },
  input: {
    backgroundColor: '#F7F3FF',
    borderWidth: 1,
    borderColor: '#D8C7FF',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: '#222222',
  },
  button: {
    marginTop: 22,
    backgroundColor: '#FFB703',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '800',
    color: '#222222',
  },
  footerText: {
    marginTop: 18,
    fontSize: 14,
    color: '#555555',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});