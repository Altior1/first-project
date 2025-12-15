import MyImage from '@/components/Images';
import { Text, View } from 'react-native';

export default function ProductView() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#222831ff'}}>  
            <Text style={{fontSize: 20, marginBottom: 20, color: '#f7eeeeff', flex: 1}}>Product View Screen</Text>
            <MyImage />
        </View>
    );
}