// Programs.js - Explore All Programmes Screen
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function Programs({ navigation }) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  // Program data structured from 2023 Prospectus
  const faculties = [
    {
      name: 'Faculty of Design Innovation',
      diplomas: [
        'Diploma in Creative Advertising',
        'Diploma in Graphic Design',
        'Diploma in Fashion and Apparel Design',
      ],
    },
    {
      name: 'Faculty of Communication, Media and Broadcasting',
      degrees: [
        'Degree in Professional Communication',
        'Degree in Broadcasting & Journalism',
      ],
      diplomas: [
        'Diploma in Television and Film Production',
        'Diploma in Broadcasting (Radio and TV)',
        'Diploma in Public Relations',
        'Diploma in Journalism and Media',
      ],
    },
    {
      name: 'Faculty of Architecture and the Built Environment',
      diplomas: ['Diploma in Architectural Technology'],
    },
    {
      name: 'Faculty of Business and Globalization',
      degrees: [
        'Degree in International Business',
        'Degree in Entrepreneurship',
        'Degree in Human Resource Management',
      ],
      diplomas: [
        'Diploma in Business Management',
        'Diploma in Retail Management',
        'Diploma in Marketing',
      ],
    },
    {
      name: 'Faculty of Creativity in Tourism and Hospitality',
      degrees: ['Degree in Tourism Management'],
      diplomas: [
        'Diploma in Tourism Management',
        'Diploma in Hotel Management',
        'Diploma in Events Management',
      ],
    },
    {
      name: 'Faculty of Information and Communication Technology',
      degrees: [
        'Degree in Software Engineering with Multimedia',
        'Degree in Business Information Technology',
        'Degree in Information Technology',
      ],
      diplomas: [
        'Diploma in Multimedia and Software Engineering',
        'Diploma in Business Information Technology',
        'Diploma in Information Technology',
      ],
    },
  ];

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: isDark ? '#000' : '#f8fafc' },
      ]}
      contentContainerStyle={styles.contentContainer}
    >
      {/* Header */}
      <Text style={[styles.header, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>
        Explore All Programmes
      </Text>
      <Text style={[styles.subHeader, { color: isDark ? '#94a3b8' : '#64748b' }]}>
        Innovative programmes that shape careers of the future • 2023 Prospectus
      </Text>

      {/* Faculties */}
      {faculties.map((faculty, index) => (
        <View key={index} style={styles.facultyCard}>
          <Text style={[styles.facultyTitle, { color: isDark ? '#60a5fa' : '#2563eb' }]}>
            {faculty.name}
          </Text>

          {/* Degrees */}
          {faculty.degrees && (
            <View style={styles.programGroup}>
              <Text style={[styles.groupTitle, { color: isDark ? '#e2e8f0' : '#1e293b' }]}>
                Degree Programmes
              </Text>
              {faculty.degrees.map((program, pIndex) => (
                <Text
                  key={pIndex}
                  style={[styles.programItem, { color: isDark ? '#cbd5e1' : '#334155' }]}
                >
                  • {program}
                </Text>
              ))}
            </View>
          )}

          {/* Diplomas */}
          {faculty.diplomas && (
            <View style={styles.programGroup}>
              <Text style={[styles.groupTitle, { color: isDark ? '#e2e8f0' : '#1e293b' }]}>
                Diploma Programmes
              </Text>
              {faculty.diplomas.map((program, pIndex) => (
                <Text
                  key={pIndex}
                  style={[styles.programItem, { color: isDark ? '#cbd5e1' : '#334155' }]}
                >
                  • {program}
                </Text>
              ))}
            </View>
          )}
        </View>
      ))}

      {/* Call to Action */}
      <TouchableOpacity
        style={[styles.enrolButton, { backgroundColor: isDark ? '#047857' : '#10b981' }]}
        onPress={() => navigation?.navigate('Home') || alert('Back to Home')}
      >
        <Text style={styles.buttonText}>Enrol Now at Limkokwing Maseru</Text>
      </TouchableOpacity>

      <Text style={[styles.footer, { color: isDark ? '#94a3b8' : '#64748b' }]}>
        Toll Free: 80022066 / 80022088 • +266 2231 5767 • www.limkokwing.ac.ls
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  contentContainer: { padding: 24, paddingBottom: 60 },
  header: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 8 },
  subHeader: { fontSize: 16, textAlign: 'center', marginBottom: 32 },
  facultyCard: {
    backgroundColor: '#ffffff10',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#60a5fa30',
  },
  facultyTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
  programGroup: { marginBottom: 20 },
  groupTitle: { fontSize: 17, fontWeight: '600', marginBottom: 10 },
  programItem: { fontSize: 16, marginBottom: 6, lineHeight: 22 },
  enrolButton: {
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  footer: { fontSize: 14, textAlign: 'center', marginTop: 40, lineHeight: 20 },
});