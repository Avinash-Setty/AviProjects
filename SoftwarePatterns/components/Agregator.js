import { React } from 'react';
import { View } from 'react-native';
import { Title, Paragraph, CustomImage } from './';

class Agregator extends React.Component {
    
    getControl(element) {
        let uiElement = null;
        switch (element.type) {
            case 'title':
                uiElement = (
                    <Title>{element.value}</Title>
                )
                break;
            case 'paragraph':
                uiElement = (
                    <Paragraph>{element.value}</Paragraph>
                )
                break;
            case 'image':
                uiElement = (
                    <CustomImage source={{uri: element.value}} />
                )
                break;
        
            default:
                break;
        }

        return uiElement;
    }

    render() {
        const bodyData = require('../data/details/singleton.json');
        let controls = [];
        for (let index = 0; index < bodyData.controls.length; index++) {
            const element = bodyData.controls[index];
            controls.push(this.getControl(element));
        }

        return (
            <View style={{flex: 1}}>
                {controls}
            </View>
        )
    }
}

export default Agregator;
