import { Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { useFonts } from 'expo-font';
import { Image } from 'expo-image';
import { Text, View } from 'react-native';

const blurhash = 'L6PZfSi_.AyE_3t7t7R**0o#DgR4';

export default function CartePostale() {
    const [font, fontError] = useFonts({"Pacifico": Pacifico_400Regular });
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{flex: 1, fontSize: 20, color: 'white', fontFamily: font ? "Pacifico" : undefined}}>Carte Postale Component</Text>
            <Text style={{flex: 1, color: 'white'}}>This is a postcard styled text using Pacifico font.</Text>
            <Image
                source={require('@/assets/images/plage4.jpeg')}
                style={{flex: 1,width: 300, height: 200, borderRadius: 10}}
                placeholder={{blurhash}}
            />
        </View>
    )
}