import * as Haptics from 'expo-haptics';
import * as Location from 'expo-location';
import React, { useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';

export default function WhereAmI() {
    const [location, setLocation] = useState(null as Location.LocationObject | null);
    const [address, setAddress] = useState(null as Location.LocationGeocodedAddress | null);
    const [errorMsg, setErrorMsg] = useState(null as string | null);
    const [loading, setLoading] = useState(false);

    const handleLocate = async () => {
        // 1. Feedback Tactile (Click)
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

        setLoading(true);
        setErrorMsg(null);
        setLocation(null);
        setAddress(null);

        try {
            // 2. Demander la permission
            let {status} = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                setErrorMsg('Permission refusée ! Nous ne pouvons pas vous localiser.');
                setLoading(false);
                return;
            }

            // 3. Récupérer la position
            let loc = await Location.getCurrentPositionAsync({});
            setLocation(loc);

            // 4. Reverse Geocoding (Lat/Long -> Adresse)
            let addresses = await Location.reverseGeocodeAsync({
                latitude: loc.coords.latitude,
                longitude: loc.coords.longitude
            });

            if (addresses.length > 0) {
                setAddress(addresses[0]);
            }

            // 5. Feedback Tactile (Success)
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

        } catch (error: any) {
            setErrorMsg(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Button title="📍 Où suis-je ?" onPress={handleLocate} disabled={loading}/>

            {loading && <ActivityIndicator size="large" color="#0000ff" style={{marginTop: 20}}/>}

            {errorMsg ? <Text style={styles.error}>{errorMsg}</Text> : null}

            {location && (
                <View style={styles.resultContainer}>
                    <Text style={styles.coords}>
                        Lat: {location.coords.latitude.toFixed(4)} | Long: {location.coords.longitude.toFixed(4)}
                    </Text>
                    {address && (
                        <Text style={styles.address}>
                            {address.street}, {address.city} {"\n"}
                            {address.region}, {address.country}
                        </Text>
                    )}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20},
    error: {color: 'red', marginTop: 20, textAlign: 'center'},
    resultContainer: {marginTop: 20, alignItems: 'center', backgroundColor: '#f0f0f0', padding: 15, borderRadius: 10},
    coords: {fontSize: 16, fontWeight: 'bold', marginBottom: 10},
    address: {fontSize: 14, color: '#555', textAlign: 'center'}
});