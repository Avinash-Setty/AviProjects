import { React } from 'react';
import { View } from 'react-native';
import { Title, Paragraph, CustomImage } from './common';

export default class Agregator extends React.Component {
    
    getControl(element) {
        console.log(element);
        switch (element.type) {
            case 'title':
                return (
                    <Title>{element.value}</Title>
                )
                break;
            case 'paragraph':
                return (
                    <Paragraph>{element.value}</Paragraph>
                )
                break;
            case 'image':
                return (
                    <CustomImage source={{uri: element.value}} />
                )
                break;
        
            default:
                break;
        }

        return <View></View>;
    }

    render() {
        // const bodyData = require('../data/details/singleton.json');
        // let controls = null;
        // console.log(bodyData);
        // for (let index = 0; index < bodyData.controls.length; index++) {
        //     const element = bodyData.controls[index];            
        //     const control = this.getControl(element);
        //     if (control != null) {
        //         controls.push(control);
        //     }            
        // }

        return (
            <View/>
        );
    }
}
