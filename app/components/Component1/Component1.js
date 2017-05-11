import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class Component1 extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	name: "shohan",
	  	showName: false,
	  	message: this.props.message
	  };
	}

	static defaultProps = {
		message: "Hi There Deliah!!"
	}

  render(){
  	// setting up the name property using the showName state
  	let name = this.state.showName ? this.state.name : 'No name';
    return(
      <View>
	      <Text>
	        Hello from Component 1!!
	      </Text>
	      <Text>
	      	{this.props.message} from Component props
	      </Text>
	      <Text>
	      	{this.state.message} from state
	      </Text>
	      <Text>
	      	{this.state.name} from state
	      </Text>
	      <Text>
	      	{name} from variable inside render()
	      </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Component1', () => Component1);