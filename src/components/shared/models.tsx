import { carModels } from "@/mock/car-models";
import { Car } from "@/types/car.type";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ModelCard from "../base/model-card";
// import Brands from "./brands";

export default function Models() {
    const shuffleArray = (array: Car[]) =>
        [...array].sort(() => Math.random() - 0.5);

    const [cars, setCars] = useState(shuffleArray(carModels));
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = async () => {
        setRefreshing(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setCars(shuffleArray(carModels));
        setRefreshing(false);
    };

    return (
        <View style={styles.container}>
            

            <FlatList
                data={cars}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <ModelCard model={item} />}
                refreshing={refreshing}
                onRefresh={onRefresh}
                contentContainerStyle={styles.modelsContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    modelsContainer: {
        gap: 12,
    },
});