import React from 'react';
import { Text, View } from 'react-native';

export class Title extends React.Component {
  render() {
    return (
        <View key={this.props.uniqueKey} style={{flex: 1, flexDirection: 'row', justifyContent: 'center', padding: 5, borderColor: '#DDD', borderBottomWidth: 1}}>
          <Text {...this.props} style={[this.props.style, {fontSize: 20, fontWeight: 'bold'}]}>
            {this.props.children}
          </Text>
        </View>
      );
  }
}