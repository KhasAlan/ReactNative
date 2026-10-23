import { View, StyleSheet } from "react-native";
import Brands from "@/components/shared/brands";
import Models from "@/components/shared/models";

export default function ModelsScreen() {
    return (
        <View style={styles.container}>
            <Brands />
            <Models />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});