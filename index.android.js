import React, { Component } from 'react';
import { AppRegistry, Text, View, Navigator } from 'react-native';

//after creating the file Component1.js
import Component1 from './app/components/Component1/Component1';
import Component2 from './app/components/Component2/Component2';
import Component3 from './app/components/Component3/Component3';
import Component4 from './app/components/Component4/Component4';
import Component5 from './app/components/Component5/Component5';
import Component6 from './app/components/Component6/Component6';

//change in view
// <Component1 message="Hello from message" />

export default class AwesomeProject2 extends Component{

  renderScene(route, navigator){
    switch(route.id){
      case 'component5':
        return (<Component5 navigator={this.props.navigator} title="component5" />)
      case 'component6':
        return (<Component6 user={route.user} navigator={this.props.navigator} title="component6" />)
    }
  }
  render(){
    return(
      <View>

        <Component5 />
        <Navigator 
          initialRoute = {{id: 'component5'}}
          renderScene = {this.renderScene.bind(this)}
          configureScreen = {(route,routeStack) => Navigator.SceneConfigs.FloatFromBottom}

        />
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject2', () => AwesomeProject2);