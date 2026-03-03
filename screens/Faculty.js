import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';

const faculties = [
  { id: '1', name: 'Creativity in Tourism & Hospitality', coursesCount: 5 },
  { id: '2', name: 'Design Innovation', coursesCount: 5 },
  { id: '3', name: 'Architecture & Built Environment', coursesCount: 5 },
  { id: '4', name: 'Communication, Media & Broadcasting', coursesCount: 5 },
  { id: '5', name: 'Business & Globalization', coursesCount: 5 },
  { id: '6', name: 'Information & Communication Technology', coursesCount: 5 },
];

export default function Faculty() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const [selected, setSelected] = useState(null);

  if (selected) {
    return (
      <View style={[styles.container, { backgroundColor: isDark ? '#000' : '#f8fafc' }]}>
        <TouchableOpacity onPress={() => setSelected(null)}>
          <Text style={[styles.back, { color: isDark ? '#60a5fa' : '#2563eb' }]}>← Back</Text>
        </TouchableOpacity>
        <Text style={[styles.header, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>
          {selected.name}
        </Text>
        <Text style={{ color: isDark ? '#cbd5e1' : '#475569' }}>Courses coming soon...</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#000' : '#f8fafc' }]}>
      <Text style={[styles.header, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>Faculties</Text>
      <FlatList
        data={faculties}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, { backgroundColor: isDark ? '#1e293b' : 'white' }]}
            onPress={() => setSelected(item)}
          >
            <Text style={[styles.name, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>
              {item.name}
            </Text>
            <Text style={{ color: isDark ? '#94a3b8' : '#64748b' }}>
              {item.coursesCount} courses
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 26, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  card: { padding: 20, marginBottom: 12, borderRadius: 16, elevation: 3, shadowOpacity: 0.1, shadowRadius: 8 },
  name: { fontSize: 18, fontWeight: '600', marginBottom: 4 },
  back: { fontSize: 18, fontWeight: '600', marginBottom: 16 },
});