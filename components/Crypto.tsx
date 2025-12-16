import React, { memo } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';


const generateData = (count: number) => {
    
    return new Array(count).fill(0).map((_, i) => {
        let change_value = (Math.random() * 20 - 10);
        return(
        {
        id: i.toString(),
        symbol: `CRYPTO-${i}`,
        price: (Math.random() * 1000).toFixed(2),
        change: change_value,
        change_human_percent: change_value.toFixed(2) + '%',
    })});
};
const COINS = generateData(1000);

const CryptoItem = memo(({ symbol, price, change } : { symbol: string; price: string; change: number }) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.symbol}>{symbol}</Text>
            <Text style={styles.price}>${price}</Text>
            <Text style={[styles.change, { color: change >= 0 ? 'green' : 'red' }]}>
                {change}%
            </Text>
        </View>
    );
});

export default function Crypto() {
    return (
        <View style={styles.container}>
            <FlatList
                data={COINS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <CryptoItem
                        symbol={item.symbol}
                        price={item.price}
                        change={item.change}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    symbol: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    price: {
        fontSize: 16,
    },
    change: {
        fontSize: 16,
    },
});


