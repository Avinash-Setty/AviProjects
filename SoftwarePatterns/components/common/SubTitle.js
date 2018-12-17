import React from 'react';
import { Text, View } from 'react-native';

export class SubTitle extends React.Component {
  render() {
    return (
        <View 
          key={this.props.uniqueKey} 
          style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', padding: 5, borderColor: '#DDD', borderBottomWidth: 1}}>
          <Text {...this.props} style={[this.props.style, {fontSize: 16, fontWeight: '600'}]}>
            {this.props.children}
          </Text>
        </View>
      );
  }
}