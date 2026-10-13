import { View, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      console.log('AsyncStorage successfully cleared!');
    } catch (e) {
      console.error('Failed to clear async storage.', e);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Clear All AsyncStorage Keys" onPress={clearStorage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});