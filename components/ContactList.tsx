import { FlatList, View } from "react-native";
import Contact from "./Contact";
export default function ContactList() {
    const contacts = [
        {name: 'John Doe', phone: '123-456-7890', avatar: 'https://randomuser.me/api/portraits/men/1.jpg', id: '1'},
        {name: 'Jane Smith', phone: '987-654-3210', avatar: 'https://randomuser.me/api/portraits/women/1.jpg', id: '2'},
        {name: 'Alice Johnson', phone: '555-123-4567', avatar: 'https://randomuser.me/api/portraits/women/2.jpg', id: '3'},
    {name: 'Bob Williams', phone: '444-555-6666', avatar: 'https://randomuser.me/api/portraits/men/2.jpg', id: '4'},
    {name: 'Emily Davis', phone: '222-333-4444', avatar: 'https://randomuser.me/api/portraits/women/3.jpg', id: '5'},
    {name: 'Michael Brown', phone: '111-222-3333', avatar: 'https://randomuser.me/api/portraits/men/3.jpg', id: '6'},
    {name: 'Sarah Wilson', phone: '999-888-7777', avatar: 'https://randomuser.me/api/portraits/women/4.jpg', id: '7'},
    {name: 'David Lee', phone: '888-777-6666', avatar: 'https://randomuser.me/api/portraits/men/4.jpg', id: '8'},
    {name: 'Laura Clark', phone: '777-666-5555', avatar: 'https://randomuser.me/api/portraits/women/5.jpg', id: '9'},
    {name: 'James Lewis', phone: '666-555-4444', avatar: 'https://randomuser.me/api/portraits/men/5.jpg', id: '10'},
    {name: 'Olivia Walker', phone: '555-444-3333', avatar: 'https://randomuser.me/api/portraits/women/6.jpg', id: '11'},
    {name: 'Daniel Hall', phone: '444-333-2222', avatar: 'https://randomuser.me/api/portraits/men/6.jpg', id: '12'},
    {name: 'Sophia Allen', phone: '333-222-1111', avatar: 'https://randomuser.me/api/portraits/women/7.jpg', id: '13'},
    {name: 'Matthew Young', phone: '222-111-0000', avatar: 'https://randomuser.me/api/portraits/men/7.jpg', id: '14'},
    {name: 'Chloe King', phone: '111-000-9999', avatar: 'https://randomuser.me/api/portraits/women/8.jpg', id: '15'},
    {name: 'Anthony Wright', phone: '000-999-8888', avatar: 'https://randomuser.me/api/portraits/men/8.jpg', id: '16'},
    {name: 'Grace Scott', phone: '999-888-7770', avatar: 'https://randomuser.me/api/portraits/women/9.jpg', id: '17'},
    {name: 'Joshua Green', phone: '888-777-6660', avatar: 'https://randomuser.me/api/portraits/men/9.jpg', id: '18'},
    {name: 'Ella Adams', phone: '777-666-5550', avatar: 'https://randomuser.me/api/portraits/women/10.jpg', id: '19'},
    {name: 'Andrew Baker', phone: '666-555-4440', avatar: 'https://randomuser.me/api/portraits/men/10.jpg', id: '20'},
    {name: 'Mia Nelson', phone: '555-444-3330', avatar: 'https://randomuser.me/api/portraits/women/11.jpg', id: '21'},
    {name: 'Ryan Carter', phone: '444-333-2220', avatar: 'https://randomuser.me/api/portraits/men/11.jpg', id: '22'},
    {name: 'Lily Mitchell', phone: '333-222-1110', avatar: 'https://randomuser.me/api/portraits/women/12.jpg', id: '23'},
    {name: 'Benjamin Perez', phone: '222-111-0001', avatar: 'https://randomuser.me/api/portraits/men/12.jpg', id: '24'},
    {name: 'Zoe Roberts', phone: '111-000-9991', avatar: 'https://randomuser.me/api/portraits/women/13.jpg', id: '25'},
    {name: 'Samuel Turner', phone: '000-999-8881', avatar: 'https://randomuser.me/api/portraits/men/13.jpg', id: '26'},
    {name: 'Charlotte Phillips', phone: '999-888-7771', avatar: 'https://randomuser.me/api/portraits/women/14.jpg', id: '27'},
    {name: 'Jack Campbell', phone: '888-777-6661', avatar: 'https://randomuser.me/api/portraits/men/14.jpg', id: '28'},
    {name: 'Amelia Parker', phone: '777-666-5551', avatar: 'https://randomuser.me/api/portraits/women/15.jpg', id: '29'},
    {name: 'Henry Evans', phone: '666-555-4441', avatar: 'https://randomuser.me/api/portraits/men/15.jpg', id: '30'},
    {name: 'Isabella Edwards', phone: '555-444-3331', avatar: 'https://randomuser.me/api/portraits/women/16.jpg', id: '31'},
    {name: 'Logan Collins', phone: '444-333-2221', avatar: 'https://randomuser.me/api/portraits/men/16.jpg', id: '32'},
    {name: 'Sophie Stewart', phone: '333-222-1112', avatar: 'https://randomuser.me/api/portraits/women/17.jpg', id: '33'},
    {name: 'Jacob Sanchez', phone: '222-111-0002', avatar: 'https://randomuser.me/api/portraits/men/17.jpg', id: '34'},
    {name: 'Harper Morris', phone: '111-000-9992', avatar: 'https://randomuser.me/api/portraits/women/18.jpg', id: '35'},
    {name: 'Alexander Rogers', phone: '000-999-8882', avatar: 'https://randomuser.me/api/portraits/men/18.jpg', id: '36'},
    {name: 'Ava Reed', phone: '999-888-7772', avatar: 'https://randomuser.me/api/portraits/women/19.jpg', id: '37'},
    {name: 'William Cook', phone: '888-777-6662', avatar: 'https://randomuser.me/api/portraits/men/19.jpg', id: '38'},
    {name: 'Emily Morgan', phone: '777-666-5552', avatar: 'https://randomuser.me/api/portraits/women/20.jpg', id: '39'},
    {name: 'Mason Bell', phone: '666-555-4442', avatar: 'https://randomuser.me/api/portraits/men/20.jpg', id: '40'},
    {name: 'Ella Murphy', phone: '555-444-3332', avatar: 'https://randomuser.me/api/portraits/women/21.jpg', id: '41'},
    {name: 'Ethan Bailey', phone: '444-333-2222', avatar: 'https://randomuser.me/api/portraits/men/21.jpg', id: '42'},
    {name: 'Madison Rivera', phone: '333-222-1113', avatar: 'https://randomuser.me/api/portraits/women/22.jpg', id: '43'},
    {name: 'Carter Cooper', phone: '222-111-0003', avatar: 'https://randomuser.me/api/portraits/men/22.jpg', id: '44'},
    {name: 'Abigail Richardson', phone: '111-000-9993', avatar: 'https://randomuser.me/api/portraits/women/23.jpg', id: '45'},
    {name: 'Sebastian Cox', phone: '000-999-8883', avatar: 'https://randomuser.me/api/portraits/men/23.jpg', id: '46'},
    {name: 'Mila Howard', phone: '999-888-7773', avatar: 'https://randomuser.me/api/portraits/women/24.jpg', id: '47'},
    {name: 'Elijah Ward', phone: '888-777-6663', avatar: 'https://randomuser.me/api/portraits/men/24.jpg', id: '48'},
    {name: 'Scarlett Torres', phone: '777-666-5553', avatar: 'https://randomuser.me/api/portraits/women/25.jpg', id: '49'},
    {name: 'Lucas Peterson', phone: '666-555-4443', avatar: 'https://randomuser.me/api/portraits/men/25.jpg', id: '50'},
    ];
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