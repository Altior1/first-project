import { Link, useLocalSearchParams } from "expo-router";
import { View } from "react-native";


export default function SlugScreen() {
  const { slug } = useLocalSearchParams();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Link href={`/`} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', color: 'blue', fontSize: 20  }}> 
      Go to details for {slug}
      mais return home
    </Link>
    </View>
  );
}