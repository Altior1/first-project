import Article from "@/components/Article";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export default function ArticleDetails() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  
    <Article id={id as string} name={`Article Title ${id as string}`} content={`This is the detailed content of article ${id as string}.`} />   
      
    </View>
  );
}   