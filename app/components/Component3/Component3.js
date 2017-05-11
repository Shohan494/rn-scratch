import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput, Switch} from 'react-native';

export default class Component3 extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	textValue: "hello"
	  };
	}

	onChangeText(value){
		this.setState({
			textValue: value,
			switchValue: true
		});
	}

	onSubmit(){
		alert("Submitted")
	}

	onSwitchChange(value){
		this.setState({
			switchValue: value
		})
	}

  render(){
    return(
      <View>
	      <Text>
	        Component 3!!
	      </Text>
      	<TextInput
      		placeholder = "Enter Text"
      		value = {this.state.textValue}

      		onChangeText = {(value) => this.onChangeText(value)}
      		onSubmitEditing = {this.onSubmit}
      	/>
      	<Text>
      	  {this.state.textValue}
      	</Text>
      	<Switch
      		value = {this.state.switchValue}
      		onValueChange = {(value) => this.onSwitchChange(value)}
      	/>
      </View>
    );
  }
}

AppRegistry.registerComponent('Component3', () => Component3);