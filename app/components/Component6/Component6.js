import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';


export default class Component6 extends Component{
  constructor(props) {
    super(props);
  
    this.state = {
      name: this.props.user.name,
      email: this.props.user.email
    };
  }
  render(){
    return(
      <View>
        <Text>
          {this.state.name}
        </Text>
        <Text>
          {this.state.email}
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Component6', () => Component6);