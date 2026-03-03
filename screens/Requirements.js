// Requirements.js - Entry Requirements Screen
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  ScrollView,
} from 'react-native';

export default function Requirements() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

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
        Entry Requirements
      </Text>
      <Text style={[styles.subHeader, { color: isDark ? '#94a3b8' : '#64748b' }]}>
        Based on 2023 Limkokwing University Prospectus (Lesotho Campus)
      </Text>

      {/* Degree Requirements */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: isDark ? '#60a5fa' : '#2563eb' }]}>
          Degree Programmes (Bachelor's)
        </Text>
        <View style={styles.requirementBox}>
          <Text style={[styles.requirementText, { color: isDark ? '#e2e8f0' : '#1e293b' }]}>
            • <Text style={{ fontWeight: 'bold' }}>Faculty of Communication, Media and Broadcasting</Text> (Professional Communication, Broadcasting & Journalism): Minimum 4 C grades and 2 D passes including a C in English Language or Literature. OR Diploma in Mass Communication/relevant field.
          </Text>
          <Text style={[styles.requirementText, { color: isDark ? '#e2e8f0' : '#1e293b' }]}>
            • <Text style={{ fontWeight: 'bold' }}>Faculty of Business and Globalization</Text> (International Business, Entrepreneurship, HR Management): Minimum 4 C grades with C in Commercial subjects and 2 D passes (incl. Mathematics). OR Diploma in relevant field.
          </Text>
          <Text style={[styles.requirementText, { color: isDark ? '#e2e8f0' : '#1e293b' }]}>
            • <Text style={{ fontWeight: 'bold' }}>Faculty of Creativity in Tourism and Hospitality</Text> (Tourism Management): Minimum 4 C grades and 2 D passes (incl. English & Geography). OR Diploma in Tourism/Business.
          </Text>
          <Text style={[styles.requirementText, { color: isDark ? '#e2e8f0' : '#1e293b' }]}>
            • <Text style={{ fontWeight: 'bold' }}>Faculty of Information and Communication Technology</Text> (Software Engineering, Business IT, IT): Minimum 4 C grades and 2 D passes; C in Mathematics (C in Commercial for Business IT). OR Diploma in IT/relevant.
          </Text>
        </View>
      </View>

      {/* Diploma Requirements */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: isDark ? '#60a5fa' : '#2563eb' }]}>
          Diploma Programmes
        </Text>
        <View style={styles.requirementBox}>
          <Text style={[styles.requirementText, { color: isDark ? '#e2e8f0' : '#1e293b' }]}>
            • <Text style={{ fontWeight: 'bold' }}>Faculty of Design Innovation</Text> (Creative Advertising, Graphic Design, Fashion): Minimum 3 C grades and 2 D passes (D in English); Portfolio required. C in Art/Design subjects advantage. OR TVET/Diploma/N4.
          </Text>
          <Text style={[styles.requirementText, { color: isDark ? '#e2e8f0' : '#1e293b' }]}>
            • <Text style={{ fontWeight: 'bold' }}>Faculty of Communication, Media and Broadcasting</Text> (TV/Film, Broadcasting, PR, Journalism): Minimum 3 C grades and 2 D passes (C in English). Drama advantage for TV/Film. OR TVET/Diploma.
          </Text>
          <Text style={[styles.requirementText, { color: isDark ? '#e2e8f0' : '#1e293b' }]}>
            • <Text style={{ fontWeight: 'bold' }}>Faculty of Architecture and the Built Environment</Text> (Architectural Technology): Minimum 3 C grades and 2 D passes (D in Maths & English). C in Art/Woodwork advantage. OR TVET/Certificate/N4.
          </Text>
          <Text style={[styles.requirementText, { color: isDark ? '#e2e8f0' : '#1e293b' }]}>
            • <Text style={{ fontWeight: 'bold' }}>Faculty of Business and Globalization</Text> (Business Mgmt, Retail, Marketing): Minimum 3 C grades (C in Commercial) and 2 D passes (incl. English & Maths). OR TVET.
          </Text>
          <Text style={[styles.requirementText, { color: isDark ? '#e2e8f0' : '#1e293b' }]}>
            • <Text style={{ fontWeight: 'bold' }}>Faculty of Creativity in Tourism and Hospitality</Text> (Tourism, Hotel, Events): Minimum 3 C grades and 2 D passes (D in English & Geography). OR TVET/Certificate in Catering.
          </Text>
          <Text style={[styles.requirementText, { color: isDark ? '#e2e8f0' : '#1e293b' }]}>
            • <Text style={{ fontWeight: 'bold' }}>Faculty of Information and Communication Technology</Text> (Multimedia, Business IT, IT): Minimum 3 C grades and 2 D passes; C in Mathematics (C in Commercial for Business IT). OR TVET/Diploma.
          </Text>
        </View>
      </View>

      {/* Important Note */}
      <View style={[styles.noteBox, { backgroundColor: isDark ? '#1e293b' : '#e0f2fe' }]}>
        <Text style={[styles.noteTitle, { color: isDark ? '#fbbf24' : '#d97706' }]}>
          IMPORTANT
        </Text>
        <Text style={[styles.noteText, { color: isDark ? '#cbd5e1' : '#334155' }]}>
          • Requirements are general minimums — specific programmes may have additional criteria (e.g., portfolios for creative fields).{'\n'}
          • COSC/'O' Level or equivalent accepted.{'\n'}
          • International students: English proficiency (IELTS/TOEFL) often required.{'\n'}
          • Always verify with Admissions Office for latest updates and your qualifications.
        </Text>
      </View>

      {/* Footer */}
      <Text style={[styles.footer, { color: isDark ? '#94a3b8' : '#64748b' }]}>
        Enrol Today! • Moshoeshoe Road, Maseru • 80022066 / 80022088
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  contentContainer: { padding: 24, paddingBottom: 60 },
  header: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 8 },
  subHeader: { fontSize: 16, textAlign: 'center', marginBottom: 32 },
  section: { marginBottom: 40, width: '100%' },
  sectionTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  requirementBox: {
    backgroundColor: '#ffffff10',
    borderRadius: 12,
    padding: 20,
  },
  requirementText: { fontSize: 15, lineHeight: 24, marginBottom: 16 },
  noteBox: {
    padding: 20,
    borderRadius: 12,
    marginTop: 20,
  },
  noteTitle: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 12 },
  noteText: { fontSize: 15, lineHeight: 24 },
  footer: { fontSize: 14, textAlign: 'center', marginTop: 40, lineHeight: 20 },
});