import Brands from '@/components/shared/brands';
import { layout } from '@/constant/layout';
import { useTheme } from '@/hooks/use-theme';
import { ThemeType } from '@/types/theme-types';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const { top } = useSafeAreaInsets();
  const {colorScheme} = useTheme()
  const styles = getStyles(colorScheme)


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
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>Content</Text>
        <Text style={styles.contentText}>Content</Text>
        <Text style={styles.contentText}>Content</Text>
        <Text style={styles.contentText}>Content</Text>
        <Text style={styles.contentText}>Content</Text>
        <Text style={styles.contentText}>Content</Text>
        <Text style={styles.contentText}>Content</Text>
      </View>
    </ScrollView>
  );
}

const getStyles =(theme: ThemeType) => StyleSheet.create({
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
    fontFamily: layout.fonts.poppins.poppinsSemiBold,
    fontSize: 20,
    color: "#fff",
    marginBottom: 8,
    marginLeft: 14,
  },

  contentContainer: {
    flex: 1,
    backgroundColor: Platform.OS === "ios" ? layout.colors.iosBlack : layout.colors.androidBlack,

  },
  contentText: {
    fontFamily: layout.fonts.poppins.poppinsSemiBold,
    color: theme === "dark" ? layout.colors.white : layout.colors.black,
  }

});