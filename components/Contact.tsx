import { Image, Text, View } from 'react-native';

export default function Contact({name, phone, avatar}: {name: string; phone: string; avatar: string}) {
    return(
        <View style={{flex: 1,flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
            <View style={{width: 50, height: 50, borderRadius: 25, overflow: 'hidden', marginRight: 10}}>
                <Image source={{uri: avatar}} style={{width: '100%', height: '100%'}} />
            </View>
            <View>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>{name}</Text>
                <Text style={{fontSize: 14, color: 'gray'}}>{phone}</Text>
            </View>
        </View>
    )
}