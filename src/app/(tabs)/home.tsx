import Brands from '@/components/shared/brands';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const { top } = useSafeAreaInsets();


  return (
    <ScrollView>

      <View style={[styles.container, { paddingTop: top + 16 }]}>
        <StatusBar style="light" />
        <View style={styles.inputContainer}>
          <Ionicons name="search" size={24} color="#B5B5B5" />
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="#B5B5B5"
            autoCapitalize="words"
            autoComplete="name"
          />
        </View>

        <View />
      </View>
      <View style={styles.brandsContainer}>
        <Text style={styles.brandsTitle}> Brands</Text>
        <Brands />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    padding: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    gap: 8,
    marginTop: 64,
    marginBottom: 64,
  },
  input: {
    flex: 1,
    borderRadius: 8,
    color: "#000",
  },
  brandsContainer: {
    marginTop: -64,
  },
  brandsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
    marginLeft: 14,
  },

});