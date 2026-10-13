import { router } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";
export default function Profile() {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      <Pressable onPress={() => router.push("/settings")}>
        <Text>Settings</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});