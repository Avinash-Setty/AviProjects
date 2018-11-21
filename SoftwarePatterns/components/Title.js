import React from 'react';
import { Text } from 'react-native';

export class Title extends React.Component {
  render() {
    return 
      (<Text {...this.props} style={[this.props.style, {fontSize: 14, fontWeight: 'bold'}]}>
        {this.props.children}
      </Text>);
  }
}