import { View } from "react-native";

import ContactList from "../../components/ContactList";

export default function ContactsView() {
  return (
    <View style={{
      flex: 1,
      padding: 20,
      backgroundColor: 'white',
      alignItems: 'center', // Center items horizontally
      justifyContent: 'center' // Center items vertically
    }}>
      <ContactList />
    </View>
  );
}