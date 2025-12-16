import { FlatList, View } from "react-native";
import Contact from "./Contact";


const contactGenerator = (id: number) => {
  return {
    id: id.toString(),
    name: `Contact ${id}`,
    phone: `+1 (555) 000-${String(id).padStart(4, '0')}`,
    avatar: `https://i.pravatar.cc/150?img=${id % 70 + 1}` // Using a placeholder avatar service
  };
};
export default function ContactList() {
   const contacts = Array.from({ length: 50 }, (_, i) => contactGenerator(i + 1));
  return (
    <View style={{ width: '100%' }}>
      <FlatList 
        data={contacts} 
        renderItem={({item}) => <Contact name={item.name} phone={item.phone} avatar={item.avatar} />} 
        keyExtractor={(contact) => contact.id} 
      />
    </View>
  );
}