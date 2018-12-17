import React from 'react';
import { Text, View } from 'react-native';

export class Paragraph extends React.Component {
  render() {
    return (
        <View key={this.props.uniqueKey} style={{padding: 5, justifyContent: 'flex-start'}}>
          <Text {...this.props} style={[this.props.style, {fontSize: 14, fontWeight: 'normal'}]}>
            {this.props.children}
          </Text>
        </View>
      );
  }
}