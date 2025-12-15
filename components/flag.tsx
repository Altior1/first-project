import { View } from "react-native";
export function Flag() {
    return <View style={{flexDirection: "row", height: 200}}>
        <View style={{backgroundColor: "blue", flex: 1}} />
        <View style={{backgroundColor: "white", flex: 1}} />
        <View style={{backgroundColor: "red", flex: 1}} />
    </View>;
}