import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Agregator } from '../components';

export default class PatternDetailsScreen extends React.Component {
    static navigationOptions = {
        title: 'Pattern Details'
    };

    render() {
        return (
            <View style={styles.container}>
                <Agregator />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    }
});
