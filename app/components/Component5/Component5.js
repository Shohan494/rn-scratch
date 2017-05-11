import React, { Component } from 'react';
import { AppRegistry, Text, View, ListView, TouchableHighlight } from 'react-native';

export default class Component5 extends Component{
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      userDataSource: ds,
    };
  }

  componentDidMount(){
    this.fetchUsers();
  }

/* problem due to network failing error
  fetchUsers(){
    fetch('https://jsonplaceholder.typoicode.com/users')
      .then( (response) => response.json() )
      .then( (response) => {
        this.setState({
          userDataSource : this.state.userDataSource.cloneWithRows(response)
        })
      })
      .catch((error) => { console.error(error); });

  }
*/

  fetchUsers(){
    var userData = require('./users.json');
    this.setState({
      userDataSource : this.state.userDataSource.cloneWithRows(userData)
    })
  }

  onPress(user){
    this.props.navigator.push({
      id: 'component6',
      user: user
    })
  }

  renderRow(user, sectionId, rowId, highlightRow){
    return(
      <TouchableHighlight onPress={ () => {this.onPress(user)} }>
      <View>
        <Text>NAME: {user.name}, EMAIL: {user.email}</Text>
      </View>
      </TouchableHighlight>
    )
  }

  render(){
    const navigator = this.props.navigator;
    return(
        <ListView
        dataSource = {this.state.userDataSource}
        renderRow = {this.renderRow.bind(this)}
        />
    );
  }
}

AppRegistry.registerComponent('Component5', () => Component5);