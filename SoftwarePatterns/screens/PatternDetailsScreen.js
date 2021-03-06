import React from 'react';
import { View, ScrollView, StyleSheet, Image, Dimensions } from 'react-native';
import { Title, Paragraph, CustomImage, SubTitle } from '../components/common';

// Singleton: https://www.geeksforgeeks.org/singleton-design-pattern/ 

export default class PatternDetailsScreen extends React.Component {
    static navigationOptions= ({ navigation }) => {
        return {
          title: navigation.getParam('title', 'Details'),
        };
    }

    getControl(element, index) {
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

    getPatternDetails(){
        const fileName = this.props.navigation.getParam('fileName', 'singleton')
        switch (fileName.toLowerCase()) {
            case "singleton":
                return require(`../data/details/singleton.json`);
            case "bridgepattern":
                return require(`../data/details/bridgepattern.json`);
            case "factorypattern":
                return require(`../data/details/factorypattern.json`);
            case "adapterpattern":
                return require(`../data/details/adapterpattern.json`);
            default:
                return require(`../data/details/singleton.json`);
        }
    }

    render() {
        const bodyData = this.getPatternDetails();
        let controls = [];
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
