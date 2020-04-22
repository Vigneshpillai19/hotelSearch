import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hook/useResults';
import resultsList from '../components/resultsList';
import ResultsList from '../components/resultsList';

const SearchScreen = () => {
    const [term, setNewTerm] = useState('');
    const [searchApi, results, errMsg] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    }

    return (
        <>
            <SearchBar 
                term={term}
                onTermChange={(newTerm) => setNewTerm(newTerm)}
                onEnd={() => searchApi()}
            />

            <ScrollView>
                <ResultsList 
                    // navigation={navigation} 
                    results={filterResultsByPrice('$')} 
                    title="Cost Effective" 
                />
                <ResultsList 
                    // navigation={navigation} 
                    results={filterResultsByPrice('$$')} 
                    title="Bit Pricier" 
                />
                <ResultsList 
                    // navigation={navigation} 
                    results={filterResultsByPrice('$$$')} 
                    title="Big Spender" 
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    // mainChild: {
    //     flex: 1.
    // }
})

export default SearchScreen;