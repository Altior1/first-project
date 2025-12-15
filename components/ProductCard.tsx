import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 10,
        overflow: 'hidden', // Pour que l'image ne dépasse pas des bords arrondis
        // Ombres (iOS)
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        // Ombres (Android)
        elevation: 5,
    }
});

export default function ProductCard() {
    return (
        <View style={styles.card}>
            {/* Simulation Image */}
            <View style={{height: 200, backgroundColor: '#ddd'}}/>

    <View style={{padding: 10}}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Appartement Cosy</Text>
    </View>
</View>)}