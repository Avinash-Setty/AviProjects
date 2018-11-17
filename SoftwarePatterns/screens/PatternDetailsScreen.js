import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class PatternDetailsScreen extends React.Component {
    static navigationOptions = {
        title: 'Pattern Details'
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Details Screen</Text>
                </View>
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
