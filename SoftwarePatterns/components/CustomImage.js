import React from 'react';
import { Image } from 'react-native';

export class CustomImage extends React.Component {
  render() {
      return (
        <Image
            style={[this.props.style, {flex:1, height: undefined, width: undefined}]}
            source={this.props.source}
            resizeMode="contain"
            {...this.props}
        />
      );
  }
}