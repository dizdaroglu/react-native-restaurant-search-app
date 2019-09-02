import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image, Dimensions } from 'react-native'
import yelp from '../api/yelp';
import ResultDetails from '../components/ResultDetails';

const { width, height } = Dimensions.get("window");

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);

    const id = navigation.getParam('id');


    const getResult = async (id) => {
        const res = await yelp.get(`/${id}`);
        setResult(res.data);
    };
    useEffect(() => {
        getResult(id);
    }, []);

    if (!result)
        return null;
    return (
        <View style={{ flex: 1 }}>
            <Image
                style={styles.image}
                source={{ uri: result.image_url }}
            />
            <View style={styles.context}>
                <Text style={styles.name}>{result.name}</Text>
                <Text style={styles.stars}>{result.rating} Stars, {result.review_count} Reviews</Text>
                <Text style={{ marginVertical: 10 }}>{result.price} - {result.alias}</Text>
                <Text style={styles.open}>{result.is_closed ? <Text style={{ color: '#67b933', marginVertical: 10 }}>Open</Text> : <Text style={{ color: 'red', marginVertical: 10 }}>Close</Text>}</Text>
            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    image: {
        height: 200,
        width: width,
        marginVertical: 10,
        borderRadius: 5,
    },
    stars: {
        alignSelf: 'flex-end',
        position: 'absolute',
        padding: 10,
        color: 'red',
        fontSize: 15,
        backgroundColor: '#7f7d7d',
        opacity: 0.3,
        fontWeight: '900',
        borderRadius: 3,
        top: 0,

        borderColor: 'white',
        borderWidth: 1,

        marginVertical: 10
    },
    context: {
        margin: 10,

    },
    name: {
        fontSize: 19,
        color: 'black',
        marginVertical: 10
    }
});

export default ResultsShowScreen
