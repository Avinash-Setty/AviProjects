import React from 'react';
import { Text } from 'react-native';

export class Paragraph extends React.Component {
  render() {
    return (
        <Text {...this.props} style={[this.props.style, {fontSize: 12, fontWeight: 'normal'}]}>
          {this.props.children}
        </Text>
      );
  }
}