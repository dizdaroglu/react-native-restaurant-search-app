import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.searchBar}>
            <Ionicons name="md-search" size={30} style={styles.icon} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        margin: 10,
        backgroundColor: '#F0EEEE',
        borderRadius: 5,
        height: 50,
        marginHorizontal: 15,
        flexDirection: 'row',
    },
    icon: {
        height: 30,
        alignSelf: 'center',
        marginHorizontal: 15
    },
    input: {
        flex: 1,
        fontSize: 17
    }
});

export default SearchBar
