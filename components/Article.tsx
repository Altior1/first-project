import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Article({name, content, id }: {name: string; content: string, id: string}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{flex:1, fontSize: 30, color: 'white'}}>Articles Index Screen</Text>
      <View style={{flex:1}}>
        <Link href={`/articles/${id}`}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>{name}</Text>
        <Text style={{color: 'white'}}>{content}</Text>
        </Link>
      </View>
    </View>
  );
}