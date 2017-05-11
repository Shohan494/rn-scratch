import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet,
	TouchableHighlight,
	TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
	myView: {
		backgroundColor: 'blue'
	},
	myText: {
		color: 'white'
	},
	container: {
		flexDirection: 'row',
		height: 100
	},
	v1: {
		flex: 1,
		backgroundColor: 'red',
		padding: 10
	},
	v2: {
		flex: 1,
		backgroundColor: 'green',
		padding: 10
	},
	v3: {
		flex: 1,
		backgroundColor: 'blue',
		padding: 10
	}

});

export default class Component2 extends Component{
	
	onPress(){
		alert('Area pressed')
	}

	onPress2(){
		alert('Area 2 pressed')
	}

  render(){
    return(
    	<View>
			      <View style={styles.myView}>
			        <Text style={styles.myText}>
			        	Hello Shohan from Component 2!!
			        </Text>
			      </View>
		        <View style={styles.container}>
		        		<TouchableHighlight
		        		  onPress={this.onPress}
		        		  style={styles.v1}
		        		  underlayColor="blue"
		        		>
				        <View>
				        	<Text>View 1</Text>
				        </View>
				        </TouchableHighlight>

		        		<TouchableOpacity
		        		  onPress={this.onPress2}
		        		  style={styles.v2}
		        		  underlayColor="black"
		        		>
				        <View style={styles.v2}>
				        	<Text>View 2</Text>
				        </View>
								</TouchableOpacity>
				        
				        <View style={styles.v3}>
				        	<Text>View 3</Text>
				        </View>
		        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('Component2', () => Component2);