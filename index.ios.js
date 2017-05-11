import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class AwesomeProject2 extends Component{
  render(){
    return(
      <View>
      <Text>
        Hello!!
      </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject2', () => AwesomeProject2);