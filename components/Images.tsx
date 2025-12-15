// Installation : npx expo install expo-image
import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function MyImage() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Image avec Expo Image</Text>
            <Image
                style={styles.image}
                source="https://picsum.photos/seed/696/3000/2000"
                placeholder={{blurhash}} // L'aperçu magique
                contentFit="cover" // Remplacer resizeMode
                transition={1000} // Fondu d'une seconde à l'apparition
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
    image: {flex: 4, width: 500, height: '100%', backgroundColor: '#0553'},
    text: {fontSize: 20, marginTop: 70, color: '#5a36d2ff', flex: 1},
});