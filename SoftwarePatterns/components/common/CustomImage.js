import React from 'react';
import { Image, Dimensions, View } from 'react-native';

export class CustomImage extends React.Component {
  render() {
      return (
        <View style={{ justifyContent: 'center', flexDirection: 'row', padding: 5 }}>
          <Image
              style={[this.props.style, {height: 300, width: 300}]}
              source={this.props.source}
              resizeMode="contain"
              {...this.props}
          />
        </View>
      );
  }
}