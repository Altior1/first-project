import { FlatList, View } from "react-native";
import Article from "./Article";

const articleGenerator = (id: number) => {
  return {
    id: id.toString(),
    title: `Article Title ${id}`,
    summary: `This is a summary of article ${id}. It provides an overview of the content.`,
  };
};

export default function ListArticles() {
  const articles = Array.from({ length: 50 }, (_, i) => articleGenerator(i + 1));

  return (
    <View style={{ flex: 1,width: '100%' }}>
    <FlatList 
      data={articles} 
      renderItem={({item}) => <Article id={item.id} name={item.title} content={item.summary} />} 
      keyExtractor={(article) => article.id} 
    />
    </View>
  );
}   
