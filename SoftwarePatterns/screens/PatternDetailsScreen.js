import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Title, Paragraph, CustomImage, SubTitle } from '../components/common';

export default class PatternDetailsScreen extends React.Component {
    static navigationOptions= ({ navigation }) => {
        return {
          title: navigation.getParam('title', 'Details'),
        };
    }

    getControl(element, index) {
        console.log(index); 
        switch (element.type) {
            case 'title':
                return (
                    <Title key={index} uniqueKey={index}>{element.value}</Title>
                )
            case 'paragraph': 
                return (
                    <Paragraph key={index} uniqueKey={index}>{element.value}</Paragraph>
                )
            case 'image':
                return (
                    <CustomImage key={index} source={{uri: element.value}} />
                )  
            case 'subtitle':
                return (
                    <SubTitle key={index} uniqueKey={index}>{element.value}</SubTitle>
                )
            default:
                break;
        }

        return <View></View>;
    }

    render() {
        const bodyData = require('../data/details/singleton.json');
        let controls = [];
        console.log(bodyData);
        for (let index = 0; index < bodyData.controls.length; index++) {
            const element = bodyData.controls[index];            
            const control = this.getControl(element, index);
            if (control != null) {
                controls.push(control);
            }            
        }

        return (
            <ScrollView style={styles.container}>
                <View style={{flex: 1}}>
                    {controls}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 5
    }
});
