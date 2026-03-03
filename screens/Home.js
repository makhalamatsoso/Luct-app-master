import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';

export default function Home({ navigation }) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const logoUrl = 'https://seeklogo.com/images/L/limkokwing-university-logo-9E8E8E8E8E-seeklogo.com.png';

  // Placeholder images inspired by your prospectus description (replace with real ones from campus social media or assets)
  const images = {
    globeFlags: 'https://via.placeholder.com/600x300/003366/FFFFFF?text=Global+Globe+with+Flags+150+Countries',
    fashionStudio: 'https://via.placeholder.com/600x350/4B0082/FFFFFF?text=Fashion+Studio+Students+at+Work',
    groupDiscussion: 'https://via.placeholder.com/600x350/228B22/FFFFFF?text=Creative+Students+Collaborating',
    campusInnovation: 'https://via.placeholder.com/600x300/000080/FFFFFF?text=Limkokwing+Maseru+Campus+Innovation',
  };

  const openWebsite = () => {
    // Using a current working link to Lesotho page (old .ac.ls seems archived)
    Linking.openURL('https://www.limkokwing.com/page/lesotho').catch(err => console.error(err));
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: isDark ? '#000' : '#f8fafc' }]}
      contentContainerStyle={styles.contentContainer}
    >
      {/* Logo */}
      <Image source={{ uri: logoUrl }} style={styles.logo} resizeMode="contain" />

      {/* Headline from prospectus */}
      <Text style={[styles.headline, { color: isDark ? '#f1f5f9' : '#0f172a' }]}>
        BE THE BEST{'\n'}BE A LIMKOKWING GRADUATE
      </Text>

      {/* Hero image + global appeal */}
      <Image source={{ uri: images.globeFlags }} style={styles.heroImage} resizeMode="cover" />
      <Text style={[styles.intro, { color: isDark ? '#cbd5e1' : '#334155' }]}>
        Immerse yourself in a melting pot of cultures with over 30,000 creative minds from 150+ countries across 3 continents.
      </Text>

      {/* Benefits section - matched to your text */}
      <View style={styles.benefits}>
        <Text style={[styles.benefitTitle, { color: isDark ? '#60a5fa' : '#2563eb' }]}>
          Be the Best...
        </Text>

        <Text style={[styles.benefit, { color: isDark ? '#e2e8f0' : '#1e293b' }]}>
          • In your sphere of studies — design, business or architecture. All programmes crafted to encourage creative & critical thinking. Collaborate with industry leaders for the distinct Limkokwing advantage.
        </Text>
        <Text style={[styles.benefit, { color: isDark ? '#e2e8f0' : '#1e293b' }]}>
          • Trained to succeed — Adapt & thrive in competitive, globalized society. Incubation units for innovative solutions to industry challenges.
        </Text>
        <Text style={[styles.benefit, { color: isDark ? '#e2e8f0' : '#1e293b' }]}>
          • To nurture & build your future — Accomplished professionals help you acquire skills for high-income careers.
        </Text>
        <Text style={[styles.benefit, { color: isDark ? '#e2e8f0' : '#1e293b' }]}>
          • In digital & creative skills — From augmented reality & touchscreen consoles to 3D printers — creativity is your only limit.
        </Text>
        <Text style={[styles.benefit, { color: isDark ? '#e2e8f0' : '#1e293b' }]}>
          • In making global connections — Build networks, gain cultural insights, unique design ideas & unexplored business opportunities.
        </Text>
        <Text style={[styles.benefit, { color: isDark ? '#e2e8f0' : '#1e293b' }]}>
          • Among the best — Inspiring ecosystem to hone talents, learn skills, make lifetime friends & prepare for international careers.
        </Text>
      </View>

      {/* Campus life images */}
      <Image source={{ uri: images.fashionStudio }} style={styles.inlineImage} resizeMode="cover" />
      <Image source={{ uri: images.groupDiscussion }} style={styles.inlineImage} resizeMode="cover" />

      {/* Programmes teaser */}
      <Text style={[styles.sectionTitle, { color: isDark ? '#e2e8f0' : '#1e293b' }]}>
        INNOVATIVE PROGRAMMES THAT SHAPE CAREERS OF THE FUTURE
      </Text>

      <Text style={[styles.programsText, { color: isDark ? '#cbd5e1' : '#334155' }]}>
        Faculties include:{'\n\n'}
        • Design Innovation{'\n'}
        • Communication, Media & Broadcasting{'\n'}
        • Architecture & the Built Environment{'\n'}
        • Business & Globalization{'\n'}
        • Creativity in Tourism & Hospitality{'\n'}
        • Information & Communication Technology{'\n\n'}
        Diplomas & Degrees across creative & professional fields.
      </Text>

      {/* Final campus image */}
      <Image source={{ uri: images.campusInnovation }} style={styles.heroImage} resizeMode="cover" />

      {/* Buttons */}
      <View style={styles.buttons}>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: isDark ? '#1e40af' : '#3b82f6' }]}
          onPress={() => navigation.navigate('Programs')}
        >
          <Text style={styles.btnText}>Explore All Programmes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, { backgroundColor: isDark ? '#1e40af' : '#3b82f6' }]}
          onPress={() => navigation.navigate('Requirements')}
        >
          <Text style={styles.btnText}>Check Entry Requirements</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.enrolBtn, { backgroundColor: isDark ? '#047857' : '#10b981' }]}
          onPress={openWebsite}
        >
          <Text style={styles.btnText}>
            Learn more about:Limkokwing University of Creative Technology
          </Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <Text style={[styles.footer, { color: isDark ? '#94a3b8' : '#64748b' }]}>
        Moshoeshoe Road, Maseru Central • PO Box 8971 Maseru 100 Lesotho{'\n'}
        Toll Free: 80022066 / 80022088 • +266 2231 5767{'\n'}
        facebook.com/limkokwing • Join Lesotho's award-winning creative university!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  contentContainer: { alignItems: 'center', padding: 24, paddingBottom: 100 },
  logo: { width: 220, height: 80, marginVertical: 20 },
  headline: { fontSize: 34, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  intro: { fontSize: 16, textAlign: 'center', marginBottom: 24, lineHeight: 24 },
  heroImage: { width: '100%', height: 220, borderRadius: 16, marginVertical: 16 },
  benefits: { width: '100%', marginVertical: 20 },
  benefitTitle: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 16 },
  benefit: { fontSize: 15, marginBottom: 12, lineHeight: 22 },
  inlineImage: { width: '100%', height: 200, borderRadius: 16, marginVertical: 12 },
  sectionTitle: { fontSize: 22, fontWeight: '600', marginTop: 32, marginBottom: 16, textAlign: 'center' },
  programsText: { fontSize: 15, lineHeight: 24, marginBottom: 32 },
  buttons: { width: '100%', alignItems: 'center', marginVertical: 24 },
  btn: {
    width: '90%',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 10,
  },
  enrolBtn: {
    width: '90%',
    paddingVertical: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  btnText: { fontSize: 18, fontWeight: 'bold', color: '#ffffff', textAlign: 'center' },
  footer: { fontSize: 14, textAlign: 'center', lineHeight: 22, marginTop: 40 },
});