import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ResultDetails = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.img}
                source={{ uri: result.image_url }}
            />
            <Text style={styles.imgName}>
                {result.name}
            </Text>
            <Text>
                {result.rating} Stars, {result.review_count} Reviews
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 250,
        height:100,
        borderRadius: 4,
        marginBottom: 5,
    },
    imgName: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    container: {
        marginLeft: 15,
        marginRight: 10,
        marginBottom: 10,
    }
});

export default ResultDetails;