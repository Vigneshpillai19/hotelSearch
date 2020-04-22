import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetails from './ResultDetails';

const ResultsList = ({ title, results, navigation }) => {

    if(!results.length){
        return null;
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.resList}>
                {title}
            </Text>
            <FlatList
                horizontal
                data={results}
                showsHorizontalScrollIndicator={false}
                keyExtractor={result => result.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('resultShow', { id: item.id });
                        }}>
                            <ResultsDetails result={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    resList: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        marginLeft: 15,
    },
    container: {
        // marginLeft: 15,
    }
})

export default withNavigation(ResultsList);