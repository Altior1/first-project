import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function OfferScreen() {
    // 1. On récupère le paramètre dynamique de l'URL
    const {code} = useLocalSearchParams();
    const router = useRouter();

    return (
        <View style={styles.container}>
            {/* Configuration du Header spécifique à cet écran */}
            <Stack.Screen options={{title: 'Offre Spéciale 🎉'}}/>

            <Text style={styles.label}>Code Promo Reçu :</Text>

            {/* Affichage du code récupéré */}
            <Text style={styles.code}>{code}</Text>

            <Text style={styles.description}>
                Votre réduction a été appliquée automatiquement !
            </Text>

            <Button title="Retour à l'accueil" onPress={() => router.replace('/')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor: '#f9f9f9'},
    label: {fontSize: 18, color: '#555'},
    code: {fontSize: 40, fontWeight: 'bold', color: '#6200ee', marginVertical: 20, letterSpacing: 2},
    description: {textAlign: 'center', color: '#888', marginBottom: 30}
});